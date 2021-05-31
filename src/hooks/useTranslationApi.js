import { useEffect, useState } from 'react';

const inMemoryTranslation = {
  'Hello': 'Hallo',
  'Goodbye': 'Aufwiedersehen',
  'How are you ?': 'Wie geht es dir ?',
  'Thanks you': 'Danke schön',
  'Can you help me?': 'Können sie mir hilfen?',
  'Please': 'Bitte',
};

const cachedTranslationText = (word) => window.localStorage.getItem(word);

const useTranslationApi = (englishWord, autoSave) => {
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (englishWord?.trim().length === 0) {
      setTranslatedText('');
      return;
    }

    if (cachedTranslationText(englishWord)) {
      setTranslatedText(cachedTranslationText(englishWord));
      return;
    }

    const params = new URLSearchParams({
      auth_key: process.env.REACT_APP_API_KEY,
      text: englishWord,
      source_lang: 'EN',
      target_lang: 'DE',
    });

    fetch(`https://api-free.deepl.com/v2/translate?${params}`)
      .then((response) => {
        if (!response.ok) {
          // fall back solution
          console.log('error. status code : ', response.status);
          console.log('use the fall back solution (in memory data)');
          if (inMemoryTranslation[englishWord]) {
            return {
              translations: [{ text: inMemoryTranslation[englishWord] }],
            };
          } else {
            throw new Error(response.statusText);
          }
        }
        return response.json();
      })
      .then(
        (data) => {
          const text = data?.translations[0]?.text;
          setTranslatedText(text);

          if (autoSave) {
            window.localStorage.setItem(englishWord, text);
          }
        },
        (error) => setError({error})
      );
  }, [englishWord]);

  return { translatedText, error };
};

export default useTranslationApi;
