import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8.5rem;

  div {
    background-color: var(--white);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--title);
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }

  & .highlight-background {
    background-color: var(--green);
    color: var(--white);
  }

  & .highlight-background-withdraw {
    background-color: var(--red);
    color: var(--white);
  }
`;