/* eslint-disable eqeqeq */
import React from 'react';
import { useParams } from 'react-router-dom';

// COMPONENTS
import CounselorHeader from './components/CounselorHeader';
import CounselorBody from './components/CounselorBody';

// CONSTANTS
import { COUNSELORS } from 'data/counselors.constants';

const PageCounselorDetails = () => {
  const { counselorId } = useParams();
  const counselor = COUNSELORS.find((item) => item.id == counselorId);
  if (!counselor) return null;
  return (
    <div id="pageCounselorDetails">
      <CounselorHeader counselor={counselor} />
      <CounselorBody counselor={counselor} />
    </div>
  );
};

export default PageCounselorDetails;
