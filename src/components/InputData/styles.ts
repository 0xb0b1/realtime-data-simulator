import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    width: 100%;
    max-width: 568px;

    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    &::placeholder {
      color: #969cb3;
    }

    & + input {
      margin-top: 1rem;
    }

    @media (max-width: 720px) {
      max-width: 60vw;
    }
  }

  button[type="submit"] {
    width: 20rem;
    padding: 0 1.5rem;
    height: 2.5rem;

    background: #33cc95;
    color: #fff;

    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 568px) {
      max-width: 50vw;
    }
  }
`;
