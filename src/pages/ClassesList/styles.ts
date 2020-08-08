import styled from "styled-components";

import { Button as ButtonLink } from "../../components/ButtonLink";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Proffys = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.4rem 0;

  & span {
    color: var(--color-text-in-primary);
    font: 500 1.2rem Poppins;
    max-width: 18rem;
    flex-basis: 10rem;
  }

  & img {
    margin-right: 1.6rem;
    height: 2.4rem;
  }

  @media (min-width: 700px) {
    & img {
      height: 3.2rem;
    }
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3.2rem;
  width: 100%;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1.5fr 1.1fr 0.7fr 0.7fr;
    column-gap: 1.2rem;

    position: absolute;
    bottom: -2.4rem;
  }
`;

export const Button = styled(ButtonLink)`
  margin-top: 2.4rem;

  @media (min-width: 700px) {
    margin-top: 0;
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
