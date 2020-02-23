import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const SearchBar = props => {
  const [value, setValue] = useState(props.value || ''); 

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const query = value.toLowerCase();
    window.location.href = `${window.origin}?query=${query}`;
  };

  return (
    <form onSubmit={handleSubmit} method='get'>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <TextField id="standard-basic" value={value} onChange={handleChange} fullWidth/>
        </Grid>
        <Grid item xs={2}>
          <Button type='submit' variant='outlined' fullWidth>Search</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;