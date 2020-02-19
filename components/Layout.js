import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
  heading: {
    paddingBottom:  theme.spacing(1),
    backgroundColor: blueGrey[500],
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <AppBar className={classes.heading}>
              <Toolbar>
                <Grid item xs={1} />
                <Typography variant="h2">SimplSearch</Typography>
              </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            {/* <Typography variant='h3' className={classes.heading}>SimplSearch</Typography> */}
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={1} />
          <Grid item xs={10}>
            {props.children}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Layout;