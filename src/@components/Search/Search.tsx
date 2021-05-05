import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Box,
} from '@material-ui/core';
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../@hooks/useDebounce';
import { getCurrentWeatherTC } from '../../@store/current-weather/slice';
import { getForecastTC } from '../../@store/forecast/slice';
import { searchDataSelector } from '../../@store/search/selectors';
import { clearDataAC, searchTC } from '../../@store/search/slice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(searchDataSelector);
  const [searchVal, setSearchVal] = useState('');
  const debouncedSearchTerm = useDebounce(searchVal, 300);
  const days = 3;

  const onPlaceClick = useCallback(
    (lat: number, lon: number) => {
      dispatch(getCurrentWeatherTC({ lat, lon }));
      dispatch(getForecastTC({ days, lat, lon }));
      dispatch(clearDataAC());
      setSearchVal('');
    },
    [dispatch],
  );

  useEffect(() => {
    // API response only for 3 characters
    if (debouncedSearchTerm.length > 2) dispatch(searchTC(debouncedSearchTerm));
  }, [debouncedSearchTerm, dispatch]);

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.currentTarget.value.trim());
  };

  return (
    <Box p={3}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="search-input">Search</InputLabel>
        <OutlinedInput
          id="search-input"
          value={searchVal}
          onChange={handleChange()}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      {searchData.map((d) => (
        <div
          key={d.id}
          onClick={() => onPlaceClick(d.lat, d.lon)}
          role="menuitem"
          aria-hidden
        >
          {d.name}
        </div>
      ))}
    </Box>
  );
};

export default Search;
