import styled from 'styled-components';
import { Black } from '../../../../layout/layout.scss';

const StyledCard = styled.div`
  .flip-card {
    width: 100%;
    height: 350px;
    perspective: 1000px;
    .flip {
      transform: rotateY(180deg);
    }
    .flip-card-inner {
      position: relative;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        backface-visibility: hidden;
      }
      .flip-card-front, .flip-card-back {
        .wrapper {
          height: 350px;
          width: 100%;
          padding: 10px;
          border: 1px solid ${Black};
        }
      }
      .flip-card-back {
        transform: rotateY(180deg);
        .scroll {
          overflow: auto;
          &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #F5F5F5;
          }
          &::-webkit-scrollbar {
            width: 15px;
            background-color: #F5F5F5;
          }
          &::-webkit-scrollbar-thumb {
            box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #D62929;
          }
        }
      }
    }
  }
`

export default StyledCard;