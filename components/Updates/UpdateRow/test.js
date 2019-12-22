import React from 'react';
import { render, wait } from '@testing-library/react';

import UpdateRow from './';

const Row = (props) => (
  <table>
    <tbody>
      <UpdateRow {...props} />
    </tbody>
  </table>
);

describe('UpdateRow', () => {
  const props = {
    story: 'Started @ Upstatement',
    date: '2019-12-14T13:57:00.000Z',
  };

  it('renders', () => {
    const { getByTestId } = render(<Row {...props} />);
    expect(getByTestId('UpdateRow')).toBeInTheDocument();
  });

  it('renders null if story is not found', () => {
    const { queryByTestId } = render(<Row />);
    expect(queryByTestId('UpdateRow')).toBeNull();
  });

  it('renders story and date in MMM DD, YYYY format', () => {
    const { getByText } = render(<Row {...props} />);

    expect(getByText(props.story)).toBeInTheDocument();
    expect(getByText('Dec 14, 2019')).toBeInTheDocument();
  });

  it('renders Now as date if null', () => {
    const { getByText } = render(<Row {...props} date={null} />);

    expect(getByText(props.story)).toBeInTheDocument();
    expect(getByText('Now')).toBeInTheDocument();
  });
});
