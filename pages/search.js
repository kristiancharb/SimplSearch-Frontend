import { useRouter } from 'next/router';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';
import Paper from '@material-ui/core/Paper';
import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding:  theme.spacing(1)
  }
}));

const baseUrl = 'http://localhost:8000';

const Search = props => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Layout>
      <SearchBar value={router.query.query}/>
      <br></br>
      <Paper elevation={3}>
        <div className={classes.container}>
          <h3>Results for: {router.query.query}</h3>
          {props.status === 200 && props.results ?
            props.results.map(result => (
            <div key={result.Id}>
              <h4>{result.Title}</h4>
              <p>{result.Contents}</p>
              <br></br>
            </div>
          )) :
          <p>Sorry, there was a problem fetching results :(</p>
          }
        </div>
      </Paper>
    </Layout>
  );
};

Search.getInitialProps = async context => {
  try {
    const res = await fetch(`${baseUrl}/search/test`, {
      method: 'post',
      body: JSON.stringify({
        query: context.query.query,
        limit: 10
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.status !== 200) {
      console.log(res);
      return {
        results: null,
        status: res.status,
      };
    }

    const data = await res.json();
    return {
      results: data.Docs,
      status: 200,
    };

  } catch (e) {
    console.log(e);
    return {
      results: null,
      status: null,
    };
  }
};

export default Search;