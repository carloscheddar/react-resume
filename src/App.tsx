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
  "Experience with video conferencing, websockets and data streaming",
  "Experience with Elasticsearch and OpenSearch data insertion and querying",
  "Experience with caching implementations for API responses and data calculations using Redis",
  "Advanced experience with CSS, HTML, DOM manipulation and responsive Web Development",
  "Devops experience using Continuous Integration and Delivery in platforms such as AWS and Heroku",
  "Experience with React fetching and data libraries such as Redux, React Context, and React Query",
  "Proficient programmer in Ruby, Javascript, Typescript, and SQL",
]

const experiences: ExperienceType[] = [
  {
    date: "2023 - Present",
    company: "Campfire",
    location: "Utah, US. Remote",
    role: "Software Architect",
    description: "Led an engineering team, orchestrating both frontend and backend efforts to elevate a React application and Rails backend. Spearheaded the integration of Daily.js and Rails websockets, transforming it into a dynamic video platform. Refactored the frontend to reduce data calls, improve caching and reduce rendering cycles. Rearchitected the scheduling system, streamlining the process to prevent loss of event invitations."
  },
  {
    date: "2021 - 2023",
    company: "Web3 Contracting",
    location: "Remote",
    role: "Software Architect",
    description: "Led the full-stack development of Web3 technologies for exchanges and NFT marketplaces. Successfully deployed multiple Single Page Applications (SPA) in React and Typescript, featuring seamless integration with MetaMask across multiple chains. Pioneered the development of an NFT indexer, leveraging blockchain events, IPFS, and Elasticsearch for advanced attribute filtering and ranking. Engineered a proxy server in Express.js to optimize SEO by providing metadata information prior to loading SPAs on platforms such as Google, Twitter, and Discord."
  },
  {
    date: "2017 - 2021",
    company: "Perceptyx (formerly Waggl)",
    location: "Sausalito, California. Remote",
    role: "Tech Lead",
    description: "Guided, trained, and mentored distributed development teams through planning, feature releases, and maintenance updates. Introduced effective testing flows using RSpec, Jest, and Cypress to enhance the creation and maintenance of test suites. Successfully managed the testing and deployment of Ruby on Rails upgrades, optimizing from v3 to v5. Implemented a streamlined React.js development workflow, utilizing Material-UI and Styled Components. Adapted a legacy Backbone.js app to seamlessly integrate React.js, enhancing development efficiency."
  },
  {
    date: "2015 - 2017",
    company: "CometaWorks",
    location: "San Juan, Puerto Rico. Remote",
    role: "Senior Software Engineer",
    description: "Provided leadership in the development, maintenance, and deployment of Ember.js WebApps and Ruby on Rails RESTful APIs. Led teams through the creation of mobile versions for desktop websites and successfully converted a Balanced Payments Implementation to utilize Stripe Connect. Engineered a commissions software for an accounting department, optimizing CSV uploads for data input into a PostgreSQL DB, resulting in efficient calculations and user-permission-based displays."
  },
  {
    date: "2014",
    company: "Codelitt",
    location: "Miami, Florida. Remote",
    role: "FullStack Web Developer",
    description: "Contributed to the development of agile websites for product validation and worked on payment platforms facilitating direct deposits (ACH) in both USD and Bitcoin. This platform was later acquired by ZenPayroll (now Gusto)."
  }
];

const technicalBullets = [
  "Implemented PostgreSQL database replication using Makara and PgBouncer",
  "Implemented video confecencing infrastructure using Daily.js, ActionCable and ReactQuery",
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
