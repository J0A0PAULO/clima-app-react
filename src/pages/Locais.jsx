import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";
import { ContainerLocais } from '../components/ContainerLocais/ContainerLocais';
import { ConteudoLocais } from "../components/ConteudoLocais/ConteudoLocais";
import styles from './Locais.module.css';

export function Locais() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Button onClick={() => navigate('../')} >Voltar</Button>
      </Container>
      <Container>
        <div className={styles.container}>
          <ContainerLocais>
            <ConteudoLocais></ConteudoLocais>
          </ContainerLocais>
        </div>
      </Container>
    </>
  )
}