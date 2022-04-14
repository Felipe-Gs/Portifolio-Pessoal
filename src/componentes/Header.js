import React from 'react'
import Fundo from './imgs/fundo.jpg'
import Logo from './imgs/felipe.png'

export default function Header(){
    return(
       
        <div className='Header'>
            <img  className='fotoRedonda' src={Logo}/>
        </div>
    )
}