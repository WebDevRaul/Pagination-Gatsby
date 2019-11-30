import styled from 'styled-components';
import { Secondary, Black, Transition } from '../../../../layout/layout.scss';

const StyledToggle = styled.div`
  .switch {
    position: relative;
    display: flex;
    width: 90px;
    height: 34px;
    & input {
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .slider {
        background-color: ${Black};
      }
      &:checked + .slider:before {
      -webkit-transform: translateX(55px);
      -ms-transform: translateX(55px);
      transform: translateX(55px);
    }
    }
    & .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 34px;
      background-color: ${Secondary};
      transition: ${Transition};
      -webkit-transition: ${Transition};
      &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        border-radius: 50%;
        background: linear-gradient(to right, #fff, rgb(202, 202, 202));
        box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
        -webkit-transition: ${Transition};
        transition: ${Transition};
      }
    }
  }
`

export default StyledToggle;