import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Tags from 'components/Tags/Tags';

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 16px;
  background: linear-gradient(133.71deg, #75D6A1 -12.8%, rgba(40, 191, 255, 0) 129.85%), linear-gradient(132.8deg, #FFCA00 -30.25%, rgba(255, 202, 0, 0) 129.01%);
  margin-bottom: 16px;

  &:nth-of-type(4n + 2) {
    background: linear-gradient(132.8deg, #FF7B7C -30.25%, rgba(255, 123, 124, 0) 129.01%);
  }
  &:nth-of-type(4n + 3) {
    background: linear-gradient(132.8deg, #7EE3DB -30.25%, rgba(126, 227, 219, 0) 129.01%);
  }
  &:nth-of-type(4n + 4) {
    background: linear-gradient(132.8deg, #B653FF -30.25%, rgba(182, 83, 255, 0) 129.01%);
  }
`;

const MindCard = ({ mind }) => (
  <StyledCard>
    <div className="flex align-items-center justify-content-space-between mb-4">
      <span className="flex align-items-center">
        {mind.icon}
        <span className="ml-1 text--white">{mind.title}</span>
      </span>
      <span className="text--white">
        {moment().format('YYYY MM DD, hh:mm a')}
      </span>
    </div>
    {mind.feelings && mind.feelings.length && (
      <div className="mb-4">
        <Tags
          tags={mind.feelings || []}
          value={[]}
          onChange={(val) => { console.log(val); }}
        />
      </div>
    )}
    <i>
      {mind.note}
    </i>
  </StyledCard>
);

export default MindCard;
