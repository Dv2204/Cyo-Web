import styled from "styled-components";

export default styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73vh;
  width: 800px;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;

  @media screen and (max-width: 700px) {
    height: 30vh;
  }
`;
