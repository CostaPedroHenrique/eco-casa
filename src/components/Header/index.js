import styles from './styles.module.scss'
import logoImg from '../../assets/images/logo.png'

export default function Header(){
    return (
        <div className={styles.main}>
        <div className={styles.navBar}>
            <div>
                <img width="200vw" src={logoImg.src} />
            </div>
            <div className={styles.navItems}>
                <a href="/">Início</a>
                <a href="/signup">Criar conta</a>
                <a href="/login">Entrar</a>
                <a href="/dashboard">Dashboard</a>
            </div>
        </div>
        <div className={styles.header}>
            <h1>E-coleta</h1>
            <span>Um novo jeito de descartar corretamente seus resíduos</span>
        </div>
        </div>
    )
}