import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const SearchBar = props => {
  const [value, setValue] = useState(props.value || '');
  const theme = useTheme();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const query = value.toLowerCase();
    window.location.href = `${window.origin}?query=${query}&start=0&end=10`;
  };

  const textFieldXs = useMediaQuery(theme.breakpoints.down('sm')) ? 7 : 5;
  const buttonXs = useMediaQuery(theme.breakpoints.down('sm')) ? 3 : 2;
  return (
    <form onSubmit={handleSubmit} method='get'>
      <Grid container spacing={3}>
        <Grid item xs={'auto'} />
        <Grid item xs={textFieldXs}>
          <TextField id='standard-basic' label='Enter a word or phrase...' value={value} onChange={handleChange} fullWidth/>
        </Grid>
        <Grid item xs={buttonXs}>
          <Button type='submit' variant='outlined' fullWidth>Search</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;