import styled from 'styled-components';
import { Black } from '../../../layout/layout.scss';

const StyledMovie = styled.div`
  padding: 5px;
  margin: 5px;
  .card {
    background-color: transparent;
    border: none;
    width: 100%;
    .info {
      padding: 10px 20px;
      border: 1px solid ${Black};
      border-top: none;
      border-bottom: none;
      & div {
        :nth-child(3) {
          p {
            &:nth-child(2) {
              color: #fff;
              padding-bottom: 5px;
              text-transform: uppercase;
            }
          }
        }
      }
      p {
        margin-bottom: 0px;
        width: 50%;
      }
    }
    .toggle {
      border: 1px solid ${Black};
      border-top: none;
    }
  }
`

export default StyledMovie;