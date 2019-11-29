import styled from 'styled-components';

const StyledLayout = styled.div`
  .home {
    min-height: calc(100vh - 112px);
  }

  @media (max-width: 992px) {
    .home {
      min-height: calc(100vh - 96px);
    }
  }
`

export default StyledLayout;