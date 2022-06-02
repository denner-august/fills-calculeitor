import styled from "styled-components";

export const Container = styled.div`
  width: 40vw;
  height: auto;
  min-width: 25rem;
  padding: 10px;
  /* margin: 15px 0px; */
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f7f7f7;
  -webkit-box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.62);
  box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.62);

  @media (max-width: 1100px) {
    height: auto;
  }
  h1,
  h2,
  p {
    color: black;
  }
`;
