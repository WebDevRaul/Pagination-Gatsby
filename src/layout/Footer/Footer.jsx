import React from 'react';

import StyledFooter from './Styled_Footer';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='footer bg-dark text-white text-center pt-2 pb-2'>
        <div className='row no-gutters'>
          <div className='col-sm-6'>
            <div className='footer-text'>
              <span>Copyright &copy; {new Date().getFullYear()}</span>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='footer-text'>
              <span>Made with Gatsby by Savin Raul-Calin</span>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer;