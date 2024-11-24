import { useEffect } from "react"
import api from "../../services/api"
import TopBackground from "../../components/TopBackground"
import DefaultButton from "../../components/Button"

function ListUsers(){

    useEffect(() => {
        
        async function getUsers() {
            const usersFromApi = await api.get('/usuarios')
            console.log(usersFromApi);
            
            
        }

        getUsers()
        
    }, [])

    return(
        <div>
            <TopBackground />
            <h1 style={{color: 'red'}}>listagem</h1>
            <DefaultButton>Voltar</DefaultButton>
        </div>
    )
}

export default ListUsers