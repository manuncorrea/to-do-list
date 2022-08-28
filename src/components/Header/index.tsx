import styles from './Header.module.css';
import LogoToDoList from '../../assets/logo.svg';

export function Header() {
  return(
    <div className={styles.header}>
     <img src={LogoToDoList} alt="Logo TO-DO-LIST" />
    </div>
  )
}