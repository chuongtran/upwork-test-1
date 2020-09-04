import React from 'react';

import { Navigation, Container } from 'components/PageLayout';
import { ChevronLeft, Calendar as IconCalendar, Alarm } from 'components/Icons';
import Calendar from 'components/Calendar/Calendar';
import { Button } from 'components/Common';
import TextArea from 'components/Common/TextArea';
import RecommendedCards from 'components/RecommendedCards/RecommendedCards';
import { useHistory } from 'react-router-dom';

const PageMindWeekly = () => {
  const history = useHistory();
  return (
    <div id="pageMindWeekly">
      <Navigation
        className="text--white"
        leftElem={<ChevronLeft onClick={() => history.push('/mind')} />}
        rightElem={<IconCalendar onClick={() => history.push('/mind/monthly')} />}
        label="Mind's reactions"
        noBackground
      />
      <Container>
        <div className="pt-3 pb-3">
          <Calendar.Weekly />
        </div>
        <Button noBackground onClick={() => history.push('/mind/monthly')}>Full month</Button>
        <div className="text--white text--size-22 text--courgette text-center mb-2">
          Recommended for you
        </div>
        <RecommendedCards items={[null, null, null, null]} />
        <div className="mt-8 mb-8">
          <TextArea
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              height: '210px',
            }}
            disabled
            value="Your thoughts and feelings are not you, but only your mind's reactions to external events. Therefore, it is under your control to choose how to let your mind react. Let's try to feel more blue and green, the colors of harmony."
          />
        </div>
        <div className="text--white text--size-22 text--courgette text-center mb-1">
          Check-In Reminder
        </div>
        <div className="text--white text--size-14 text-center mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <Button whiteBackground>
          <Alarm />
          <span>
            Set reminder
          </span>
        </Button>
      </Container>
    </div>
  );
};

export default PageMindWeekly;
