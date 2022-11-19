import React from 'react';
import styled from 'styled-components'
import Experience, { ExperienceType } from './Experience';
import Header from './Header';
import Profile from './Profile';

const firstName = "Carlos"
const lastName = "FelicianoBarba"
const title = "Software Engineer"

const profiles = [
  "Experience with Backend Web Development",
  "Proficient use of Git, Github, etc.",
  "Proficient programmer in Python"
]

const experiences: ExperienceType[] = [
  {
    date: "2017 - Present",
    company: "Waggl",
    location: "Sausalito, California. Remote",
    role: "Software Engineer",
    description: "Developed features and optimizations for the core product including major Ruby on Rails upgrades, adapatation of a Backbone.js app to React.js, SQL query improvements for faster page loads and implementation of new API using JSON:API spec."
  },
  {
    date: "2015 - 2017",
    company: "CometaWorks",
    location: "San Juan, Puerto Rico. Remote",
    role: "Senior Software Engineer",
    description: "Trained and led various teams in development, maintenance and deployment of several Ember.js WebApss and Ruby on Rails RESTful APIs."
  }
]

// The first column controls the width of the sidebar
const Content = styled.div`
  display: grid;
  grid-template-columns: 160px auto;
`

const App = () => {
  return (
    <div className="App">
      <Header {...{firstName, lastName, title}} />
      <Content>
        <div></div>
        <div>
          <Profile {...{profiles}} />
          <Experience {...{experiences}} />
        </div>
      </Content>
    </div>
  );
}

export default App;
