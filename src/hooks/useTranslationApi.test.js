import { act, renderHook } from '@testing-library/react-hooks';
import ReactDOM from 'react-dom';
import useTranslationApi from './useTranslationApi';

describe('useTranslationApi', () => {
  it('returns the initial state', () => {

    const { result } = renderHook(() => useTranslationApi('', false));
    const { translatedText, error } = result.current;

    expect(translatedText).toEqual('');
    expect(error).toBeNull();
  });

  it('should return the translation Hallo when translate with Hello', () => {

    const { result } = renderHook(() => useTranslationApi('Hello', false));

    const { translatedText, error } = result.current;

    expect(translatedText).toEqual('Hallo');
    expect(error).toBeNull();
  });
});
