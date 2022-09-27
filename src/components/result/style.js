import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;

  width: 40%;

  h2 {
    color: var(--light-grey);
    margin: 5px;
  }

  p {
    color: var(--light-grey);
    font-weight: 700;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  div {
    background-color: var(--light-grey);
    width: 60%;
    height: 2px;

    margin: 10px 0;
    margin-left: 10px;
  }
`;
