import styled from 'styled-components';
import { Primary, Secondary, Black, Border, Grey } from '../../../layout/layout.scss';

const StyledPost = styled.div`
  .post {
    display: flex;
    align-items: center;
    min-height: 90px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid ${Black};
    border-radius: ${Border};
    h5 {
      color: ${Primary};
      min-width: 50px;
      margin: 0px;
      padding: 10px 5px 10px;
    }
    p {
      display: flex;
      align-items: center;
      width: 100%;
      min-height: 68px;
      margin: 0px;
      padding: 10px;
      color: ${Secondary};
      background: ${Grey};
      border-radius: ${Border}; 
    }
  }
`

export default StyledPost;