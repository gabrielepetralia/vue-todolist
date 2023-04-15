const categories = [
  {
    icon : "fa-globe",
    name : "Generale",
    numTasks : 0,
  },
  {
    icon : "fa-house",
    name : "Casa",
    numTasks : 0,
  },
  {
    icon : "fa-briefcase",
    name : "Lavoro",
    numTasks : 0,
  },
  {
    icon : "fa-book",
    name : "Studio",
    numTasks : 0,
  },
  {
    icon : "fa-cart-shopping",
    name : "Spesa",
    numTasks : 0,
  },
  {
    icon : "fa-pills",
    name : "Salute",
    numTasks : 0,
  },
];

const tasks = [
  {
    text : "Comprare sciroppo",
    done : false,
    category : "Salute",
    priority : 1, /*da 1 a 3 (rosso,giallo,verde)*/
  },
  {
    text : "Lavare pavimento",
    done : false,
    category : "Casa",
    priority : 1,
  },
  {
    text : "Riscrivere appunti",
    done : false,
    category : "Studio",
    priority : 1,
  },
  {
    text : "Prendere antistaminico",
    done : false,
    category : "Salute",
    priority : 1,
  },
  {
    text : "Mandare mail",
    done : false,
    category : "Lavoro",
    priority : 1,
  },
  {
    text : "Comprare pasta",
    done : false,
    category : "Spesa",
    priority : 1,
  },
  {
    text : "Guardare videolezione",
    done : false,
    category : "Studio",
    priority : 1,
  },
  {
    text : "Comprare cioccolato",
    done : false,
    category : "Spesa",
    priority : 1,
  },
  {
    text : "Sistemare cucina",
    done : false,
    category : "Casa",
    priority : 1,
  },
  {
    text : "Comprare carne",
    done : false,
    category : "Spesa",
    priority : 1,
  }
]

export {categories,tasks}