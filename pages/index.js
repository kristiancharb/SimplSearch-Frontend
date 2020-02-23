import { useRouter } from 'next/router';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Layout from '../components/Layout';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    padding:  theme.spacing(2)
  }
}));

const baseUrl = 'http://localhost:8000';

const Index = props => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Layout>
      {router.query.query ?
      <div>
        <SearchBar value={router.query.query}/>
        <br></br>
        <Paper elevation={3}>
          <div className={classes.container}>
            <SearchResults status={props.status} results={props.results} query={router.query.query} />
          </div>
        </Paper>
      </div> :
      <div>
        <Typography variant="h5">Enter a word or phrase to get started...</Typography>
        <br></br>
        <br></br>
        <SearchBar value={router.query.query}/>
      </div>
      }
    </Layout>
  );
};

Index.getInitialProps = async context => {
  if (!context.query.query) {
    return {
      results: null,
      status: null,
    };
  }

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
      status: 600,
    };
  }
};

export default Index;