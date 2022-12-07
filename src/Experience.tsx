import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader'

export interface ExperienceType {
  date: string,
  company: string,
  location: string,
  role: string,
  description: string
}

interface ExperienceProps {
  experiences: ExperienceType[]
}

const StyledExperience = styled.div`
  font-weight: 100;
`

const List = styled.ul`
  margin-top: 0;
  padding: 0;
  list-style: none;

  li:not(:first-child) {
    margin-top: 8px;
  }
`

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  margin-bottom: 6px;
  line-height: 1.95rem;

  b {
    font-weight: bold;
    font-size: 14px;
  }
`

const Description = styled.div`
  margin-left: 100px;
`

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <StyledExperience>
      <SectionHeader>Experience</SectionHeader>
      <List>
        {experiences.map(({ date, company, location, role, description }) => (
          <li key={description}>
            <ListHeader>
              <span>{date}</span>
              <b>{role} at {company}</b>
              <span>{location}</span>
            </ListHeader>
            <Description>
              {description}
            </Description>
          </li>
         ))}
      </List>
    </StyledExperience>
  )
}

export default Experience
