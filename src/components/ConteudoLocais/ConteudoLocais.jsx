
import { useEffect, useState } from 'react';
import { buscarApiSp } from '../../services/temp';
import { Container } from '../Container/Container';
import styles from './ConteudoLocais.module.css';

export function ConteudoLocais () {

  const [tempoSP, setTempoSP] = useState(null);
  const [tempoRJ, setTempoRJ] = useState(null);
  const [tempoMJ, setTempoMJ] = useState(null);

  useEffect(() => {
    buscarApiSp('Sao Paulo').then(tempoApi => setTempoSP(tempoApi));
  }, []);
  useEffect(() => {
    buscarApiSp('Rio de Janeiro').then(tempoApi => setTempoRJ(tempoApi));
  }, []);
  useEffect(() => {
    buscarApiSp('Minas Gerais').then(tempoApi => setTempoMJ(tempoApi));
  }, []);

  return (
    <>
    <Container>
       <div className={styles.content}>
        <div className={styles.card}>
          <h2>{tempoSP?.location.country}</h2>
          <h4>Locais</h4> 
        </div>

        <div className={styles.cardTempo}>
          <p>Local</p>
          <p>{tempoSP?.location.region}</p> 
          <div className={styles.cardTempoIMG}>
          <img src={tempoSP?.current.condition.icon} alt="tempo" />
          <p>{tempoSP?.current.temp_c}°</p>
          </div>
          <p>{tempoSP?.current.condition.text}</p>
        </div>

       <div className={styles.cardTempo}>
          <p>Local</p>
          <p>{tempoRJ?.location.region}</p> 
          <div className={styles.cardTempoIMG}>
          <img src={tempoRJ?.current.condition.icon} alt="tempo" />
          <p>{tempoRJ?.current.temp_c}°</p>
          </div>
          <p>{tempoRJ?.current.condition.text}</p>
        </div>
        
        <div className={styles.cardTempo}>
          <p>Local</p>
          <p>{tempoMJ?.location.region}</p> 
          <div className={styles.cardTempoIMG}>
          <img src={tempoMJ?.current.condition.icon} alt="tempo" />
          <p>{tempoMJ?.current.temp_c}°</p>
          </div>
          <p>{tempoMJ?.current.condition.text}</p>
        </div>
        
      </div>
    </Container>
     
    </>
  )
}
