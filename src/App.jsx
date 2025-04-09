import styles from './App.module.css'

import { Header } from './components/Header'
import {  Body  }  from './components/Body'
import { Comment } from './components/Comment';


import'./global.css';

const number=[

""

]

export function App(){
  

  return ( 
   
    <div>
     
       <Header/>
       <Body/>
       

      <span
      >{number.map(Comment=>{
        return(<Comment

         
          
        
        />) 
       })}</span> 

     
                         
                    
              
    
      </div>
    
     )

 
  
}


