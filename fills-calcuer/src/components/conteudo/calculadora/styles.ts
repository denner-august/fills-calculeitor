import styled from "styled-components";

export const Container = styled.main`
    margin-top: 1rem;
    background-color: #f6f2ff;
    width: 95%;
    height: 100%;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 11px 3px rgba(0,0,0,0.62); 
    box-shadow: 0px 0px 11px 3px rgba(0,0,0,0.62);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        margin-top: 1rem ;
    }

    input{
    font-size: 1.5rem;
    width: 70%;
    height: 3rem;
    margin: 0.5rem;
    border-radius: 10px;
    border-width: 0.1px;
    border-color: black;
    text-align: center;
   
}

@media (max-width:1100px) {
    input{
        width: 95% ;
        height: 5rem;
    }
}
`