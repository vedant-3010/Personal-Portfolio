import React from 'react'
import { Div, Container } from "../styles/Styles"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <Div>
      <StyledFooter>
        <p>Built with React, Framer Motion and Styled Components. Coded in VS Code.</p>
        <a href="https://github.com/vedant-3010/portfolio" target='_blank' rel="noreferrer">
          <FontAwesomeIcon icon={faCode} /> 
        </a>
      </StyledFooter>
    </Div>
  )
}

const StyledFooter = styled(Container)`
  flex-direction: column;
  padding: 2rem;
  gap: 0.5rem;
  p {
    font-size: 0.7rem;
  }
`
export default Footer