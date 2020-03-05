import Layout from '../components/Layout';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  section: {
    margin: theme.spacing(2),
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout className={classes.container}>
      <Paper className={classes.container}>
        <Typography className={classes.section} variant='h4'>About</Typography>
        <Divider variant='middle'/>
        <Typography variant='h6' className={classes.section}>
          SimplSearch is a simple full text search server implemented with Go and SQLite. 
        </Typography>
        <Typography variant='body1' className={classes.section}>
          This web app is meant to demonstrate the functionality of the SimplSearch API. 
          Currently you can search through roughly 150,000 news articles from various 
          publications. 
        </Typography>
        <Typography variant='body1' className={classes.section}>
          SimplSearch uses an inverted index efficiently query its document set. It maintains
          a mapping of each unique term to all the documents that contain this term. 
        </Typography>
        <Typography variant='body1' className={classes.section}>
          To serve a search query, SimplSearch looks up each search term in the inverted index and merges 
          the document lists for each term. These documents are then ranked based on how
          "similar" they are to the query. Similarity is measured using the tf-idf 
          (Term Frequency - Inverse Document Frequency) score for each term in the query and the 
          corresponding document.
        </Typography>
        <Typography variant='body1' className={classes.section}>
          - Kristian
        </Typography>
        <Typography variant='body1' className={classes.section}>
          <Link href='https://github.com/kristiancharb/SimplSearch' rel='noreferrer' target='_blank'>
           Code & More Info 
          </Link>
        </Typography>
      </Paper>
    </Layout>
  );
};

export default About;