import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import { Thinking, SplitPersonality } from 'components/Icons';

const StyledWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;
  background-color: #fff4f2;
  background-image: url('/assets/images/bg_illustration-man.png');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 80px auto;
`;

const StyledButton = styled.div`
  position: relative;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 40px;
  color: #fff;
  font-family: 'Gilroy';
  background: ${(props) => props.background};
  font-size: 20px;
  line-height: 1.3;
  text-align: center;
  border-radius: 12px 0px 0px 12px;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
  }
`;

const ITEMS = [
  {
    icon: <Thinking />,
    title: 'Happiness Program',
    background: 'linear-gradient(93.49deg, #5570F7 -16.84%, #A38CFF 92.26%)',
  },
  {
    icon: <SplitPersonality />,
    title: 'Mood Check-in',
    background: 'linear-gradient(93deg, #36D1DC -30.02%, #5B86E5 136.39%), linear-gradient(93.49deg, #5570F7 -16.84%, #A38CFF 92.26%)',
  },
];

const PagePrivyPersonalize = () => (
  <StyledWrapper>
    <SectionTitle label="Personalize" />
    <div style={{ paddingLeft: '100px' }}>
      {ITEMS.map((item, itemIndex) => (
        <StyledButton background={item.background} key={itemIndex}>
          {item.icon}
          <span>{item.title}</span>
        </StyledButton>
      ))}
    </div>
  </StyledWrapper>
);
export default PagePrivyPersonalize;
