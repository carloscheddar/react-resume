import React from 'react';
import styled from 'styled-components'
import Experience, { ExperienceType } from './Experience';
import Header from './Header';
import Bullets from './Bullets';
import Sidebar from './Sidebar'

const firstName = "Carlos"
const lastName = "FelicianoBarba"
const title = "Software Engineer"

const profileBullets = [
  "Experience with RESTful APIs and Database design using TDD",
  "Experience with Elasticsearch and OpenSearch data insertion and querying",
  "Advanced experience with CSS, HTML, DOM manipulation and responsive Web Development",
  "Experience with caching implementations for API responses and data calculations using Redis",
  "Devops experience using Continuous Integration and Delivery in platforms such as AWS and Heroku",
  "Experience with React fetching and data libraries such as Redux, React Context, and React Query",
  "Proficient programmer in Ruby, Javascript, Typescript, and SQL",
]

const experiences: ExperienceType[] = [
  {
    date: "2021 - Present",
    company: "Web3 Contracting",
    location: "Remote",
    role: "Software Architect",
    description: "Led full-stack development of Web3 technologies for exchanges and NFT marketplaces. Deployed several SPA in React and Typescript with multi-chain MetaMask integration. Developed an NFT indexer that parsed blockchain events, read from IPFS and stored data in Elasticsearch to enable attribute filtering and ranking per address. Developed a proxy server in Express.js to respond with metadata information before loading a SPA for SEO readers such as Google, Twitter and Discord."
  },
  {
    date: "2017 - 2021",
    company: "Waggl",
    location: "Sausalito, California. Remote",
    role: "Tech Lead",
    description: "Led, trained and mentored multiple distributed development teams through planning, release of features, and maintenance updates. Developed test flows to improve the creation, maintenance and understanding of test suites in RSpec, Jest and Cypress. Managed, tested and deployed several Ruby on Rails upgrades from v3 to v5. Created a React.js development workflow to improve the development time and component creation using Material-UI and Styled Components. Adapted a legacy Backbone.js app to be able to render React.js without having to refactor the core app."
  },
  {
    date: "2015 - 2017",
    company: "CometaWorks",
    location: "San Juan, Puerto Rico. Remote",
    role: "Senior Software Engineer",
    description: "Trained and led various teams in development, maintenance and deployment of several Ember.js WebApps and Ruby on Rails RESTful APIs. Developed mobile versions for desktop websites before the SEO cutoff date. Converted a Balanced Payments Implementation to use Stripe Connect and provided maintenance afterwards. Engineered a commissions software for an accounting department where CSV uploads would be used to input data into a PostgreSQL DB in order to run calculations and display them based on user permissions."
  },
  {
    date: "2014",
    company: "Codelitt",
    location: "Miami, Florida. Remote",
    role: "FullStack Web Developer",
    description: "Developed multiple agile websites for product validation as well as worked on payment platforms that distributed direct deposits(ACH) in USD and Bitcoin."
  }
]

const technicalBullets = [
  "Implemented PostgreSQL database replication using Makara and PgBouncer",
  "Adapted a legacy Backbone.js app to render React.js components with state management handled by Redux",
  "Migrated Heroku deployments into a Docker based Continuous Integration and Delivery flow using Github, TravisCI and AWS Elastic Beanstalk",
  "Engineered an atomic design component flow by discussing design patterns and mutations with the design teams"
]

const sidebarSections = [
  {
    title: "Contact",
    bullets: [
      "carlos@felicianobarba.com",
      "github.com/carloscheddar",
      "cel: +1 (415) 729-3359"
    ],
  },
  {
    title: "Location",
    bullets: [
      "United States",
    ],
  },
  {
    title: "Languages",
    bullets: [
      "English",
      "Spanish",
    ],
  }
]

// The first column controls the width of the sidebar
const Content = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  margin-left: -20px;
`

const App = () => {
  return (
    <div className="App">
      <Header {...{firstName, lastName, title}} />
      <Content>
        <Sidebar sections={sidebarSections} />
        <div>
          <Bullets sectionName="Profile" bullets={profileBullets} />
          <Experience {...{experiences}} />
          <Bullets sectionName="Technical Experience" bullets={technicalBullets} />
        </div>
      </Content>
    </div>
  );
}

export default App;
