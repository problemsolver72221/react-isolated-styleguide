import React from 'react'
import { render, screen } from '@testing-library/react'
import Example from './components/__Example'

describe('Example', () => {
    test('renders Example component', () => {
        render(<Example />)

        screen.debug()
    })
})
