import React from 'react';
import { render } from '@testing-library/react';

import Experience from './';

describe('Experience', () => {
  const url = 'pluralsight.ginojacob.com';

  const props = {
    company: 'Pluralsight',
    position: 'Software Engineer',
  };

  it('renders', () => {
    const { getByTestId } = render(<Experience {...props} />);
    expect(getByTestId('Experience')).toBeInTheDocument();
  });

  it('renders company and title, no url', () => {
    const { getByText, queryByText, container } = render(
      <Experience {...props} />,
    );

    expect(getByText(props.company)).toBeInTheDocument();
    expect(getByText(props.position)).toBeInTheDocument();

    expect(container.querySelector(`a[href="${url}"]`)).toBeNull();
  });

  it('renders experience url if provided', () => {
    const { getByText, container } = render(
      <Experience {...props} url={url} />,
    );

    expect(container.querySelector(`a[href="${url}"]`)).toBeInTheDocument();
  });
});
