import styles from './Container.module.css'

export function Container ({children, className}) {
  return(
    <>
    <div className={styles.container}>
      {children}
    </div>
    </>
  )
}