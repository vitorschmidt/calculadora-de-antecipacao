import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  background: var(--background-primary);
  border-radius: 4px;
  border: 2px solid var(--light-grey);
  color: var(--card);
  width: 40rem;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  &:focus-within {
    border: 2px solid var(--black);
  }
  input {
    width: 100%;
    height: 38px;
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    padding: 1rem;
    color: var(--black);
    margin: 10px 0;
    padding: 8px;
    &::placeholder {
      color: var(--light-grey);
      font-size: 0.8rem;
    }
  }
`;
