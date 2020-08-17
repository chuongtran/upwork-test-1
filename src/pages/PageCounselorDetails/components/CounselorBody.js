import React, { useState } from 'react';
import moment from 'moment';

// ACTIONS
import { updateCounselorBooking } from 'redux/Counselor/Counselor.actions';

// SELECTORS
import { selectCounselorBooking } from 'redux/Counselor/Counselor.selectors';

// COMPONENTS
import { Container } from 'components/PageLayout';
import { Button, Select, Dropdown } from 'components/Common';
import { Pin, ArrowDropdown, Clock } from 'components/Icons';
import Calendar from 'components/Calendar/Calendar';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from 'components/Avatar/Avatar';
import { useHistory } from 'react-router-dom';

const ADDRESS = [
  'Online',
  'Hochiminh City',
  'Hanoi City',
  'Danang City',
];

const SESSIONS = [
  '1 Session - 600$',
  '2 Sessions - 1000$',
  '3 Sessions - 1300$',
  '4 Sessions - 1500$',
];

const CounselorBody = ({ counselor }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { address, section, selectedSlot } = useSelector(selectCounselorBooking());
  const [open, setOpen] = useState(false);
  return (
    <div className="counselor__body pt-6">
      <Container className="pb-6">
        <div className="mb-3 text-center text--size-17 text--semibold">Schedule an appointment</div>
        <Select
          value={address}
          options={ADDRESS}
          onSelect={(val) => dispatch(updateCounselorBooking({ address: val }))}
        >
          <Button whiteBackground style={{ borderColor: '#000' }}>
            <Pin className="text--black" />
            <span>Address selection dropdown</span>
            <ArrowDropdown className="text--black" />
          </Button>
        </Select>
        <Select
          value={section}
          options={SESSIONS}
          placeholder="Please select..."
          buttonProps={{ whiteBackground: true, bordered: true }}
          onSelect={(val) => dispatch(updateCounselorBooking({ section: val }))}
        />

        <Calendar />
        <div className="pt-4">
          <Button
            onClick={() => setOpen(true)}
            style={{ background: 'linear-gradient(91.67deg, #FC9D83 -0.59%, #FFCE00 107.84%)' }}
            disabled={!selectedSlot || !section || !address}
          >
            Pay to Book appointment
          </Button>
          <Dropdown open={open} onToggle={() => setOpen(!open)} hasCloseIcon={false}>
            <h3 style={{ fontWeight: 500 }} className="mb-0 mt-0 text--white mb-3">You have sheduled an In Person Appointment with</h3>
            <div className="flex align-items-center">
              <Avatar src={counselor.avatar} width={80} />
              <i className="text--size-18 ml-3 text--white">{counselor.name}</i>
            </div>
            <div className="text--white text--semibold">
              <div className="flex align-items-center mt-3">
                <Clock className="mr-3" />
                &nbsp;at&nbsp;
                {selectedSlot && moment(selectedSlot.start).format('hh:mm')}
                &nbsp;on&nbsp;
                {selectedSlot && moment(selectedSlot.start).format('dddd, MMM D, YYYY')}
              </div>
              {address && address !== 'Online' && (
                <div className="flex align-items-center mt-1">
                  <Pin className="mr-3" />
                  &nbsp;at&nbsp;
                  {address}
                </div>
              )}
            </div>
            <div className="mt-3">
              <Button onClick={() => { setOpen(false); history.push('/counselors'); }} style={{ border: 0, background: 'linear-gradient(91.67deg, #FC9D83 -0.59%, #FFCE00 107.84%)' }}>Confirm</Button>
            </div>
          </Dropdown>
        </div>
      </Container>
    </div>
  );
};

export default CounselorBody;
