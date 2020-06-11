import { useRouter } from 'next/router';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Layout from '../components/Layout';
import BottomNavigation from '../components/BottomNavigation';
import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding:  theme.spacing(2)
  }
}));

const apiBaseUrl = 'http://localhost:8000';

const Index = props => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Layout>
      {router.query.query ?
      <div>
        <SearchBar value={router.query.query}/>
        <br></br>
        <div className={classes.container}>
          <SearchResults 
            status={props.status}
            results={props.results}
            numResults={props.numResults}
            start={router.query.start}
            end={router.query.end}
            query={router.query.query}
          />
          {props.status === 200 && props.results && props.results.length > 0 && <BottomNavigation />}
        </div>
      </div> :
      <div>
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
    const res = await fetch(`${apiBaseUrl}/search/test`, {
      method: 'post',
      body: JSON.stringify({
        query: context.query.query,
        start: parseInt(context.query.start),
        end: parseInt(context.query.end),
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
    console.log(data);
    return {
      numResults: data.NumResults,
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