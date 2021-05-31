import { Grid, Typography, CardContent } from '@material-ui/core';
import useTranslationApi from '../../hooks/useTranslationApi';

const TranslationCard = ({ englishWord }) => {
  const { translatedText, error } = useTranslationApi(englishWord, true);

  if (error) {
    return <CardContent>Translation Error : {error}</CardContent>;
  }

  return (
    <CardContent>
      <Grid container direction="column">
        <Grid item>
          <Typography>English : {englishWord}</Typography>
        </Grid>
        <Grid item>
          <Typography>German : {translatedText}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default TranslationCard;
