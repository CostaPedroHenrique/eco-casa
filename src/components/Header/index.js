import styles from './styles.module.scss'

export default function Header(){
    return (
        <>
        <div className={styles.navBar}>
            <div>
                Eco Casa
            </div>
            <div className={styles.navItems}>
                <a href="https://google.com">Teste</a>
                <a href="https://google.com">Teste</a>
                <a href="https://google.com">Teste</a>
                <a href="https://google.com">Teste</a>
            </div>
        </div>
        <div className={styles.header}>
            <h1>Eco Casa</h1>
            <span>Um novo jeito de descartar corretamente seus resíduos</span>
        </div>
        </>
    )
}