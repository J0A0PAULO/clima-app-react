import styles from '../ContainerLocais/ContainerLocais.module.css'

export function ContainerLocais({children}) {
  return(
    <>
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}
