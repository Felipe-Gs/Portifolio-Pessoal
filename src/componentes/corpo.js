import React from 'react'
import '../App.css'
import Particulas from './Particulas'

export default function Corpo(){
    return(
        <div className= 'Corpo'>
            <h1 span id="Nome" style={{zIndex:5, background:"transparent"}}><p className='line typing-animation'>Hello, I'm {"<Felipe G/>"}</p></h1><span/>
            <p style={{zIndex:10, fontSize:'30px', background:"transparent", color:'whitesmoke', whiteSpace: 'nowrap', overflow: 'hidden', fontFamily:'Segoe UI'}}>Welcome...</p>
            <Particulas/>
        </div>
    )
}

