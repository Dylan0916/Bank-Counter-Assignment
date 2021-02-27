import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';

import { queueSubject$ } from '../../../utils/bankHelpers';
import BankContent from '../BankContent';

jest.mock('../ProcessItem', () => (props: any) => {
  return <div {...props}>ProcessItem</div>;
});

describe('BankContent', () => {
  const createWrapper = () => render(<BankContent />);

  it('should render the number of ProcessItem correctly', () => {
    const { queryAllByText } = createWrapper();
    const names = JSON.parse(process.env.REACT_APP_NAMES + '');

    expect(queryAllByText('ProcessItem').length).toBe(names.length);
  });

  it('should render waitings and button text correctly', () => {
    const { queryByText, getByText } = createWrapper();

    act(() => {
      fireEvent.click(getByText('NEXT 1'));
    });

    expect(queryByText('waitings: 1')).not.toBeNull();
    expect(queryByText('waitings: 0')).toBeNull();
    expect(queryByText('waitings: 2')).toBeNull();

    act(() => {
      fireEvent.click(getByText('NEXT 2'));
    });

    expect(queryByText('waitings: 1')).toBeNull();
    expect(queryByText('waitings: 2')).not.toBeNull();
  });

  it('should call execute function when click button and queue is not an empty array', () => {
    const mockExecute = jest.fn();
    const { getByText } = createWrapper();

    act(() => {
      queueSubject$.next({ execute: mockExecute, index: 0 });
    });
    act(() => {
      fireEvent.click(getByText('NEXT 1'));
    });

    expect(mockExecute).toBeCalledWith(1);
  });
});
