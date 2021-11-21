export const intro = {
  title: 'Technical portfolio',
  subtitle: 'A collection of both personal and co-created projects.'
}

// Project template
// {
//   name: 'Lorem ipsum 4',
//   description:
//     'Ut enim ad minim veniam, quis nostrud exercitatio ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   collaborators: [
//     { name: 'Lorem I', repo: 'link here' },
//     { name: 'Ipsum L', repo: 'link here' }
//   ],
//   images: ['ps'],
//   url: 'https://github.com'
// }

export const projects = [
  {
    name: 'LogLady',
    description:
      'From February to May 2020 I worked on this project during an internship course for school at a company called Kits. LogLady is an open source desktop application for reading log files. I mainly took part in the process of adapting the api and view to make the application work with larger log files without making the program slow down or using too much CPU. Other tasks consisted of bug fixes and other improvements in the view layer.',
    collaborators: [
      {
        name: 'Contributors',
        repourl: 'https://github.com/kits-ab/LogLady/graphs/contributors'
      }
    ],
    images: ['loglady1', 'loglady'],
    technologies: [
      'JavaScript',
      'React.js',
      'Node.js',
      'Electron.js',
      'Redux',
      'Travis CI',
      'Jest'
    ],
    url: 'https://github.com/kits-ab/LogLady'
  },
  {
    name: 'Poetry Slack',
    description:
      'This web applicaion was a school group project for the project and entreprenourship course at YRGO. It is using Slacks API and the applications own backend. Based on the content of the selected channel conversation it generates different kinds of poetry and the user can then choose to post it in the desired channel. I created the front and backend in the haiku feature, configured the backend and collaborated on the authorization solution.',
    collaborators: [
      { name: 'Satomi', repourl: 'https://github.com/satoskit' },
      { name: 'Mikel', repourl: 'https://github.com/wasse' }
    ],
    images: ['ps2', 'ps'],
    technologies: [
      'JavaScript',
      'React.js',
      'Java EE',
      'TomEE (Tomcat)',
      'REST',
      'Maven',
      'Swagger',
      'Postgresql',
      'Mobx',
      'Bulma',
      'Sass'
    ],
    url: 'https://github.com/wasse/slack-poem'
  },
  {
    name: 'habit_tracker',
    description:
      'This was the second group project for the server programming course at YRGO. Habit tracker is an API that creates, updates, reads and deletes users and the habits connected to the user. A user can create habits and activities connected to the habits. The assignments were meant for us to become further accustomed with the Spring Boot framework, database persistence with Hibernate, unit tests and logging.',
    collaborators: [
      { name: 'Johan', repourl: 'https://gitlab.com/JohanCederschiold' },
      { name: 'Jens', repourl: 'https://gitlab.com/JensKnutson' }
    ],
    images: ['hbt2', 'hbt'],
    technologies: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'Postgresql',
      'Maven',
      'Mockito',
      'JUnit',
      'Swagger'
    ],
    url: 'https://gitlab.com/JohanCederschiold/habit_tracker'
  },

  {
    name: 'coffeeshop-inventory-app',
    description:
      'This was our first group project for the server programming course at YRGO. The task consisted of creating a backend with Java EE running on a Wildfly web server. It had to have CRUD operations and persist the data with JPA or Hibernate. The presentation layer was voluntary. We cretated an inventory tool for an imaginary coffee shop where you can add, remove, search and update different kinds of coffee.',
    collaborators: [
      { name: 'Adam', repourl: 'https://gitlab.com/Hambe' },
      {
        name: 'Sebastian',
        repourl: 'https://github.com/blueberryFields'
      }
    ],
    images: ['cbt', 'cbt2'],
    technologies: [
      'Java EE',
      'JavaScript',
      'JBoss Wildfly',
      'JPA',
      'REST',
      'Vue.js',
      'CSS',
      'HTML',
      'Bulma',
      'Postgresql',
      'Docker',
      'Maven'
    ],
    url: 'https://github.com/MelindaSW/coffeeshop-inventory-app'
  },
  {
    name: 'poetry-generator-api',
    description:
      'This API is a personal side project. One endpoint returns a Haiku based on the request body’s text property. The syllable counting works pretty well with both english and swedish. Though the algorithm will probably be improved in the future. An acrostic poetry feature is in progress when writing this. Below are a couple of Haiku’s generated from the first pages of pride and prejudice.',
    collaborators: [],
    images: ['pg1', 'pg2'],
    technologies: ['Java EE', 'Spring Boot', 'REST', 'Swagger', 'JUnit'],
    url: 'https://github.com/MelindaSW/msw-poetry-generator-api'
  }
]
