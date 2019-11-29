import styled from 'styled-components';
import { Primary, Secondary, Black, Border, Grey } from '../../../layout/layout.scss';

const StyledLoading = styled.div`
.post-loading {
    display: flex;
    align-items: center;
    min-height: 90px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid ${Black};
    border-radius: ${Border};
    & h5, p {
      margin: 0px;
      padding: 10px;
    }
    h5 {
      color: ${Primary};
      min-width: 50px;
    }
    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      min-height: 68px;
      color: ${Secondary};
      background: ${Grey};
      border-radius: ${Border}; 
      & i {
        animation: loading 2s linear infinite forwards;
        min-height: 16px;
        margin: auto;
        background: linear-gradient(to right, #e0e0e0 8%, #F0F0F0 18%, #e0e0e0 33%);
        background-size: 800px 104px;
        position: relative;
        width: 95%;
      }
    }
  }
  @keyframes loading{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
  }
`

export default StyledLoading;