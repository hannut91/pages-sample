import { test, expect } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

test('카운트를 클릭하면, count가 증가한다.', () => {
  render(<App />);

  fireEvent.click(screen.getByText('count is 0'));

  expect(screen.getByText('count is 1')).not.toBeUndefined();
})