import React from 'react'
import { render } from '@testing-library/react'

import Navigation from '.'

describe('Navigation', () => {
  const props = {
    tabs: [
      { name: 'About', slug: '/' },
      { name: 'Work', slug: '/work' },
      { name: 'Services', slug: '/services' },
      { name: 'Contact', slug: '/contact' },
    ],
    links: [
      {
        name: 'Github',
        fontAwesomeClass: 'fab fa-github',
        url: 'https://github.com/gvjacob',
      },
      {
        name: 'LinkedIn',
        fontAwesomeClass: 'fab fa-linkedin-in',
        url: 'https://www.linkedin.com/in/gvjacob',
      },
      {
        name: 'Résumé',
        fontAwesomeClass: 'fas fa-file-pdf',
        url: 'https://indd.adobe.com/view/3d1c1fa1-6a12-4d15-b3d9-c0059cc1202b',
      },
    ],
  }
  it('renders tab name and slug', () => {
    const { getByText, container } = render(<Navigation {...props} />)

    props.tabs.forEach(({ name, slug }) => {
      expect(getByText(name)).toBeInTheDocument()
      expect(container.querySelector(`a[href="${slug}"]`)).toBeInTheDocument()
    })
  })

  it('renders links', () => {
    const { getByText, container } = render(<Navigation {...props} />)

    props.links.forEach(({ name, url }) => {
      expect(container.querySelector(`a[href="${url}"]`)).toBeInTheDocument()
    })
  })
})
