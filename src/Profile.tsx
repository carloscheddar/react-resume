import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader'

const StyledProfile = styled.div`
  font-weight: 100;
`

const List = styled.ul`
  margin-top: 0;
`

interface ProfileProps {
  profiles: string[]
}

const Profile = ({ profiles }: ProfileProps) => {
  return (
    <StyledProfile>
      <SectionHeader>Profile</SectionHeader>
      <List>
        {profiles.map((row) => (<li key={row}>{row}</li>))}
      </List>
    </StyledProfile>
  )
}

export default Profile
