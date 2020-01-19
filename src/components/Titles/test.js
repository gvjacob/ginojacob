import React from 'react'
import { render } from '@testing-library/react'

import Titles from '.'

describe('Titles', () => {
  it('renders Gino Jacob', () => {
    const { getByText } = render(<Titles />)
    expect(getByText('Gino Jacob')).toBeInTheDocument()
  })

  it('renders all titles', () => {
    const titles = ['Developer', 'Designer']
    const { getByText } = render(<Titles titles={titles} />)

    titles.forEach((title) => {
      expect(getByText(title)).toBeInTheDocument()
    })
  })
})
