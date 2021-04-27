import React, {Component} from 'react';
import axios from 'axios';

class Prospectos extends Component{
    state = {
        dataClientes: [],
        loading: false,
        modalUser: false,
        mensaje:""
    }
    componentDidMount () {
        axios.get('http://localhost:3004/clientesPotenciales', {params:{estado:true}})
            .then(
                res => this.setState({
                    dataClientes:res.data
                })
            )
    }

    render () {
        const { dataClientes } = this.state
        console.log(dataClientes)
        return (
            <div>
                {/* { loading && <div className="modal modal-alert--process"> 
                    <p>Validando informacion para el usuario : </p> 
                    <p>{datoValidando.identificacion}</p> 
                    <p>{datoValidando.nombre}</p>
                  </div> 
                }
                { 
                    modalUser && <div className="modal modal-alert--success">
                     <p> {mensaje} </p> 
                     </div> 
                } */}
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
                                                <button className="btn-validacion" onClick={() => this.generarPuntuacion(dataCliente)}>
                                                   Generar puntaje
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

export default Prospectos;