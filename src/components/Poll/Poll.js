import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Button } from 'components/Common';
import { CheckOrange, ChevronLeft } from 'components/Icons';
import { uniq } from 'lodash';
import { Navigation, Container } from 'components/PageLayout';

const StyledWrapper = styled.div`
  .poll_answer.selected {
    position: relative;
    overflow: hidden;

    span {
      display: block;
      background: linear-gradient(91.67deg,#FC9D83 -0.59%,#FFCE00 107.84%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    svg {
      float: left;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
    }
  }

`;

const Poll = ({
  questions, answers, onChange, onFinish,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const currentQuestion = useMemo(() => questions[questionIndex] || {}, [questionIndex]);

  const onOptionSelect = useCallback((option) => {
    if (!currentQuestion.allowMultiple) {
      onChange(questionIndex, [option]);
      setTimeout(() => {
        setQuestionIndex(questionIndex + 1);
      }, 300);
    } else if ((answers[questionIndex] || []).includes(option)) {
      onChange(questionIndex, answers[questionIndex].filter((answer) => answer !== option));
    } else {
      onChange(questionIndex, uniq([...(answers[questionIndex] || []), option]));
    }
    if (questionIndex === questions.length - 1) {
      onFinish();
    }
  }, [questionIndex, answers]);

  const navigator = useMemo(() => (
    <Navigation
      style={{
        opacity: questionIndex ? 1 : 0,
      }}
      noBackground
      leftElem={<ChevronLeft className="text--white" onClick={() => setQuestionIndex(questionIndex - 1)} />}
      rightElem={<span className="text--white text--size-17 text--semibold" onClick={() => setQuestionIndex(questionIndex + 1)}>Skip</span>}
      progress={questionIndex ? (questionIndex / questions.length) * 100 : null}
    />
  ), [questionIndex]);

  if (!currentQuestion) return null;

  return (
    <StyledWrapper className="poll">
      {navigator}
      <Container>
        <div className="pt-5 text--white text--courgette text--size-22 text-center">
          {currentQuestion.question}
        </div>
      </Container>
      <div className="buttons">
        {(currentQuestion.options || []).map((opt, optIndex) => {
          const selected = (answers[questionIndex] || []).includes(opt);
          return (
            <Button className={`poll_answer ${selected ? 'selected' : ''}`} whiteBackground={selected} key={optIndex} onClick={() => onOptionSelect(opt)}>
              {selected && <CheckOrange />}
              <span>{opt}</span>
            </Button>
          );
        })}
        {currentQuestion.allowMultiple && (
          <Button
            disabled={!answers[questionIndex] || !answers[questionIndex].length}
            whiteBackground
            onClick={() => setQuestionIndex(questionIndex + 1)}
          >
            Continue
          </Button>
        )}
      </div>
    </StyledWrapper>
  );
};

Poll.propTypes = {
  questions: PropTypes.array,
  answers: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
};
Poll.defaultProps = {
  questions: [],
  answers: [],
};

export default Poll;
