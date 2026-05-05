import styles from './TempoAtual.module.css';

import { useEffect, useState } from 'react';
import { buscarApiSp } from '../../services/temp';

export function TempoAtual () {
  const [tempo, setTempo] = useState(null);
  
  useEffect(  ()=> {
    buscarApiSp('Sao Paulo').then(tempoAPi => setTempo(tempoAPi));
  }, [])

  return (
    <>
     <div className={styles.container}>
      <div className="content-cidad">
        <p className={styles.tamanho24}>{tempo?.location.region} <span>SP</span></p>
      </div>
      <img src={tempo?.current.condition.icon} alt="" />
      <p className={styles.tamanho24}>{tempo?.current.temp_c}°</p>
      <p className={styles.tamanho18}>{tempo?.current.condition.text}</p>
      <div className={styles.minMax}>
        <p>min: {tempo?.forecast.forecastday[0].day.mintemp_c}°</p>
        <p>"max: {tempo?.forecast.forecastday[0].day.maxtemp_c}°</p>
      </div>
     </div>
    </>
  )
}