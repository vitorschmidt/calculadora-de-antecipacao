import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60%;
  background-color: var(--light-grey);

  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;

  border-right: solid 5px var(--green);

  h2 {
    color: var(--black);
    margin: 10px 0px;
  }

  form {
    margin-bottom: 20px;
  }
  input {
    margin: 10px 0;
    padding: 8px;
  }
`;
