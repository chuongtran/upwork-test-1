import React, { useCallback, useState } from 'react';
import { capitalize } from 'lodash';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { updateCounselorFilter, updateCounselorOrderBy } from 'redux/Counselor/Counselor.actions';

// SELECTORS
import { selectCounselorFilter, selectCounselorOrderBy } from 'redux/Counselor/Counselor.selectors';

// COMPONENTS
import { Navigation } from 'components/PageLayout';
import {
  Select, Input, Dropdown, Button,
} from 'components/Common';

// ICONS
import {
  Sort, Filter, Search, ChevronLeft,
} from 'components/Icons';

// CONSTANTS
import {
  TARGETS, TYPES, LANGUAGES, GENDERS, SORT_OPTIONS,
} from './Counselors.constants';
import Switch from 'components/Common/Switch';

const filters = [
  {
    id: 'target',
    options: TARGETS,
  },
  {
    id: 'type',
    options: TYPES,
  },
  {
    id: 'language',
    options: LANGUAGES,
  },
  {
    id: 'gender',
    options: GENDERS,
  },
];

const inputs = ['address', 'country', 'state', 'city'];

const StyledWrapper = styled.div`


`;

const Filters = ({ filter, onUpdate }) => {
  const onFilterUpdate = useCallback((filterToUpdate) => {
    if (typeof onUpdate === 'function') {
      onUpdate(filterToUpdate);
    }
  }, [onUpdate]);

  return (
    <>
      {filters.map((filterItem) => (
        <Select
          key={filterItem.id}
          options={filterItem.options}
          value={filter[filterItem.id]}
          onSelect={(val) => onFilterUpdate({ [filterItem.id]: val })}
        />
      ))}
      <div className="text--size-17 text-center text--semibold text--white">
        Location
      </div>
      <p className="mb-3 text--white flex align-items-center justify-content-space-between">
        <span>Detect automatically</span>
        <Switch
          checked={filter.detectAutomatically}
          onToggle={() => onFilterUpdate({ detectAutomatically: !filter.detectAutomatically })}
        />
      </p>
      <div className="mb-3">
        {
          inputs.map((inputKey) => (
            <Input
              disabled={filter.detectAutomatically}
              label={capitalize(inputKey)}
              value={filter[inputKey]}
              onChange={(e) => onFilterUpdate({ [inputKey]: e.target.value })}
            />
          ))
        }
      </div>
    </>
  );
};

const Sorter = ({ orderBy, onUpdate }) => {
  const onSorterUpdate = useCallback((val) => {
    if (typeof onUpdate === 'function') {
      onUpdate(val);
    }
  }, [onUpdate]);

  return (
    <Select label="Sorted by" value={orderBy} options={SORT_OPTIONS} onSelect={(val) => onSorterUpdate(val)}>
      <Sort />
    </Select>
  );
};


const CounselorsFilter = () => {
  const [open, setOpen] = useState(false);
  const filter = useSelector(selectCounselorFilter());
  const orderBy = useSelector(selectCounselorOrderBy());
  const dispatch = useDispatch();

  const onFilterUpdate = useCallback((filterToUpdate) => {
    dispatch(updateCounselorFilter(filterToUpdate));
  }, []);

  return (
    <StyledWrapper className="flex align-items-center">
      <p className="text--semibold text--white flex--1">
        3 counselors
      </p>
      <div className="flex align-items-center">
        <Dropdown
          label={<Filter />}
          hasCloseIcon={false}
          open={open}
          onToggle={() => setOpen(!open)}
        >
          <Navigation
            label={<span className="text--white">Counselors</span>}
            noBackground
            leftElem={<ChevronLeft className="text--white" onClick={() => setOpen(false)} />}
          />
          <Filters filter={filter} onUpdate={onFilterUpdate} />
          <Button whiteBackground onClick={() => setOpen(false)}>
            <Search />
            <span>Search</span>
          </Button>
        </Dropdown>
        <span className="ml-3" />
        <Sorter orderBy={orderBy} onUpdate={(val) => dispatch(updateCounselorOrderBy(val))} />
      </div>
    </StyledWrapper>
  );
};

export default CounselorsFilter;
