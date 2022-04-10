import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './styles.css'
import Particulas from '../Particulas'

export default function Habilidades(){
    return(
       
        <div style={{backgroundColor:'gray'}} className='Habilidades'>
            
            <div>
              <h1>Habilidades</h1> 
            </div>
            <br/>
            
            <div className='grafico'>
                <Particulas/>
                <div className='barra'>
                    Python<ProgressBar style={{width:'85%'}}  variant='success' now={70}animated label={'70%'}/>  </div>  <br/>
                <div className='barra'>
                    C<ProgressBar style={{width:'85%'}}  variant='success' now={70}animated label={'70%'}/>  </div> <br/>
                <div className='barra'>
                    HTML e CSS<ProgressBar style={{width:'85%'}}  variant='success' now={60}animated label={'60%'}/>  </div> <br/>
                <div className='barra'>
                    ReactJs<ProgressBar style={{width:'85%'}}  variant='success' now={50}animated label={'50%'}/>
                </div>
                <br/>
                <div className='barra'>
                    TypeScript<ProgressBar style={{width:'85%'}}  variant='success' now={40}animated label={'40%'}/>
                </div>
                <br/>
                <div className='barra'>
                    JavaScript<ProgressBar style={{width:'85%'}}  variant='success' now={60}animated label={'60%'}/>
                </div>
                <br/>
                <div className='barra'>
                    Git e GitHub<ProgressBar style={{width:'85%'}}  variant='success' now={50}animated label={'50%'}/>
                </div>
                <br/>
                <div className='barra'>
                    Scrum<ProgressBar style={{width:'85%'}}  variant='success' now={60}animated label={'60%'}/>
                </div>
            </div>
       </div>

    )
   
}