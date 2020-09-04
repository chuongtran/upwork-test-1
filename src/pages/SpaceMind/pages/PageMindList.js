import React from 'react';
import { useHistory } from 'react-router-dom';

import { Navigation, Container } from 'components/PageLayout';
import { ChevronLeft, Calendar } from 'components/Icons';
import MindCardList from 'components/Minds/MindCardList';
import { useSelector } from 'react-redux';
import { selectMindMap } from 'redux/Mind/Mind.selectors';

const ITEMS = [
  {
    icon: '',
    title: 'Happy',
  },
];

const PageMindList = () => {
  const minds = useSelector(selectMindMap());
  const history = useHistory();
  return (
    <div id="pageMindList">
      <Navigation
        className="text--white"
        leftElem={<ChevronLeft onClick={() => history.push('/mind/monthly')} />}
        rightElem={<Calendar onClick={() => history.push('/mind/monthly')} />}
        label="Mind's reactions"
        noBackground
      />
      <Container>
        <MindCardList minds={Object.values(minds)} />
      </Container>
    </div>
  );
};

export default PageMindList;
