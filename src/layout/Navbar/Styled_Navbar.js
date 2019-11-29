import styled from 'styled-components';
import { Primary, Secondary, Spacing, Transition } from '../layout.scss';

const StyledNavbar = styled.nav`
  .navbar {
    .nav-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          display: none;
        }
      }
    .nav-links {
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        display: block;
        position: relative;
        padding: 1rem 1.25rem;
        text-transform: capitalize;
        font-weight: bold;
        text-align: center;
        letter-spacing: ${Spacing};
        transition: ${Transition};
        a {
          color: ${Primary} !important;
          &:hover {
            color: ${Secondary} !important;
          }
        }
      }
    }
  }
}
@media (max-width: 992px){
  .navbar {
    .nav-wrapper {
      flex-direction: column;
      .nav-header {
        width: 100%;
        button {
          display: block;
        }
      }
      .nav-links {
        height: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .show-nav {
        height: 130px;
      }
    }
  }
}
`

export default StyledNavbar;