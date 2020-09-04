import React from 'react';

import { Navigation, Container } from 'components/PageLayout';
import { Calendar, ChevronLeft } from 'components/Icons';
import { Button } from 'components/Common';
import MindList from 'components/Minds/MindList';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMindList } from 'redux/Mind/Mind.selectors';

const PageMindOverview = () => {
  const minds = useSelector(selectMindList());
  const history = useHistory();
  return (
    <div id="pageMindOverview">
      <Navigation className="text--white" noBackground label="Mind's reactions" rightElem={<Calendar />} leftElem={<ChevronLeft />} />
      <Container>
        <div className="text--size-22 text--white text-center text--courgette">
          Good morning, Misha!
        </div>
        <div className="text--size-22 text--white text-center text--courgette mb-3">
          How's the mind feeling today?
        </div>
        <MindList minds={minds} onItemClick={(item) => history.push(`/mind/${item.id}`)} />
        <Button style={{ opacity: 0, visibility: 'hidden' }} block whiteBackground>Continue</Button>
        <div className="buttons buttons--with-menu">
          <Button whiteBackground onClick={() => history.push('/mind/weekly')}>Continue</Button>
        </div>
      </Container>
    </div>
  );
};

export default PageMindOverview;
