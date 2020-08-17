import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// COMPONENTS
import { Navigation, Container } from 'components/PageLayout';

// ICONS
import { ChevronLeft } from 'components/Icons';
import Avatar from 'components/Avatar/Avatar';

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colorPrimary};
  min-height: 400px;
`;

const CounselorHeader = ({ counselor }) => {
  const history = useHistory();
  return (
    <StyledWrapper className="counselor__header pb-6">
      <Navigation
        label={<span className="text--white">Counselors</span>}
        noBackground
        leftElem={<ChevronLeft className="text--white" onClick={() => history.push('/counselors')} />}
      />
      <Container>
        <div className="flex flex--column align-items-center justify-content-center text--white text--semibold text--size-14">
          <Avatar width={180} src={counselor.avatar} />
          <h4 className="mb-0">{counselor.name}</h4>
          <i>{counselor.title}</i>
          <div>
            {counselor.rate}
            &nbsp;stars
          </div>
          <p className="text-center mt-3">
            Simply dummy text of the printing and typesetting industry.
            &nbsp;
            Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,
            &nbsp;when an unknown printer...
          </p>
        </div>
      </Container>
    </StyledWrapper>
  );
};

export default CounselorHeader;
