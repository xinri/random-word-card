import { Button, Card } from '@material-ui/core';
import { useState } from 'react';
import TranslationCard from './TranslationCard/TranslationCard';

const RandomCard = () => {
  const engWordList = [
    'Hello',
    'Goodbye',
    'How are you ?',
    'Thanks you',
    'Can you help me?',
    'Please',
  ];

  const [wordToTranslate, setWordToTranslate] = useState('Hello');

  const getRandomWord = () => {
    return engWordList[Math.floor(Math.random() * engWordList.length)];
  };

  const generateAnotherCard = (event) => {
    event.preventDefault();
    setWordToTranslate(getRandomWord());
  };

  return (
    <div>
      <Card style={{ width: '20%', marginTop: '10%', marginBottom: '2%' }}>
        <TranslationCard englishWord={wordToTranslate} />
      </Card>
      <Button variant="outlined" color="primary" onClick={generateAnotherCard}>
        generate another card
      </Button>
    </div>
  );
};

export default RandomCard;
