import React from 'react'
import './style.css'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

export default function Sobre(){
    return(
  
    <div className='Card'>
  <CardGroup style={{backgroundColor:'#333'}}>
  <Card style={{backgroundColor:'#333', marginTop:'200px'}}>
    <Card.Img style={{borderRadius:'50px',}} variant="top" src="SobreMim.jpg" />
    <Card.Body>
      <Card.Title style={{color:'white'}}>Sobre Mim</Card.Title>
      <Card.Text style={{color:'white'}}>
        Me chamo Felipe Gomes, tenho 19 anos, Busco entrar no ramo de desenvolvimento, aplicando os conhecimentos adquiridos ao longo da faculdade e crescer nessa área que cada dia mais busca profissionais qualificados.
sabendo disso, estudo para que a empresa que me contrate não se desepcione com meu trabalho e que eu possa contribuir com o desenvolvimento da empresa.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     
    </Card.Footer>
  </Card>
  <Card style={{backgroundColor:'#333', marginTop:'200px'}}>
    <Card.Img style={{borderRadius:'50px', WebkitTransform:'scale 1.2', }} variant="top" src="Academica.jpg" />
    <Card.Body style={{backgroundColor:'#333'}}>
      <Card.Title style={{color:'white'}}>Formação Academica</Card.Title>
      <Card.Text style={{color:'white'}}>
      Instituto federal de educação, ciência e tecnologia do ceará (ifce): Técnico em informática.

      Universidade federal do ceará (ufce):
      Estudante em engenharia de software.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  <Card style={{backgroundColor:'#333', marginTop:'200px'}}>
    <Card.Img style={{borderRadius:'50px'}} variant="top" src="Experiencia.jpg" />
    <Card.Body>
      <Card.Title style={{color:'white'}}>Experiencias</Card.Title>
      <Card.Text style={{color:'white'}}>
      Técnico em Informática e estudante em Engenharia de Software, com conhecimento em desenvolvimento web e capacidade em resolver problemas de lógica de programação.
      Experiência com  Python, C, Html, Css3, Git e Git hub,
      Experiência com ReactJs.
      Experiência com metodologias agéis (Scrum).

      </Card.Text>
    </Card.Body>
    <Card.Footer>
     
    </Card.Footer>
  </Card>
</CardGroup>
            
      </div>
      
    )
}