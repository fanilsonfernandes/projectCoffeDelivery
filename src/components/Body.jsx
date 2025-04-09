
import styles from './Mae.module.css';
import  {PlusCircle}  from 'phosphor-react'
import Clipboard from '../esesst/Clipboard.svg';
import { Comment } from './Comment'








export function Body(props) {

    

    
   
    return (
<div className={styles.butForm}>
<form>
<input

/>


            <button type="submi">Criar
                <PlusCircle className={styles.icon} size={20}/>
            </button>
            </form>
         
            <div className={styles.task}>
               <div className={styles.tpc}>
                <div className={styles.twoBox}>
                    <div className={styles.boxFirst}>
                <span className={styles.tareCriada}>Tarefas criadas</span>
                <span>02</span>
                </div>
                
                <div className={styles.boxSecond}>
                    <span className={styles.tareConcluida}>Concluídas</span>
                <span>02</span>
                </div>
               
                </div>
              
              
                </div> 
               
                        
                <div className={styles.empt} >
          

                   <img src={Clipboard} alt="icon"/>
                    <div className={styles.text}>
                    <p>Você ainda não tem tarefas cadastradas </p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                 
                </div>
                
            </div>
            
           </div>
            
    


    )
}