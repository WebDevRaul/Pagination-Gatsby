import styled from 'styled-components';
import { Primary, Secondary, Black, White, Transition } from '../../../layout/layout.scss';

const shrinkLabel = () => `
  top: -14px;
  font-size: 12px;
  color: ${Primary};
`

const StyledInput = styled.div`
  .group {
    width: 100%;
    position: relative;
    margin: 45px 0;
    .form-input {
      display: block;
      width: 100%;
      margin: 25px 0;
      padding: 10px 10px 0px 0px;
      background-color: ${White};
      border: none;
      border-bottom: 1px solid ${Black};
      &:focus ~ .form-input-label {
        ${shrinkLabel}
      }
    }
    .form-input-label {
      color: ${Black};
      position: absolute;
      top: 10px;
      transition: ${Transition};
      &.shrink {
        ${shrinkLabel}
      }
    }
  }
`

export default StyledInput;