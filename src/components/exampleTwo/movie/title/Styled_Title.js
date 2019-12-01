import styled from 'styled-components';
import { Black, White, Border } from '../../../../layout/layout.scss';

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
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
    position: absolute;
    bottom: 45px;
    width: 100%;
    padding: 10px;
    text-align: center;
    background-color: ${Black};
    border-radius: ${Border};
    color: ${White};
    z-index: 10;
  }
  .helper{
    display: none;
    position: absolute;
    bottom: 40px;
    left: calc(50% - 5px);
    content: '';
    width: 10px;
    height: 10px;
    background: ${Black};
    transform: rotate(45deg);
    z-index: 20;
  }
`

export default StyledTitle;