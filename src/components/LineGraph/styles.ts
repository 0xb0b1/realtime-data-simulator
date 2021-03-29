import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  height: 50vh;

  background: white;

  padding: 1.8rem 1.25rem 0.6rem 1.25rem;
  border-radius: 10px;

  margin: 0 auto;

  @media only screen and(max-width: 600px) {
    width: 80vw;
  }
`;
