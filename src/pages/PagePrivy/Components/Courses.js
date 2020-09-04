import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

import { CalendarChevronRight } from 'components/Icons';

import Course1 from './Images/course-1.png';
import Course2 from './Images/course-2.png';
import Course3 from './Images/course-3.png';
import Course4 from './Images/course-4.png';

const StyledWrapper = styled.div`
  padding: 0 16px;
  background: #FFF2FF;
  margin-top: -40px;
  padding-top: 70px;
`;

const StyledItems = styled.div`
  display: flex;
  flex-wrap: wrap;


`;
const StyledItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #FFE6FF;
  padding: 16px 0;
  .thumbnail {
    width: 70px;
    height: 70px;
    border-radius: 12px;
    margin-right: 16px;
  }
`;

const ITEMS = [
  {
    id: 1,
    thumbnail: Course1,
    title: 'Yummi Food',
  },
  {
    id: 2,
    thumbnail: Course2,
    title: 'Grow Up Your Cancer',
  },
  {
    id: 3,
    thumbnail: Course3,
    title: 'Say "Yes"',
  },
  {
    id: 4,
    thumbnail: Course4,
    title: 'Easy way of Life',
  },
];

const PagePrivyCourses = () => (
  <StyledWrapper>
    <SectionTitle label="Courses" />
    <StyledItems clasName="flex flex--column">
      {ITEMS.map((item, itemIndex) => (
        <StyledItem className="flex align-items-center" key={itemIndex}>
          <div className="thumbnail">
            <img src={item.thumbnail} />
          </div>
          <h4 className="flex--1">{item.title}</h4>
          <CalendarChevronRight />
        </StyledItem>
      ))}
    </StyledItems>
  </StyledWrapper>
);
export default PagePrivyCourses;
