import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../../@hooks/useDebounce';
import { searchDataSelector } from '../../../@store/search/selectors';
import { searchTC } from '../../../@store/search/slice';
import SearchInput from './SearchInput';
import SearchOutput from './SearchOutput';

export const AppSearch = () => {
  const dispatch = useDispatch();
  const searchDataResults = useSelector(searchDataSelector).results || [];
  const [searchVal, setSearchVal] = useState('');
  const debouncedSearchTerm = useDebounce(searchVal, 500);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(searchTC(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch]);

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
      {searchDataResults.length > 0 && (
        <SearchOutput movies={searchDataResults} />
      )}
    </Box>
  );
};

AppSearch.whyDidYouRender = true;

export default AppSearch;
