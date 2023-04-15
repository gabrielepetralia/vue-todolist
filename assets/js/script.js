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
    }
  },

  methods : {
    test() {
      
    },

    categoryFilter() {
      if(this.categories[this.currCategory].name !== "Generale")
      {
        this.tasksFiltered = tasks.filter( task => task.category === this.categories[this.currCategory].name);
      }
      else {
        this.tasksFiltered = this.tasks;
      }
    }
  },

  mounted(){
    this.categoryFilter();
  }
}).mount("#app")