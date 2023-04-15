const { createApp } = Vue;
import {categories,tasks} from "./db.js";

createApp({
  data() {
    return {
      logo  : "fa-solid fa-check-double",
      title : "ToDoList",
      categories,
      tasks,
      currCategory : 0,
      tasksFiltered : [],
      tasksFilteredCounter : [],
      errorMsg : "",
      test : true,
      deletedIndex : 0,
    }
  },

  methods : {
    categoryFilter() {
      if(this.categories[this.currCategory].name !== "Generale") {
        this.tasksFiltered = this.tasks.filter( task => task.category === this.categories[this.currCategory].name);
      }
      else {
        this.tasksFiltered = this.tasks;
      }
    },

    tasksCounter() {
      this.categories.forEach( (category,index) => {
        if(this.categories[index].name !== "Generale") {
          this.tasksFilteredCounter = this.tasks.filter( task => task.category === this.categories[index].name);

          category.numTasks = this.tasksFilteredCounter.length;
        }
        else {
          category.numTasks = this.tasks.length;
        }
      })
    },

    deleteTask(index) {
      if(this.tasksFiltered[index].done) {
        this.matchIndex(index);
        this.tasks.splice(this.deletedIndex,1);
        this.tasksCounter();
        this.categoryFilter();
        this.errorMsg = "";
      } else {
        this.writeErrorMsg("Attenzione! Non puoi eliminare una task senza averla fatta!");
      }
    },

    writeErrorMsg(msg) {
      this.errorMsg = msg;
      setTimeout(() => {
        this.errorMsg = "";
      },2000)
    },

    matchIndex(index) {
      this.tasks.forEach( (task,i) => {
        if(this.tasksFiltered[index].text === task.text) {
          console.log(task.text);
          console.log(i);
          this.deletedIndex = i;
        }
      })
    }
  },

  mounted(){
    this.categoryFilter();
    this.tasksCounter();
  }
}).mount("#app")