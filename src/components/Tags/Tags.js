import React, { useCallback } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
`;

const StyledTag = styled.div`
  min-width: ${(props) => (props.longTag ? 'calc(50% - 4px)' : 'calc(33% - 4px)')};
  margin-bottom: 8px;
  flex: 1;
  font-weight: 500;
  line-height: 1.3;
  font-weight: 500;
  color: #fff;
  padding: 0 8px;
  border-radius: 35px;
  & > div {
    transition: 0.4s all;
    width: 100%;
    border-radius: 35px;
    height: 35px;
    border: ${(props) => (props.selected ? '0' : '1px solid #fff;')};
    background: ${(props) => (props.selected ? 'linear-gradient(91.67deg, #FC9D83 -0.59%, #FFCE00 107.84%);' : 'none')};
  }
`;
export default ({ tags, value, onChange }) => {
  const onItemClick = useCallback((tag) => {
    const foundTagIdx = value.findIndex((item) => item === tag);
    if (foundTagIdx > -1) {
      onChange([
        ...value.slice(0, foundTagIdx),
        ...value.slice(foundTagIdx + 1),
      ]);
    } else {
      onChange([
        ...value,
        tag,
      ]);
    }
  }, [tags, value]);

  return (
    <StyledWrapper className="flex justify-content-space-between">
      {tags.map((tag, tagIndex) => (
        <StyledTag key={tagIndex} className="flex align-items-center justify-content-center" selected={value.includes(tag)} longTag={tag.length > 10}>
          <div className="flex align-items-center justify-content-center" onClick={() => onItemClick(tag)}>
            {tag}
          </div>
        </StyledTag>
      ))}
    </StyledWrapper>
  );
};
