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
      badgeColor : "",
      badgeIcon : "",
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

    writeErrorMsg(msg) {
      this.errorMsg = msg;
      setTimeout(() => {
        this.errorMsg = "";
      },2000)
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

    matchIndex(index) {
      this.tasks.forEach( (task,i) => {
        if(this.tasksFiltered[index].text === task.text) {
          console.log(task.text);
          console.log(i);
          this.deletedIndex = i;
        }
      })
    },

    prioritySort() {
      this.tasks.sort((a,b) => a.priority - b.priority);
    },

    setBadgeColor(index) {
      switch (this.tasksFiltered[index].priority) {
        case 1:
          this.badgeColor = "gp-badge-red";
          break;
        case 2:
          this.badgeColor = "gp-badge-yellow";
          break;  
        default:
          this.badgeColor = "gp-badge-green";
          break;
      }

      return this.badgeColor;
    },

    setBadgeIcon (index) {
      switch (this.tasksFiltered[index].category) {
        case this.categories[1].name :
          this.badgeIcon = this.categories[1].icon;
          break;
        case this.categories[2].name:
          this.badgeIcon = this.categories[2].icon;
          break;  
        case this.categories[3].name:
          this.badgeIcon = this.categories[3].icon;
          break;
        case this.categories[4].name:
          this.badgeIcon = this.categories[4].icon;
          break;
        case this.categories[5].name:
          this.badgeIcon = this.categories[5].icon;
          break;    
        case this.categories[6].name:
          this.badgeIcon = this.categories[6].icon;
          break;
        case this.categories[7].name:
          this.badgeIcon = this.categories[7].icon;
          break;    
      }

      return this.badgeIcon;
    }
  },

  mounted(){
    this.prioritySort();
    this.categoryFilter();
    this.tasksCounter();
  }
}).mount("#app")