# vue-trello-clone

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Data Models
```
team = {
  id: "",
  name: "",
  description: "",
  image: "",
  members: [],
  boards: []
};

board = {
  id: "",
  teamId: "",
  lists: []
}

list = {
  id: "",
  boardId: "",
  tasks: []
}

task = {
  id: "",
  listId: "",
  title: "",
  description: "",
  asignee: "",
  created: date,
  due: date,
  comments: ""
}
```
