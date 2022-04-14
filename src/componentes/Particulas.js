import React from 'react'
import '../App.css'
import Particles from "react-tsparticles";

 const particlesParams =  {
    "fps_limit":60,
    "interactivity":{
        "detectsOn":"canvas",
        "events":{
        "onClick":{
            "enable":true,
            "mode":"push"
        },
        "onHover":{
            "enable":false,
            "mode":"repulse"
        },
        "resize":true
        },
        "modes":{
        "push":{
            "particles_nb":4
        },
        "repulse":{
            "distance":200,
            "duration":0.4}
        }
        },
        "particles":{
        "color":{
            "value": "#fff",
        },
        "links":{
            "color": "#fff",
            "distance":150,
            "enable":true,
            "opacity":0.4,
            "width":1
        },
        "move":{
            "bounce":false,
            "direction":"none",
            "enable":true,
            "outMode":"out",
            "random":false,
            "speed":2,
            "straight":false
        },
        "number":{
            "density":{
            "enable":true,
            "area":800
            },
            "value":40
        },
        "opacity":{
            "value":0.5
            },
        "shape":{
            "type":"circle"
        },"size":{
            "random":true,
            "value":5
        }
        },
    "detectRetina": true
}

export default function Particulas(){
    return(
        <div className= 'Particulas'>
            <Particles style={{position: 'absolute', top: 0, left: 0}}
        params={particlesParams} />
           
            
        </div>
    )
}
