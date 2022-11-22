import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader'

const StyledSidebar = styled.div`
  font-weight: 100;
  margin-right: 32px;
  font-size: 10px;
  text-align: right;

  ${SectionHeader} {
    font-size: 1.6rem;
  }
`


const List = styled.ul`
  margin-top: 0;
  list-style: none;
`

interface SidebarSection {
  title: string
  bullets: string[]
}

interface Sections {
  sections: SidebarSection[]
}

const Sidebar = ({ sections }: Sections) => {
  return (
    <StyledSidebar>
      {sections.map(({ title, bullets }: SidebarSection) => (
      <div>
        <SectionHeader>{title}</SectionHeader>
        <List>
          {bullets.map((row) => (<li key={row}>{row}</li>))}
        </List>
      </div>
      ))}
    </StyledSidebar>
  )
}

export default Sidebar
