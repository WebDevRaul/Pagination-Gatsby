import styled from 'styled-components';
import { Black, White, Border } from '../../../../layout/layout.scss';

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  min-height: 112px;
  h5 {
    text-align: center;
    padding: 10px;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    margin: 0 20px;
    :hover ~ *{
      display: block;
    }
  }
  span {
    display: none;
    text-align: center;
    width: 100%;
    position: relative;
    padding: 10px;
    background-color: ${Black};
    border-radius: ${Border};
    color: ${White};
    z-index: 10;
  }
  .helper{
    display: none;
    content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      top: 56%;
      left: 50%;
      background: ${Black};
      transform: rotate(45deg);
      z-index: 20;
  }
`

export default StyledTitle;