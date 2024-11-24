import styled from "styled-components";


export const Container = styled.div`

   background-color: #181f36;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   padding: 20px;
   height: 100vh;
    
`



export const InputLabel = styled.label`

    color: #fff;
    font-size: 12px;
    font-weight: 600;

        span {
            color: #ef4f45;

        }


`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;    
    gap: 20px;
    max-width: 500px;


`

export const ContainerInputs = styled.div`

        display: flex;
        gap: 12px;

`

export const Input = styled.input`

    border-radius: 10px;
    width: 100%;
    outline: none;
    border: 1px solid #d2dae2;
    background-color: #fff;
    padding: 12px 17px;


`


export const Title = styled.h2`
    font-size: 38px;
    text-align: center;
    color: #fff;
    font-weight: 600;
`




