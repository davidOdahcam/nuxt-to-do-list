export const state = () => {
  tasks: [
    {
      title: "Get milk",
      done: false
    },
    {
      title: "Get milk",
      done: true
    },
    {
      title: "Get milk",
      done: false
    },
    {
      title: "Get milk",
      done: true
    },
    {
      title: "Get milk",
      done: true
    },
    {
      title: "Get milk",
      done: false
    },
  ]
}

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ title: task, done: false }, ...state.tasks];
  },

  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },

  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  },
}
