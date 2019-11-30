import styled from 'styled-components';

const StyledMovie = styled.div`
  padding: 10px;
  .card {
    background-color: transparent;
    border: none;
    width: 100%;
    .info {
      padding: 10px 20px;
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
  }
`

export default StyledMovie;