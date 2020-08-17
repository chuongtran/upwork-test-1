import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import CounselorsFilter from './CounselorsFilter';

// CONSTANTS
import { COUNSELORS } from 'data/counselors.constants';
import CounselorCard from './CounselorCard';

const StyledWrapper = styled.div`


`;

const CounselorsList = ({ counselors = COUNSELORS }) => (
  <StyledWrapper>
    <CounselorsFilter counselors={counselors} />
    <div className="pt-6 pb-6">
      {counselors.map((counselor) => <CounselorCard counselor={counselor} />)}
    </div>
  </StyledWrapper>
);

export default CounselorsList;
