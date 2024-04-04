import styles from './index.module.css'

function Title({title}) {
  return (
    <div className={styles.contentTitle}>
        <header>
            <h1 className={styles.title}>{title}</h1>
        </header>
    </div>
  )
}

export default Title