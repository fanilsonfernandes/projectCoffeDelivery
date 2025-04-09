
import { Circle, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment({content,ondeleteComments}){

    function handleDeleteComment(){
        

        ondeleteComments(content)
    }
    
    return(
        <div className={styles.comment}>
            <div>
                
            <div className={styles.comentConete}>
                <header> 
                    <div
                    
                    className={styles.first}> <button  className={styles.circle} title="circle cmentario" >
                    <Circle  />
                    </button></div>
                   
                   
                    <p>{content}</p>
                         <div className={styles.second}>
                         <button className={styles.trash}
                            onClick={handleDeleteComment}
                         title="deletarComentario">
                            <Trash size={20}/>

                         </button>
                         </div>
                         
                        
                </header>
               
            </div>
            
            </div>

           

        </div>
    )
}