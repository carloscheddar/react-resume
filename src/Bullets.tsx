import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader'

const StyledBullets = styled.div`
  font-weight: 100;
`

const List = styled.ul`
  margin-top: 0;
`

interface BulletsProps {
  sectionName: string
  bullets: string[]
}

const Bullets = ({ sectionName, bullets }: BulletsProps) => {
  return (
    <StyledBullets>
      <SectionHeader>{sectionName}</SectionHeader>
      <List>
        {bullets.map((row) => (<li key={row}>{row}</li>))}
      </List>
    </StyledBullets>
  )
}

export default Bullets
