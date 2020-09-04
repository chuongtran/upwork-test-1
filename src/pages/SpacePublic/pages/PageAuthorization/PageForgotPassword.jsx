import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// SELECTORS
import { selectAuthorization } from 'redux/selectors';

// ACTIONS
import { updateForgotPasswordDetails } from 'redux/Authorization/Authorization.actions';

// COMPONENTS
import { Button, Input } from 'components/Common';
import {
  ChevronLeft,
} from 'components/Icons';
import { Navigation, Container } from 'components/PageLayout';

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
  const { email } = useSelector(selectAuthorization('forgotPassword'));

  const doUpdate = useCallback((obj) => {
    dispatch(updateForgotPasswordDetails(obj));
  }, []);

  return (
    <StyledWrapper className="flex flex--column align-item-center justify-content-center">
      <Navigation
        noBackground
        leftElem={<ChevronLeft className="text--white" onClick={() => history.push('/login')} />}
      />
      <div>
        <Container className="text-center">
          <div className="text--white text--courgette text--size-22 mb-4">Let's recover your password</div>
          <Input
            type="email"
            className="animation fade-in-up"
            label="Email"
            value={email}
            onChange={(e) => doUpdate({ email: e.target.value })}
          />
          <Button className="animation fade-in-up" whiteBackground>Send reset link</Button>
        </Container>
      </div>
    </StyledWrapper>
  );
};
