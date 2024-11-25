import styled from "styled-components";

export const Container = styled.div`        

    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    min-height: 100vh;

`

export const Title = styled.h2`
    font-size: 38px;
    text-align: center;
    color: #fff;
    font-weight: 600;
        @media (max-width: 1200px) {
            margin-top: 25px;
        }
      
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
            margin: 25px 0;
        }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 10px;
    max-width: 400px;
        p {
            color : #fff;
            font-size: 14px;
            margin: 5px 0;
        }
        h3 {
            color : #fff;
            font-size: 24px;
            margin-bottom: 5px;
            text-transform: capitalize;
        }
        @media (max-width: 400px) {
           max-width: 200px;
           flex-direction: column;
        }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    /* padding-left: 30px; */
`

export const AvatarUSer = styled.img`
    max-width: 100px;
`