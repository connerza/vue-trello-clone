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
    tasks: [1,2,3]
  },
  2: {
    id: 2,
    name: 'Doing',
    tasks: [4,5]
  },
  3: {
    id: 3,
    name: 'Done',
    tasks: [6]
  },
  4: {
    id: 4,
    name: 'Backlog',
    tasks: [1,2,3]
  }
};