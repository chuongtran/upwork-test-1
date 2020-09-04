import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// SELECTORS
import { selectAuthorization } from 'redux/selectors';

// ACTIONS
import { updateLoginDetails } from 'redux/Authorization/Authorization.actions';

// COMPONENTS
import { Button, Input } from 'components/Common';
import {
  Google, Facebook, ChevronLeft,
} from 'components/Icons';
import Divider from 'components/Common/Divider';
import { Navigation } from 'components/PageLayout';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { email, password } = useSelector(selectAuthorization('login'));

  const doUpdate = useCallback((obj) => {
    dispatch(updateLoginDetails(obj));
  }, []);

  return (
    <StyledWrapper>
      <Navigation
        className="text--white"
        noBackground
        leftElem={<ChevronLeft className="text--white" onClick={() => history.push('/about')} />}
        rightElem={<span onClick={() => history.push('/what-brings-you-to')}>Skip</span>}
      />
      <div className="buttons text-center">
        <div className="text--white text--courgette text--size-22 mb-4">Log into your account</div>
        <Input
          type="email"
          className="animation fade-in-up"
          label="Email"
          value={email}
          onChange={(e) => doUpdate({ email: e.target.value })}
        />
        <Input
          className="animation fade-in-up"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => doUpdate({ password: e.target.value })}
        />
        <div className="animation fade-in-up text--white mb-3" style={{ marginTop: '5px' }}>
          Forgot password?&nbsp;
          <u onClick={() => history.push('/forgot-password')}>Click here</u>
        </div>
        <Button className="animation fade-in-up" whiteBackground>Log in</Button>
        <Divider className="animation fade-in-up" label="OR" />
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
        <div className="animation fade-in-up text--white">
          Need an account?&nbsp;
          <u onClick={() => history.push('/register')}>Sign up</u>
        </div>
      </div>
    </StyledWrapper>
  );
};
