import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useStyles } from './SearchInput.styles';

interface Props {
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  style?: React.CSSProperties;
  value?: unknown;
}

const SearchInput: React.FC<Props> = ({
  onBlur,
  onChange,
  onFocus,
  placeholder,
  style,
  value,
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
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
