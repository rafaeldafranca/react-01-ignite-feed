import { PencilLine } from 'phosphor-react'
import styles from './sidebar.module.css'
import { Avatar } from './avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1715671525805-ed50afea6d13?q=30&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>

                <Avatar src="https://github.com/rafaeldafranca.png" />

                <strong> Rafael</strong>
                <span>Analista de sistemas</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )

}