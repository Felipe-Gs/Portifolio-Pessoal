import React from 'react'
import '../App.css'
import logo from '../logo_felipe.png';

export default function Dados(){
    return(
        <section  className='Dados'>
            <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="!#"><img className='logo' src={logo} alt="logo..."/></a>
            <button style={{zIndex:2}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="False" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div style ={{zIndex:2}} class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" href="https://www.canva.com/design/DAEpQGiKoog/f0N0b9J6skUrJvKD9VMyIw/view?utm_content=DAEpQGiKoog&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noreferrer">Baixe meu <span class="sr-only">Curriculo</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="https://www.instagram.com/_lipe_gs/" target="_blank" rel="noreferrer">Instagram</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/felipe-gs/" target="_blank" rel="noreferrer">Linkedin</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="https://github.com/felipe-gs" target="_blank" rel="noreferrer">Github</a>
                </li>
            </ul>
            </div>
        </nav>
        </section>
    )
}