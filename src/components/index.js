import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 12.5rem
  }

  /* Heading starts here */
  div.heading {
    text-align: center
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 45.9046px;
    line-height: 3.5rem;

    color: var(--main-color);
  }

  h1 > span,
  p > span {
    background: var(--gradient-blue);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  p {
    max-width: fit-content;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;

    color: var(--main-color);
  }
  /* Heading ends here */

  /* Input box starts here */
  div.input__box {
    margin: 2rem 0 5rem 0 ;

    display: flex;
    flex-direction: column;
    align-items: left;
  }

  label {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;

    color: var(--main-color)
  }

  input {
    padding: 12px;

    border-style: none;
    border-radius: 5px;
    background: var(--input-background);
  }

  input::placeholder {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.25rem;

    color: var(--input-placeholder);
  }
  /* Input box ends here */

  /* Button box starts/ends here */
  div.button__box {
    display: flex;
    align-items: center;
    justify-content: center
  }

  div.button__divider {
    margin: 0 0.5rem;

    background: var(--gradient-blue);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  @media screen and (max-width: 560px) {
    div.button__box {
      flex-direction: column
    }

    div.button__divider {
      margin: 0.5rem 0
    }
  }
`;

export const VideoContainer = styled.div`
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 560px) {
    flex-direction: column
  }
`;

export const Button = styled.button`
  padding: 14px 5.5rem;
  max-width: 14.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--gradient-blue);
  color: var(--button-color);
  border-style: none;
  border-radius: var(--button-border-radius);

  font-weight: bold;
  font-size: 1.5rem;
  line-height: 29px;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6
  }
`;
