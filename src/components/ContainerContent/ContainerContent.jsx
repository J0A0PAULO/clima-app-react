import styles from './ContainerContent.module.css'


import styes from '../ContainerContent/ContainerContent.module.css'
export function ContainerContent ({children}) {
    return (
      <>
        <div className={styes.content}>
          {children}
        </div>
      </>
    )
}