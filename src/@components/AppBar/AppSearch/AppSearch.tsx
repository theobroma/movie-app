import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Box } from '@material-ui/core';

import useDebounce from '../../../@hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '../../../@store/configureStore';
import { searchDataSelector } from '../../../@store/search/selectors';
import { searchTC } from '../../../@store/search/slice';

import SearchInput from './SearchInput';
import SearchOutput from './SearchOutput';

const AppSearch = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const searchDataResults = useAppSelector(searchDataSelector).results || [];
  const [searchVal, setSearchVal] = useState('');
  const debouncedSearchTerm = useDebounce(searchVal, 500);
  const [showOutput, setShowOutput] = useState(true);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setShowOutput(true);
      dispatch(searchTC(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch]);

  // hide output when location (page) has changed
  useEffect(() => {
    setShowOutput(false);
    setSearchVal('');
  }, [location]);

  return (
    <Box>
      <div style={{ margin: '5px 15px 10px 15px' }}>
        <SearchInput
          value={searchVal}
          onChange={handleSearchInputChange}
          style={{ width: '100%', height: 50 }}
          // onBlur={() => !searchVal && setShowOutput(false)}
          // onFocus={() => setShowOutput(true)}
        />
      </div>
      {!!showOutput && searchDataResults.length > 0 && (
        <SearchOutput movies={searchDataResults} />
      )}
    </Box>
  );
};

AppSearch.whyDidYouRender = true;

export default AppSearch;
