import React from 'react';
import { render } from '@testing-library/react';

import Card from './';

describe('Card', () => {
  const url = 'pluralsight.ginojacob.com';
  const asset = 'pluralsight.ginojacob.com';

  const props = {
    title: 'Pluralsight',
    subtitle: 'Software Engineer',
  };

  it('renders title and subtitle, no url', () => {
    const { getByText, queryByText, container } = render(<Card {...props} />);

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.subtitle)).toBeInTheDocument();
    expect(container.querySelector(`a[href="${url}"]`)).toBeNull();
    expect(container.querySelector(`img[src="${asset}"]`)).toBeNull();
  });

  it('renders img if provided', () => {
    const { container } = render(<Card {...props} asset={asset} />);

    expect(container.querySelector(`img[src="${asset}"]`)).toBeInTheDocument();
  });

  it('renders url if provided', () => {
    const { getByText, container } = render(<Card {...props} url={url} />);

    expect(container.querySelector(`a[href="${url}"]`)).toBeInTheDocument();
  });
});
