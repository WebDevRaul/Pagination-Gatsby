import styled from 'styled-components';
import { Primary, Secondary, Border } from '../../../layout/layout.scss';

const StyledButon = styled.div`
  .custom-button {
    min-width: 200px;
    min-height: 165px;
    padding: 8px 12px;
    border: 1px solid #000;
    border-radius: ${Border};
    background: ${Primary};
    color: ${Secondary};
    margin: 20px;
    cursor: pointer;

    &:hover {
      color: ${Primary};
      background: ${Secondary};
    }
  }
`

export default StyledButon;