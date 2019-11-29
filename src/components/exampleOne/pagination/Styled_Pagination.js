import styled from 'styled-components';
import { Primary, Secondary } from '../../../layout/layout.scss';

const StyledPagination = styled.section`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    button {
      display: flex;
      justify-content: center;
      align-content: center;
      background: ${Primary};
      color: ${Secondary};
      &:hover {
        background: ${Secondary};
        color: ${Primary};
      }
    }
    .buttons {
      & h5 {
        display: flex;
        align-items: center;
        align-content: center;
        margin: 0px 20px;
        & span {
          display: flex;
          justify-content: center;
          color: ${Primary};
          width: 40px;
        }
        & i {
          display: flex;
          justify-content: center;
          width: 20px;
        }
      }
    }
  }
`

export default StyledPagination;