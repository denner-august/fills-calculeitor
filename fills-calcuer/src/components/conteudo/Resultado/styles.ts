import styled from "styled-components";

export const Container = styled.div`
background-color: #2A2F42;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding: 3rem;
`

export const FinalResultado = styled.div`
background-color: white;
width: 55rem;
height: 60vh;
border-radius: 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

h2{
    font-size: 2.5rem;
    text-align: center;
    padding-top: 2rem;
}

button{
    color: white;
    width: 70%;
    height: 5rem;
    background-color:#B7245C;
    border-radius: 10px;
    border-width:0px;
    cursor: pointer;
    &:active{
        background-color: #12b342;
    }

    font-size: 1.5rem;
}
`
