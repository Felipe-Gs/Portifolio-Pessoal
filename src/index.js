import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";




function tick(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
     
      
    </React.StrictMode>,
    
    document.getElementById('root')
    
  );
  
}

setInterval(tick, 1000)
tick()



reportWebVitals();
