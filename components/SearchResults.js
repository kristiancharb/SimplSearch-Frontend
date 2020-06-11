import { Typography } from '@material-ui/core';
import Result from './Result';

const SearchResults = props => {
  let results;
  if (props.status === 200 && props.results && props.results.length > 0) {
    results = (
      <div>
        <Typography color='textSecondary' variant='subtitle1'>
          Showing results {props.start} - {props.end} out of {props.numResults}.
        </Typography>
        <br></br>
        {props.results.map(result => (
          <div key={result.Id}>
            <Result title={result.Title} contents={result.Contents} />
          </div>
        ))} 
      </div>
    );
  } else if (props.status === 200 && props.results) {
    results = (
      <Typography variant="h5">
        No results were found.
      </Typography>
    );
  } else {
    results = (
      <Typography variant="h5">
        Sorry, there was a problem fetching the results.
      </Typography>
    );
  }
  return results;
};

export default SearchResults;