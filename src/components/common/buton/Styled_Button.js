import styled from 'styled-components';
import { Black, White } from '../../../layout/layout.scss';

const StyledButon = styled.div`
  .custom-button {
    min-width: 120px;
    padding: 12px;
    border: 1px solid ${Black};
    background: ${Black};
    color: ${White};
    cursor: pointer;
    &:hover {
      color: ${Black};
      background: ${White};
    }
  }
`

export default StyledButon;