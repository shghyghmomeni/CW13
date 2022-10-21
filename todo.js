let taskArr = [
  {
    day: "shanbe",
    task: [],
  },

  {
    day: "yekshanbe",
    task: [],
  },
  {
    day: "doshanbe",
    task: [],
  },
  {
    day: "seshanbe",
    task: [],
  },
  {
    day: "charshanbe",
    task: [],
  },
  {
    day: "panjshanbe",
    task: [],
  },
  {
    day: "jome",
    task: [],
  },
];

// localStorage.setItem("taskArr", JSON.stringify(taskArr));
const storageTaskInfo = JSON.parse(localStorage.getItem("taskArr")) || taskArr;

const taskTitle = document.getElementById("taskTitle");
const taskTime = document.getElementById("taskTime");
const addTaskBtn = document.getElementById("addTaskBtn");
const todo = document.querySelector(".to-do");
const weekDays = document.querySelectorAll(".weekDays");
//[0,1,2,3,4,5,6]
let weekDayName = "shanbe";
showTask(storageTaskInfo[0].task);

addTaskBtn.addEventListener("click", addTask);
// checkBox.addEventListener("click", taskDone);

//Functions
function currentDayTasks(event) {
  weekDayName = event.target.dataset.day;
  let findTask = storageTaskInfo.find((item) => {
    return item.day == weekDayName;
  });

  weekDays.forEach((item) => {
    item.classList.remove("activeBtn");
  });
  if (event.target.classList.contains("weekDays")) {
    event.target.classList.add("activeBtn");
  } else {
    event.target.parentNode.classList.add("activeBtn");
  }

  showTask(findTask.task);
}
weekDays.forEach((weekday) => {
  weekday.addEventListener("click", currentDayTasks);
});

function showTask(taskItems) {
  todo.innerHTML = "";
  taskItems.forEach((task) => {
    creatTask(task.taskName, task.taskTime);
  });
}

function creatTask(taskName, taskTime) {
  let todo_list_div = document.createElement("div");
  todo_list_div.classList.add("to-do-list");
  todo.append(todo_list_div);

  let todo_item_rigth_div = document.createElement("div");
  todo_item_rigth_div.classList.add("to-do-item-rigth");
  todo_list_div.append(todo_item_rigth_div);

  let todo_item_rigth_svg = document.createElement("div");
  todo_item_rigth_svg.classList.add("to-do-item-rigth-svg");
  todo_item_rigth_div.append(todo_item_rigth_svg);
  todo_item_rigth_svg.onclick = taskDone;

  todo_item_rigth_svg.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="checkbox" viewBox="0 0 16 16">
                                <path
                                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                <path
                                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>`;

  let todo_item_rigth_h3 = document.createElement("h3");
  todo_item_rigth_div.append(todo_item_rigth_h3);
  todo_item_rigth_h3.innerText = taskName;

  let todo_item_left_div = document.createElement("div");
  todo_item_left_div.classList.add("to-do-item-left");
  todo_list_div.append(todo_item_left_div);

  let todo_item_left_timeinput = document.createElement("div");
  todo_item_left_timeinput.classList.add("taskTimeDiv");
  todo_item_left_timeinput.innerText = taskTime;
  todo_item_left_div.append(todo_item_left_timeinput);

  todo_item_left_div.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="trash" viewBox="0 0 16 16">
                                        <path
                                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="edit" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>`;
}

function addTask() {
  const index = storageTaskInfo.findIndex((dayKey) => {
    return dayKey.day == weekDayName;
  });
  let newTask = {
    id: Date.now(),
    taskName: taskTitle.value,
    taskTime: taskTime.value,
    isDone: false,
  };
  console.log(storageTaskInfo);
  console.log(index);
  console.log(storageTaskInfo[index]);
  console.log(weekDayName);

  storageTaskInfo[index].task.push(newTask);
  localStorage.setItem("taskArr", JSON.stringify(storageTaskInfo));
  showTask(storageTaskInfo[index].task);
}

function taskDone() {}
