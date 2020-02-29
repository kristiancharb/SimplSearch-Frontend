import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const BottomNavigation = () => {
  const router = useRouter();
  const query = router.query.query;
  const oldStart = parseInt(router.query.start);

  const prevHandler = () => {
    if (!isNaN(oldStart)) {
      const start = oldStart - 10 > 0 ? oldStart - 10 : 0;
      const end = start + 10;
      window.location.href = `${window.origin}?query=${query}&start=${start}&end=${end}`;
    }
  };
  
  const nextHandler = () => {
    if (!isNaN(oldStart)) {
      const start = oldStart + 10;
      const end = start + 10;
      window.location.href = `${window.origin}?query=${query}&start=${start}&end=${end}`;
    }
  };

  return (
    <ButtonGroup variant='text'>
      {oldStart > 0 && (<Button onClick={prevHandler}> Previous </Button>)}
      <Button onClick={nextHandler}> Next </Button>
    </ButtonGroup>
  );
};

export default BottomNavigation;