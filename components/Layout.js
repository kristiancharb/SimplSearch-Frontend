import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Link from '@material-ui/core/Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
  heading: {
    paddingBottom:  theme.spacing(1),
    backgroundColor: blueGrey[400],
  },
  button: {
    flex: 1, 
    marginTop: theme.spacing(1),
  }
}));

const LinkButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(blueGrey[400]),
  },
}))(Button);

const Layout = props => {
  const classes = useStyles();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const headerVariant = isXs ? 'h4' : 'h3';
  
  let headerXs;
  if (isSm) {
    headerXs = isXs ? 9 : 10;
  } else {
    headerXs = 11;
  }

  return (
    <div>
      <CssBaseline />
      <Container>
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <AppBar className={classes.heading}>
              <Toolbar>
                <Grid container spacing={0}>
                  <Grid item xs={headerXs}>
                    <Link color='inherit' href='./' variant={headerVariant}>
                      SimplSearch
                    </Link>
                  </Grid>
                  <Grid>
                    <LinkButton href='/about' className={classes.button}> About </LinkButton>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
          </Grid>
          <Grid item xs={12}>
            {props.children}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Layout;