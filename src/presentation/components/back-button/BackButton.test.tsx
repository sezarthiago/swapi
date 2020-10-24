import React from 'react';
import { render } from '@testing-library/react';
import BackButton from './BackButton';

describe('BackButton', () => {
  test('spapshot', () => {
    const sut = render(<BackButton onClick={() => {}} />);
    expect(sut).toMatchSnapshot();
  });
});
