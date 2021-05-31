import { Button, Card, Grid } from '@material-ui/core';
import { useState } from 'react';
import TranslationCard from '../RandomCard/TranslationCard/TranslationCard';

const ListAll = () => {
  const [idx, setIdx] = useState(0);

  const allKeys = Object.keys(window.localStorage);

  const goToPrevious = (event) => {
    setIdx(idx - 1);
  };

  const goToNext = (event) => {
    setIdx(idx + 1);
  };

  return (
    <div>
      <Card style={{ width: '20%', marginTop: '10%', marginBottom: '2%' }}>
        <TranslationCard englishWord={allKeys[idx]} />
      </Card>
      <Grid container justify="center" spacing={10}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            disabled={idx === 0}
            onClick={goToPrevious}
          >
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            disabled={idx === allKeys.length - 1}
            onClick={goToNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ListAll;
