import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

// COMPONENTS
import { PageContainer } from 'components/PageLayout';
import Poll from 'components/Poll/Poll';
import { QUESTIONS } from 'data/questions.constants';

const PagePolls = () => {
  const history = useHistory();
  const [answers, setAnswers] = useState([]);

  const onAnswersChange = useCallback((questionIndex, answer) => {
    setAnswers([
      ...answers.slice(0, questionIndex),
      answer,
      ...answers.slice(questionIndex + 1),
    ]);
  }, [answers]);

  return (
    <PageContainer>
      <Poll answers={answers} questions={QUESTIONS} onChange={onAnswersChange} onFinish={() => history.push('/privy')} />
    </PageContainer>
  );
};

export default PagePolls;
