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
    }
  },

  methods : {
    test() {
      
    },

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
    }
  },

  mounted(){
    this.categoryFilter();
    this.tasksCounter();
  }
}).mount("#app")