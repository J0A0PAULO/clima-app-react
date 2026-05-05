import { useEffect, useState } from 'react';
import { buscarApiSp } from '../../services/temp';
import styles from './TempoDia.module.css';

export function TempoDia () {

  const [tempo, setTempo] = useState(null);


  useEffect(()=> {
    buscarApiSp('Sao Paulo').then(tempoApi => setTempo(tempoApi));
  }, []);

  return (
    <>
      <div className={styles.container}>
          <div className={styles.card}>
            <h3>HOJE</h3>
          </div>
          <div className={styles.card}>
            <p>{tempo?.forecast.forecastday[0].hour[9].time.slice(-5)}</p>
            <img src={tempo?.forecast.forecastday[0].hour[9].condition.icon} alt="tempo" />
            <p>{tempo?.forecast.forecastday[0].hour[9].temp_c}</p>
          </div>
           <div className={styles.card}>
            <p>{tempo?.forecast.forecastday[0].hour[14].time.slice(-5)}</p>
            <img src={tempo?.forecast.forecastday[0].hour[14].condition.icon} alt="tempo" />
            <p>{tempo?.forecast.forecastday[0].hour[14].temp_c}</p>
          </div>
           <div className={styles.card}>
            <p>{tempo?.forecast.forecastday[0].hour[20].time.slice(-5)}</p>
            <img src={tempo?.forecast.forecastday[0].hour[20].condition.icon} alt="tempo" />
            <p>{tempo?.forecast.forecastday[0].hour[20].temp_c}</p>
          </div>
      
      </div>
    </>
  )
}