import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { editMind } from 'redux/Mind/Mind.actions';
import { selectEditingMind } from 'redux/Mind/Mind.selectors';
import { Navigation, Container } from 'components/PageLayout';
import { ChevronLeft } from 'components/Icons';
import Mind from 'components/Minds/Mind';
import Tags from 'components/Tags/Tags';
import { TAGS } from 'data/mind.constants';
import { Button } from 'components/Common';
import TextArea from 'components/Common/TextArea';

const PageMindDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { mindId } = useParams();
  const mindDetails = useSelector(selectEditingMind(mindId));
  if (!mindDetails) {
    // Display error
    history.push('/mind');
    return null;
  }

  const onEditMind = useCallback((objectToUpdate) => {
    dispatch(editMind(mindId, objectToUpdate));
  }, [mindDetails]);

  return (
    <div id="pageMindDetails">
      <Navigation
        className="text--white"
        leftElem={<ChevronLeft onClick={() => history.push('/mind')} />}
        rightElem={<span>Skip</span>}
        noBackground
        label="Mind's reaction"
      />
      <Container>
        <div className="flex align-items-center justify-content-center">
          <Mind
            single
            mind={mindDetails}
            className="row-1"
          />
        </div>
        <div className="text--size-22 text--courgette mb-4 text-center text--white">
          Let's note what the feeling is related to
        </div>
        <Tags
          tags={TAGS}
          value={mindDetails.feelings || []}
          onChange={(val) => onEditMind({ feelings: val })}
        />
        <TextArea style={{ marginTop: '8px' }} value={mindDetails.note} placeholder="Tell us about your issue" onChange={(e) => onEditMind({ note: e.target.value })} />
        <div className="buttons buttons--with-menu">
          <Button whiteBackground onClick={() => history.push('/mind/weekly')}>
            Continue
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PageMindDetails;
