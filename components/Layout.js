import HeadImport from '../components/HeadImport';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  heading: {
    marginTop: 24,
    marginBottom: 36,
  },
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div>
      <HeadImport />
      <CssBaseline />
      <Container>
        <Typography variant='h3' className={classes.heading}>SimplSearch</Typography>
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;