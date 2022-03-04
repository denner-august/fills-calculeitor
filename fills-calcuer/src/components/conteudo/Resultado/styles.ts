import styled from "styled-components";

export const Container = styled.div`
background-color: #2A2F42;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`

export const FinalResultado = styled.div`
background-color: white;
width: 55rem;
height: 80%;
border-radius: 1rem;
display: flex;
justify-content: space-evenly;
flex-direction: column;
margin: 3rem;
padding-bottom: 1rem;

h2{
    font-size: 2.5rem;
    text-align: center;
    padding-top: 2rem;
}

button{
    margin: 0 auto;
    color: white;
    width: 80%;
    height: 5rem;
    background-color:#B7245C;
    border-radius: 10px;
    border-width:0px;
    cursor: pointer;
    &:active{
        background-color: #B7249C;
    }

    font-size: 1.5rem;
}
`

