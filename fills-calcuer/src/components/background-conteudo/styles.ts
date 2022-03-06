import styled from "styled-components";

export const Container = styled.div`
width: 40vw;
 min-width: 25rem;
 height: 50rem;
 background-color: #f7f7f7;
 border-radius: 10px;
 -webkit-box-shadow: 0px 0px 11px 3px rgba(0,0,0,0.62); 
box-shadow: 0px 0px 11px 3px rgba(0,0,0,0.62);
display: flex;
padding: 10px;
flex-direction: column;
align-items: center;

@media (max-width:1100px){
    height: 80vh ;
}


h1,h2,p{
    color: black;
}

`