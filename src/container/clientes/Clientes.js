import React, {Component} from  'react';
import  axios from 'axios';
import './Clientes.css'


class Clientes extends Component {
    state = {
        dataClientes: [],
        datoAtualSN: {},
        loading: false,
        datoValidando: [],
        modalUser: false,
        mensaje:""
    }
    
    // validar en el sistema de identifacion nacional
    validarClienteSN  = (data) => { 
        
        this.setState({loading:true})
        const cliente = data;
        axios.get('http://localhost:3004/sistemaDeIdentificacion', {
            params: {
                identificacion: cliente.identificacion
            }
        })
        .then(
            res => this.setState({
                datoAtualSN:res.data
            })
        )
        .then(()=> {
                setTimeout(() =>{
                    this.setState({loading:false})
                }, 1000);
                const personaIdentificada = this.state.datoAtualSN.find(nombreCliente => nombreCliente.nombre === cliente.nombre )
               
                this.setState({datoValidando:cliente})

                if (personaIdentificada !== undefined){
                    const personaAntecedentes = this.validarAntecedentes(cliente,personaIdentificada)
                }
                else{
                    setTimeout(() =>{
                        this.setState({modalUser:true,mensaje:"El usuario no coincide en el sistema"})
                    }, 1000);
                }

                this.setState({modalUser:false,mensaje:""})

            }
            
        )
    };

    validarAntecedentes = (data) => {
        const cliente = data;
        axios.get('http://localhost:3004/sistemaDeAntecedentes', {
            params: {
                identificacion: cliente.identificacion
            }
        })
        .then((res) =>{
            const dataUser= res.data;
            if(dataUser.length !== 0){
                if(dataUser[0].response === false){
                    setTimeout(() =>{
                        this.setState({modalUser:true,mensaje:"Validacion Exitosa"})
                    }, 1000);
                }
                else{
                    setTimeout(() =>{
                        this.setState({modalUser:true,mensaje:dataUser[0].Antecedentes})
                    }, 1000);
                }

            }else{
                this.setState({modalUser:true,mensaje:"Usuario no encontrado"})
            }
        })
    }
    
    componentDidMount () {
        axios.get('http://localhost:3004/clientesPotenciales', {params:{estado:false}})
            .then(
                res => this.setState({
                    dataClientes:res.data
                })
            )
    }

    render () {
        const { dataClientes, loading, modalUser,mensaje, datoValidando } = this.state
        return (
            <div>
                { loading && <div className="modal modal-alert--process"> 
                    <p>Validando informacion para el usuario : </p> 
                    <p>{datoValidando.identificacion}</p> 
                    <p>{datoValidando.nombre}</p>
                  </div> 
                }
                { 
                    modalUser && <div className="modal modal-alert--success">
                     <p> {mensaje} </p> 
                     </div> 
                }
                <div className="bloque-contenedor">
                <div className="table-responsive">                   
                        <div className="table-list">
                            <table className="table">
                                <thead className="table-head">
                                    <tr>
                                        <th>
                                            Iidentificación
                                        </th>
                                        
                                        <th>
                                            Nombre
                                        </th>
                                        
                                        <th>
                                            Apellido
                                        </th>
                                        
                                        <th>
                                            Correo
                                        </th>
                                        
                                        <th>
                                            Fecha de nacimiento
                                        </th>
                                        <th>
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    {dataClientes.map(dataCliente =>(
                                        <tr key={dataCliente.identificacion+dataCliente.correo}>
                                            <td>
                                                {dataCliente.identificacion}
                                            </td>
                                            
                                            <td>
                                            {dataCliente.nombre}
                                            </td>

                                            <td>
                                            {dataCliente.apellido}
                                            </td>

                                            <td>                                            
                                            {dataCliente.correo}
                                            </td>
                                            
                                            <td>
                                            
                                            {dataCliente.fechaNacimiento}
                                            </td>
                                            
                                            <td>
                                                <button className="btn-validacion" onClick={() => this.validarClienteSN(dataCliente)}>
                                                    Validar en SN
                                                </button>
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Clientes;