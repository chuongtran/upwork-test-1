import React from 'react';
import styled from 'styled-components';

// ICONS
import { Pin, Star } from 'components/Icons';
import { useHistory } from 'react-router-dom';

const StyledCard = styled.div`
  position: relative;
  border-radius: 16px;
  background: #fff;
  padding: 12px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const StyledAvatar = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 16px 0 16px;
`;

const CounselorCard = ({ counselor }) => {
  const history = useHistory();
  return (
    <StyledCard className="counselor flex flex--column" onClick={() => history.push(`/counselors/${counselor.id}`)}>
      <h4 className="mt-0 mb-0">{counselor.name}</h4>
      <i className="mb-2">{counselor.title}</i>
      <div className="flex align-items-center">
        {
          counselor.address && (
            <div className="flex align-items-center mr-3">
              <Pin className="text--secondary" />
              &nbsp;&nbsp;&nbsp;
              {counselor.address}
              &nbsp;
              stars
            </div>
          )
        }
        <div className="flex align-items-center">
          <Star className="text--secondary" />
          &nbsp;&nbsp;&nbsp;
          {counselor.rate}
          &nbsp;
          stars
        </div>
      </div>
      <StyledAvatar src={counselor.thumbnail || '/assets/images/placeholder-avatar.svg'} />
    </StyledCard>
  );
};

export default CounselorCard;
