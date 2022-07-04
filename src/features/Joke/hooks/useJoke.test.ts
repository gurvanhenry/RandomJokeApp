import {test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-hooks';
import {useJoke} from './useJoke';

test('useJoke', () => {
  const {result} = renderHook(() => useJoke());
  const joke = result.current.joke;
  expect(joke.id).toBe('');
});
