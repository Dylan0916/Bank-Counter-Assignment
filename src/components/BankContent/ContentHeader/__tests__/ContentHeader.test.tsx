import { render } from '@testing-library/react';
import React from 'react';

import ContentHeader from '../ContentHeader';

describe('ContentHeader', () => {
  const createWrapper = () => render(<ContentHeader />);

  it('should render the number of headItem correctly', () => {
    const { queryAllByTestId } = createWrapper();

    expect(queryAllByTestId('headItem').length).toBe(3);
  });
});
