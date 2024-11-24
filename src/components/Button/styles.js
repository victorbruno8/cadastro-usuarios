import styled from "styled-components";

export const Button = styled.button`
    border-radius: 10px;
    /* width: 80px; */
    outline: none;
    border: 1px solid #d2dae2;
    background-color: ${props => props.theme === 'primary' ? '#fe7e5d' : '#fff'} ;
    padding: 12px 17px;
    color: ${props => props.theme === 'primary' ? '#fff' : '#000'} ;
    font-weight: 600;
    cursor: pointer;
`