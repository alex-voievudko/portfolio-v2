import styled from 'styled-components'

// -------------------------------------------------------------

export const Container = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.overlay};

  &.active {
    display: flex;
  }
`
