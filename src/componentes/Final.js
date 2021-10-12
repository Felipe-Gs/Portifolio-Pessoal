import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Particulas from './Particulas'



export default function Final(){
    return(
     
        <div style={{backgroundColor:'gray'}} className='Carousel'>
        <Carousel fade>
        <Carousel.Item>
          <Particulas/>
          <p style={{textAlign:'center', fontSize:'100px', color:'white'}}>Hobbies</p>
          <p style={{textAlign:'center', fontSize:'50px', color:'white'}}>Estudar</p>
          <img style={{width:'70vw'}}
            className="PrimeiraImagem"
            src ="Imagem1.jpg"
            alt="primeira imagem"
            
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <p style={{textAlign:'center', fontSize:'100px', color:'white'}}>Hobbies</p>
          <p style={{textAlign:'center', fontSize:'50px', color:'white'}}>Leitura</p>
          <img style={{width:'70vw'}}
            className="SegundaImagem"
            src="Imagem2.jpg"
            alt="Segunda Imagem"
          />
        </Carousel.Item>
        <Carousel.Item>
         
          <p style={{textAlign:'center', fontSize:'100px', color:'white'}}>Hobbies</p>
          <p style={{textAlign:'center', fontSize:'50px', color:'white'}}>Futebol</p>
          <img style={{width:'70vw'}}
            className="TerceiraImagem"
            src="Imagem3.jpg"
            alt="Terceira Imagem"
          />
        </Carousel.Item>
      </Carousel>
      
      </div>
      
    )
}