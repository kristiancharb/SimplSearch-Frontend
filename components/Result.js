import { useState } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const buttonText = () => isExpanded ? 'Show Less' : 'Show More';
  const onClickHandler = () => setIsExpanded(!isExpanded);

  const renderText = () => {
    if (isExpanded) {
      return <Typography className={classes.section} variant='body2'> {props.contents} </Typography>;
    }

    const queryWords = router.query.query.toLowerCase().split(' ');
    const docWords = props.contents.split(' ');
    const indices = getQueryTermIndices(docWords, queryWords);
    const ranges = getTermPreviewRanges(docWords, indices);
    
    if (Array.isArray(ranges) && ranges.length === 0) {
      const preview = props.contents.length > 200 ? props.contents.substring(0, 200) : props.contents;
      return <Typography className={classes.section} variant='body1'> {preview}... </Typography>;
    }
    return renderTermPreviews(docWords, queryWords, ranges);
  };

  const getQueryTermIndices = (docWords, queryWords) => {
    const indices = [];

    docWords.forEach((word, index) => {
      word = word.toLowerCase();
      if (queryWords.includes(word)) {
        indices.push(index);
      }
    });
    return indices;
  };

  const getTermPreviewRanges = (docWords, indices) => {
    const ranges = [];
    const wordOffset = 10;
    indices.forEach(index => {
      let start = index - wordOffset;
      if (start < 0) {
        start = 0;
      }
      let end = index + wordOffset;
      if (end >= docWords.length) {
        end = docWords.length - 1;
      }

      const lastRange = ranges.length > 0 && ranges[ranges.length - 1];
      if (lastRange && lastRange[1] > start) {
        lastRange[1] = end;
      } else {
        ranges.push([start, end]);
      }
    });
    return ranges;
  };

  const renderTermPreviews = (docWords, queryWords, ranges) => {
    return ranges.map((range, index) => {
      let text = docWords.slice(range[0], range[1]).map(word => {
        return queryWords.includes(word.toLowerCase()) ?
          `<strong>${word}</strong>` :
          word;
      }).join(' ');
      text = `...${text}...`;
      return <Typography variant='body1' className={classes.section} key={index} dangerouslySetInnerHTML={{__html: text}}/>;
    });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='h6' className={classes.section}> {props.title} </Typography>
        <Divider variant='middle'/>
        {renderText()}
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