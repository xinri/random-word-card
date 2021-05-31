import {
  Card,
  CardContent,
  Button,
  Grid,
  Input,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import useTranslationApi from '../hooks/useTranslationApi';

const WriteCard = () => {
  const [ englishWord, setEnglishWord ] = useState('');
  const [ inputWord, setInputWord ] = useState('');
  const { translatedText, error } = useTranslationApi(englishWord, false);

  const handleInputChange = (event) => {
    setInputWord(event.target.value);
  };

  const handleAddNewCard = (event) => {
      window.localStorage.setItem(englishWord, translatedText);
      setEnglishWord('');
      setInputWord('');
  }

  const handleTranslate = (event) => {
      setEnglishWord(inputWord);
  }

  if (error) {
    return <CardContent>Translation Error : {error}</CardContent>;
  }

  return (
    <div>
      <Card style={{ width: '50%', marginTop: '10%', marginBottom: '2%' }}>
        <CardContent>
          <Grid container direction="column">
            <Grid item>
              <Typography>word to translate : </Typography>{' '}
              <Input value={inputWord} onChange={handleInputChange}></Input>
            </Grid>
            <Grid item>
              <Typography>German : {translatedText} </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid container justify="center" spacing={10}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            disabled={inputWord.trim().length === 0}
            onClick={handleTranslate}
          >
            Translate
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            disabled={translatedText.trim().length === 0}
            onClick={handleAddNewCard}
          >
            Add to the list
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default WriteCard;
