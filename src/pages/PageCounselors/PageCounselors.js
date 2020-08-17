import React from 'react';

import { Container, Navigation } from 'components/PageLayout';
import CounselorsList from 'components/Counselors/CounselorsList';
import { ChevronLeft } from 'components/Icons';

const PageCounselors = () => (
  <>
    <Navigation label={<span className="text--primary">Counselors</span>} noBackground leftElem={<ChevronLeft className="text--primary" />} />
    <Container className="pb-6">
      <p className="text-center text--primary">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever</p>
    </Container>
    <Container background="linear-gradient(180deg, #36D1DC -9.85%, #5B86E5 69.33%);" className="pt-6">
      <CounselorsList />
    </Container>
  </>
);

export default PageCounselors;
