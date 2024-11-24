


import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import { Title, Form, Input, Container, ContainerInputs, InputLabel } from './styles'

import TopBackground from '../../components/TopBackground'
import Button from '../../components/Button'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUSer() {
    try {
      await api.post('/usuarios', {
        email: inputEmail.current.value,
        name: inputName.current.value,
        age: parseInt(inputAge.current.value)
      });
    } catch (error) {
      console.error(error);
    }

    navigate('/listagem-usuarios')
  }


  return (

    <Container>

      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>


          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do Usuário' ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input type='number' placeholder='Idade' ref={inputAge} />
          </div>


        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            Email <span>*</span>
          </InputLabel>
          <Input type='email' placeholder='Email' ref={inputEmail} />
        </div>


        <Button type='button' onClick={registerNewUSer} theme= 'primary'>Cadastrar Usuário</Button>
        
      </Form>

      <Button type='button' onClick={() => navigate('/listagem-usuarios')}>Ver Listagem</Button>
    </Container>

  )
}

export default Home
