import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                LOGO
            </div>
            <div>
                <div>name</div>
            </div>
        </header>
    )
}