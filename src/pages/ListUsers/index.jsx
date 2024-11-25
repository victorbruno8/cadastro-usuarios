import { useEffect, useState } from "react"
import api from "../../services/api"
import TopBackground from "../../components/TopBackground"
import DefaultButton from "../../components/Button"
import { useNavigate } from "react-router-dom"

import { Container, Title, ContainerUsers, CardUsers, TrashIcon, AvatarUSer} from "./styles"
import Trash from '../../assets/trash.svg'
import Avatar from '../../assets/avatar.png'

function ListUsers() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()



    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)


        }

        getUsers()

    }, [])


    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)
        const filteredUsers = users.filter(user => user.id !== id)
        setUsers(filteredUsers)
        
    }

    return (
        <Container>
            <TopBackground />

            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUSer src={Avatar} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.age}</p>
                        </div>
                        <TrashIcon src={Trash} onClick={() => deleteUsers(user.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <DefaultButton type="button" onClick={() => navigate('/')}>Voltar</DefaultButton>
        </Container>
    )
}

export default ListUsers