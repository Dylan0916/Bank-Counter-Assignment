import { act, render } from '@testing-library/react';
import React from 'react';

import { queueSubject$ } from '../../../../utils/bankHelpers';
import ProcessItem from '../ProcessItem';

describe('ProcessItem', () => {
  const defaultProps = {
    name: 'name',
    index: 0,
    setQueue: jest.fn(),
  };
  const createWrapper = (testProps = {}) => {
    const props = {
      ...defaultProps,
      ...testProps,
    };

    return render(<ProcessItem {...props} />);
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should call setQueue when mounted', () => {
    const mockSetQueue = jest.fn();

    createWrapper({ setQueue: mockSetQueue });

    expect(mockSetQueue).toBeCalled();
  });

  it('should render processing and processed text after execute', () => {
    const mockNumber = 123;
    const mockSetQueue = jest.fn();
    const { queryByText } = createWrapper({ setQueue: mockSetQueue });

    expect(queryByText(mockNumber)).toBeNull();
    expect(queryByText('idle')).not.toBeNull();

    act(() => {
      mockSetQueue.mock.calls[0][0].execute(mockNumber);
    });

    expect(queryByText(mockNumber)).not.toBeNull();
    expect(queryByText('idle')).toBeNull();

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    act(() => {
      mockSetQueue.mock.calls[0][0].execute(321);
    });
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(queryByText('123,321')).not.toBeNull();
    expect(queryByText('idle')).not.toBeNull();
  });

  it('should call queueSubject$.next after execute', () => {
    queueSubject$.next = jest.fn();

    const mockNumber = 123;
    const mockSetQueue = jest.fn();

    createWrapper({ setQueue: mockSetQueue });

    act(() => {
      mockSetQueue.mock.calls[0][0].execute(mockNumber);
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(queueSubject$.next).toBeCalled();
  });
});
