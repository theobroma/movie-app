import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './SearchInput.styles';

interface Props {
  value?: any;
  placeholder?: any;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  style?: any;
}

const SearchInput: React.FC<Props> = ({
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  style,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={style}>
      <div className={classes.icon}>
        <SearchIcon />
      </div>
      <InputBase
        className={classes.input}
        value={value}
        type="search"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default SearchInput;
