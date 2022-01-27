import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    
}

 html{
     @media(max-wdith:1080px){
         font-size: 93.75%;
     }

     @media(max-width:720px){
         font-size: 87.5%;
     }
 }


`