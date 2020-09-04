import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledIntro = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 28px;
`;

export default () => {
  const history = useHistory();
  return (
    <StyledIntro onClick={() => history.push('/about')} className="text--courgette text--white flex align-items-center justify-content-center">
      <div className="fade-in-up">Focus in</div>
    </StyledIntro>
  );
};
