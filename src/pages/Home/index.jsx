


import { useRef } from 'react'
import api from '../../services/api'

import { Title, TopBackground, Form, Input, Container, ContainerInputs, InputLabel } from './styles'
import UsersImage from '../../assets/users.png'
import Button from '../../components/Button'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

async function registerNewUSer() {
  
await api.post('/usuarios', {
    email: inputEmail.current.value,
    name: inputName.current.value,
    age: parseInt(inputAge.current.value) 
  })
  
  
}


  return (

    <Container>
      <TopBackground>
        <img src={UsersImage} alt="" />
      </TopBackground>

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
            <Input type='number' placeholder='Idade' ref={inputAge}/>
          </div>


        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            Email <span>*</span>
          </InputLabel>
          <Input type='email' placeholder='Email' ref={inputEmail} />
        </div>


        <Button type='button' onClick={registerNewUSer}>Cadastrar Usuário</Button>
      </Form>
    </Container>

  )
}

export default Home
