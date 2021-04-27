import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './container/Home';
import Clientes from './container/clientes/Clientes';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Container from './components/page/Page';
import Prospectos from './container/Prospectos';
import Calificaciones from './container/Calificaciones/Calificaciones';



const Productos = () => (
  <h1>
    Hola productos
  </h1>
)
const Cliente = ({match}) =>{
  console.log(match)
  return (
    <h1>
      idcliente : {match.params.id}
    </h1>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Sidebar />
          <Container>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path='/clientes' component={Clientes} />
              <Route path='/clientes/:id' exact render={Cliente} />
              <Route path='/prospectos' component={Prospectos} />
              <Route path='/calificaciones' component={Calificaciones} />
              <Route path='/productos' 
                component={Productos}  >
                  {(props) =>{
                    console.log(props)
                    return (
                      <Productos />
                    )

                  }}
              </Route>
            
            </Switch>
            
          </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
