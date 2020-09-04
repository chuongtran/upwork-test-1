import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { Button } from 'components/Common';
import { Google, Facebook, Mail } from 'components/Icons';
import { useHistory } from 'react-router-dom';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default () => {
  const history = useHistory();
  return (
    <StyledWrapper>
      <div className="buttons text-center">
        <Button className="animation fade-in-up" whiteBackground>
          <Google />
          <span>Continue with Goggle</span>
        </Button>
        <Button className="animation fade-in-up" whiteBackground>
          <Facebook />
          <span>
            Continue with Facebook
          </span>
        </Button>
        <Button className="animation fade-in-up" whiteBackground onClick={() => history.push('/register')}>
          <Mail />
          <span onClick={() => history.push('/register')}>
            Sign up with Email
          </span>
        </Button>
        <div className="animation fade-in-up text--white">
          Have an account?&nbsp;
          <u onClick={() => history.push('/login')}>Log in</u>
        </div>
      </div>
    </StyledWrapper>
  );
};
