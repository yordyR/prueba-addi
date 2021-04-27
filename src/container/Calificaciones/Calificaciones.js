import React, {Component} from  'react';
import  axios from 'axios';
import './../clientes/Clientes.css'

class Calificaciones extends Component {
    state = {
        dataClientes: [],
        loading: false,
        modalUser: false,
        mensaje:""
    }

    random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    
    generarPuntuacion(data){

        const dataCliente = data

        const puntuacion = this.random(0,100);
        this.setState({modalUser:false,mensaje:""})

        if(puntuacion > 60){
            const url = `http://localhost:3004/clientesPotenciales/${dataCliente.id}`
            let post = {
                "identificacion": dataCliente.identificacion,
                "nombre": dataCliente.nombre,
                "apellido": dataCliente.apellido,
                "correo": dataCliente.correo,
                "fechaNacimiento": dataCliente.fechaNacimiento,
                "estado": true,
                "puntaje": puntuacion
            };
            axios.put(url,post)
            .then(
                (res) => {
                    this.setState({modalUser:true,mensaje:`El puntaje fue de: ${puntuacion}, Nuevo prospecto actualizado`})
                }
            )
        }else{
            this.setState({modalUser:true,mensaje:`Aun no puede ser un prospecto`})

        }
       
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
        const { dataClientes,loading,modalUser,mensaje } = this.state
        return (
            <div>
                { loading && <div className="modal modal-alert--process"> 
                    <p>Generando puntaje : </p> 
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

export default Calificaciones;