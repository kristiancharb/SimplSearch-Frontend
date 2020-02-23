import { Typography } from '@material-ui/core';

const SearchResults = props => {
  return (
    <div>
      {props.status === 200 && props.results ?
      <div>
        <Typography variant="h5">
          Results for: {props.query}
        </Typography>
        {props.results.map(result => (
          <div key={result.Id}>
            <h4>{result.Title}</h4>
            <p>{result.Contents}</p>
            <br></br>
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