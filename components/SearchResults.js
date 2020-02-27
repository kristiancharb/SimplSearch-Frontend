import { Typography } from '@material-ui/core';
import Result from './Result';

const SearchResults = props => {
  return (
    <div>
      {props.status === 200 && props.results ?
      <div>
        <Typography color='textSecondary' variant='subtitle1'>Showing results for: {props.query}</Typography>
        <br></br>
        {props.results.map(result => (
          <div key={result.Id}>
            <Result title={result.Title} contents={result.Contents} />
          </div>
        ))} 
      </div>
      :
      <Typography variant="h5">
        Sorry, there was a problem fetching the results.
      </Typography>
      }
    </div>
  );
};

export default SearchResults;