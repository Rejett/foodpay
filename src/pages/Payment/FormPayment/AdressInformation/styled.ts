import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 0.5rem;
  }
  label {
    margin-top: 1.75rem;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  #cep {
    width: 10rem;
  }

  #adress {
    width: 30rem;
  }

  input {
    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray800};
    padding: 12px 12px;
    border-radius: 4px;
    outline: none;
  }

  div {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;

      input {
        width: 20rem;
      }
    }
  }
`
