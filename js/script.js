const { createApp } = Vue;

const dt = luxon.DateTime;

console.log(
  dt.now().setLocale("it").toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS)
);

const now = dt
  .now()
  .setLocale("it")
  .toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);

createApp({
  data() {
    return {
      newTodo: "",
      tasks: [
        { text: "Fare i compiti", done: false },
        { text: "Fare la spesa", done: true },
        { text: "Fare il bucato", done: false },
      ],
      errorVisible: false,
    };
  },
  methods: {
    deleteTodo(clickedIndex) {
      console.log("delete", this.tasks);
      this.tasks.splice(clickedIndex, 1);
    },
    addTodo() {
      const todoTime = dt
        .now()
        .setLocale("it")
        .toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
      console.log("add", todoTime);
      this.errorVisible = false;
      if (this.newTodo !== "") {
        this.tasks.unshift({
          text: this.newTodo,
          done: false,
        });
        this.newTodo = "";
      } else {
        this.errorVisible = true;
      }
    },
    toggleDone(clickedIndex) {
      console.log("toggle", this.tasks);
      this.tasks[clickedIndex].done = !this.tasks[clickedIndex].done;
    },
  },
}).mount("#app");
