export const teams = {
  1: {
    id: 1,
    name: 'Some Team',
    description: 'Team Description',
    profileImage: '',
    members: ['Zac Conner', 'Jesse Deoms'],
    boards: [1, 2, 3]
  },
  2: {
    id: 2,
    name: 'Another Team',
    description: 'Team Description',
    profileImage: '',
    members: ['Zac Conner', 'Reid Braswell'],
    boards: [4]
  },
};

export const boards = {
  1: {
    id: 1,
    name: 'Web Solutions Goals',
    description: 'Cool goals',
    lists: [1, 2, 3]
  },
  2: {
    id: 2,
    name: 'Dashboard',
    description: 'Features and Stories',
    lists: [4]
  },
  3: {
    id: 3,
    name: 'Tech Challenges',
    description: 'New and existing challenges',
    lists: [5]
  },
  4: {
    id: 4,
    name: 'Certifications',
    description: 'New certs to get',
    lists: [6]
  },
};

export const lists = {
  1: {
    id: 1,
    name: 'Backlog',
    tasks: [1,2]
  },
  2: {
    id: 2,
    name: 'Doing',
    tasks: [3]
  },
  3: {
    id: 3,
    name: 'Done',
    tasks: [4]
  },
  4: {
    id: 4,
    name: 'Backlog',
    tasks: [1,2,3]
  }
};

export const tasks = {
  1: {
    id: 1,
    name: 'Vue Tech Challenge',
    description: 'Release a Vue tech challenge',
    asignee: 'Zac Conner',
    created: '',
    due: '',
    comments: ''
  },
  3: {
    id: 3,
    name: 'Win some work',
    description: 'Get a new web project',
    asignee: 'Reid Braswell',
    created: '',
    due: '',
    comments: ''
  },
  2: {
    id: 2,
    name: 'Quarterly Meetup',
    description: 'Host a quarterly meetup',
    asignee: 'Reid Braswell',
    created: '',
    due: '',
    comments: ''
  },
  4: {
    id: 4,
    name: 'Create a CLI',
    description: 'Create a CLI for Web Solutions that we can use to set up our project repos.',
    asignee: '',
    created: '',
    due: '',
    comments: ''
  },
}