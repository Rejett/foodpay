import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.black};
  padding: 1.75rem 4rem;
  border-radius: 4px;

  gap: 4rem;
`
