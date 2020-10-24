import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Home from './Home';
import { ChooseMaster } from '../../../domain/usecases/ChooseMaster';
import { Master } from '../../../domain/models/Master';

class ChooseMasterSpy implements ChooseMaster {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  choose(masters: Master[]): Promise<Master> {
    return Promise.resolve({ id: 'id', name: 'name' });
  }
}

function makeSut() {
  const chooseMaster = new ChooseMasterSpy();
  jest.spyOn(ChooseMasterSpy.prototype, 'choose');
  const sut = render(<Home chooseMaster={chooseMaster} />);
  return { sut, chooseMaster };
}

describe('Home', () => {
  test('spapshot', () => {
    const { sut } = makeSut();
    expect(sut).toMatchSnapshot();
  });

  test('should call chooseMaster.choose when button is clicled', () => {
    const { chooseMaster } = makeSut();
    act(() => {
      const button = screen.getByTestId('button');
      fireEvent.click(button);
    });
    expect(chooseMaster.choose).toBeCalled();
  });
});
