import React from 'react'
import Corpo from './componentes/corpo'
import Dados from './componentes/Dados'
import Sobre from './componentes/Sobre/index'
import Habilidades from './componentes/Habilidades/index.js'
import Final from './componentes/Final';
import Particulas from './componentes/Particulas';
import Icones from './componentes/Icones/index.js'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './componentes/Navbar'
import './App.css'

export default function App(){
  return(
    
    <>
    
    <div className='App'>
     
    <Particulas/>
    <Dados/>
    <Corpo/>
    <Sobre/>
    <Final/>
    <Habilidades/>
    <Icones/>
    </div>
   
    </>
    
    
  )
 
}

