import { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  section: {
    padding: theme.spacing(2),
  },
  card: {
    margin: theme.spacing(0, 0, 3),
  },
}));

const Result = props => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  const buttonText = () => isExpanded ? 'Show Less' : 'Show More';
  const onClickHandler = () => setIsExpanded(!isExpanded);

  const renderText = () => {
    if (isExpanded) {
      return props.contents;
    }
    return props.contents.substring(0, 300) + '...';
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='h6' className={classes.section}> {props.title} </Typography>
        <Divider variant='middle'/>
        <Typography variant='body1' className={classes.section}> {renderText()} </Typography>
      </CardContent>
      <CardActions className={classes.section}>
        <Button 
          variant='outlined' 
          size='small' 
          onClick={onClickHandler}
        > {buttonText()} </Button>
      </CardActions>
    </Card>
  );
};

export default Result;