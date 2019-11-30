import styled from 'styled-components';
import { Black, White, Border } from '../../../../layout/layout.scss';

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  :hover > span{
    display: flex;
  }
  h5 {
    display: inline-block;
    text-align: center;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .popover {
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    top: -50px;
    background-color: ${Black};
    border-radius: ${Border};
    padding: 10px;
    color: ${White};
    z-index: 10;
    &:before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      top: 36px;
      background: ${Black};
      transform: rotate(45deg);
    }
  }
  .show-full-title {
    height: 64px !important;
    top: -70px !important;
    &:before {
      top: 57px !important;
    }
  }
`

export default StyledTitle;