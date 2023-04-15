const { createApp } = Vue;
import {categories} from "./db.js";

createApp({
  data() {
    return {
      logo  : "fa-solid fa-check-double",
      title : "ToDoList",
      categories,
    }
  }

}).mount("#app")