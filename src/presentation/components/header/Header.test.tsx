import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('spapshot', () => {
    const sut = render(
      <Header>
        <div>children</div>
      </Header>
    );
    expect(sut).toMatchSnapshot();
  });
});
