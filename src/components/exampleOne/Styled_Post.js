import styled from 'styled-components';
import { Primary, Secondary, Black, Border, Grey } from '../../layout/layout.scss';

const StyledPost = styled.div`
  .post {
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
      align-items: center;
      width: 100%;
      min-height: 68px;
      color: ${Secondary};
      background: ${Grey};
      border-radius: ${Border}; 
    }
  }
`

export default StyledPost;