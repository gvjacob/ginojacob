import React from 'react'
import { render } from '@testing-library/react'

import Note from '.'

describe('Note', () => {
  it('renders children', () => {
    const children = 'This is a Note'
    const { getByText } = render(<Note>{children}</Note>)
    expect(getByText(children)).toBeInTheDocument()
  })
})
