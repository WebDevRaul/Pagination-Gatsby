import styled from 'styled-components';

const StyledSearch = styled.section`
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    & div {
      width: 100%;
      & :nth-child(2) {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`

export default StyledSearch;