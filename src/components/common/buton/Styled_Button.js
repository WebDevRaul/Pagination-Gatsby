import styled from 'styled-components';
import { Black, White } from '../../../layout/layout.scss';

const StyledButon = styled.div`
  .custom-button {
    min-width: 150px;
    padding: 12px;
    border: 1px solid ${Black};
    background: ${Black};
    color: ${White};
    margin: 20px;
    cursor: pointer;
    &:hover {
      color: ${Black};
      background: ${White};
    }
  }
`

export default StyledButon;