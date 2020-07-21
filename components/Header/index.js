import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';

import styles from './Header.module.scss';

const signupLinks = {
  brand: '/store',
};

const Header = ({ router }) => {
  const { pathname } = router;
  const [isOpen, setIsOpen] = useState(false);

  const isDashboardRoute = pathname.includes('/dashboard');

  const handleSignUp = (e) => {
    e.preventDefault();
    router.push(signupLinks.brand);
    return;
  };

  const toggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const brandSection = (
    <BrandSection>
      <input type='text' placeholder='Search' className={styles.searchField} />
      <BrandName onClick={toggle}>
        Brand Name <span />
        {isOpen && (
          <Menu>
            <MenuItem>
              <img src='/images/settings.png' alt='settings' /> Account Settings
            </MenuItem>
            <MenuItem>
              <img src='/images/credit-card.png' alt='credit-card' /> Billing
            </MenuItem>
            <MenuItem>
              <img src='/images/log-out.png' alt='log-out' /> Log Out
            </MenuItem>
            <MenuItem>
              <img src='/images/help-circle.png' alt='help-circle' /> Help
            </MenuItem>
          </Menu>
        )}
      </BrandName>
      <Img>
        <img src='/images/userAvatar.png' alt='user' />
      </Img>
    </BrandSection>
  );

  return (
    <header className={styles.topHeader}>
      <img src='/images/matchjet-logo.png' alt='logo' />
      <SectionRight>
        {isDashboardRoute ? (
          brandSection
        ) : (
          <>
            {' '}
            <Link href='/store'>
              <a className={styles.signInBtn}>Sign In</a>
            </Link>
            <a onClick={handleSignUp} className={styles.signUpBtn}>
              Sign Up
            </a>
          </>
        )}
      </SectionRight>
    </header>
  );
};

const Menu = styled.div`
  position: absolute;
  right: -35px;
  font-weight: normal;
  background: #ffffff;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.09);
  border-radius: 24px;
  padding: 40px 20px;
  min-width: 200px;
  margin-top: 10px;
`;

const MenuItem = styled.div`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #1e2e4f;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 25px;
  }

  img {
    margin-right: 10px;
  }
`;

const Img = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const BrandName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #1e2e4f;
  margin-right: 20px;
  margin-left: 80px;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 3px 6px 3px;
    border-color: transparent transparent #1e2e4f transparent;
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SectionRight = styled.div`
  display: flex;
  align-items: center;
`;

const BrandSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 80px;
`;

export default withRouter(Header);
