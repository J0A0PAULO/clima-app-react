import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button/Button.jsx';
import { Container } from '../components/Container/Container.jsx';
import { ContainerContent } from '../components/ContainerContent/ContainerContent.jsx';
import { TempoAtual } from '../components/TempoAtual/TempoAtual.jsx';
import { TempoDia } from '../components/TempoDia/TempoDia.jsx';
export function HomePage () {
  const navigate = useNavigate()
  return(
    <>
        <Container>
              <Button onClick={() => navigate('/locais')}>LOCAIS</Button>
        </Container>

          <Container>
          <ContainerContent>
          <TempoAtual></TempoAtual>
          </ContainerContent>
        </Container>

        <Container>
          <ContainerContent>
            <TempoDia></TempoDia>
          </ContainerContent>
        </Container>

    </>
  )
}