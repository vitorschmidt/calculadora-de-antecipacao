import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);
  width: 80%;
  margin: 100px auto;
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;

    width: 20%;
    height: 2rem;
    background-color: var(--card);
    box-shadow: 0px 0px 11px 0px rgba(89, 89, 89, 0.75);

    border-radius: 8px;

    margin: 10px;

    text-decoration: none;
  }
`;
