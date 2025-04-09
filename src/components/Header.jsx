
import styles from './Header.module.css'
import logo from '../esesst/logo.svg';


export function Header(){
    return (
  
        <header className={styles.header }>
            <img src={logo}alt="logo tipo do todo list"/>
<strong >to<span>do</span> </strong>
<div>

</div>
</header>
    )
}