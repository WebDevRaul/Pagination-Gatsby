import styled from 'styled-components';

const StyledSearch = styled.section`
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    & div {
      & :nth-child(2) {
        display: flex;
        justify-content: center;
      }
    }
  }
`

export default StyledSearch;