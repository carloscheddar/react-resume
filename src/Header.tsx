import React from 'react';
import styled from 'styled-components';

const LastName = styled.span`
  font-weight: 700;
`
const Title = styled.span`
  font-weight: 100;
  font-size: 2.6rem;
  line-height: 2.2rem;
`

const StyledHeader = styled.header`
  font-weight: 100;
  font-size: 5.5rem;
  text-align: center;
  display: grid;
  padding-bottom: 5rem;
`

interface HeaderProps {
  firstName: string
  lastName: string
  title: string
}

const Header = ({ firstName, lastName, title }: HeaderProps) => {
  return (
    <StyledHeader>
      <span>{firstName}<LastName>{lastName}</LastName></span>
      <Title>{title}</Title>
    </StyledHeader>
  )
}

export default Header
