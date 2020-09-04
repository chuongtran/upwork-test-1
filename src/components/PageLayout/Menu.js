import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledMenu = styled.div`
  z-index: 10;
  max-width: 510px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const StyledMenuItem = styled(Link)`
  flex: 1;
  color: #fff;
  font-size: 11px;
  line-height: 12px;
  font-weight: 600;
  text-decoration: none;
  background: rgba(25, 34, 68, 0.7);
  height: 70px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  svg {
    margin-bottom: 6px;
  }
`;

const Menu = ({ items }) => (
  <div>
    <StyledMenu>
      {items.map((item, itemIndex) => (
        <StyledMenuItem to={item.path} key={itemIndex}>
          {item.icon}
          {item.label}
        </StyledMenuItem>
      ))}
    </StyledMenu>
  </div>
);

Menu.propTypes = {
  items: PropTypes.array,
};
Menu.defaultProps = {
  items: [],
};

export default Menu;
