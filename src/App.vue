
<script>
export default {
  name : 'App',
  methods: {
    priorityStyle(priority) {
      switch (priority) {
        case 'high':
          return { backgroundColor: 'red' , borderRadius: '8px'}; // Red color for high priority
        case 'medium':
          return { backgroundColor: 'orange' , borderRadius: '8px'}; // Yellow color for medium priority
        case 'low':
          return { backgroundColor: 'green' , borderRadius: '8px'}; // Green color for low priority
        default:
          return {}; // Default style
      }
    }
  }
}
</script>

<template lang="">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <section class="vh-100 gradient-custom-2">
  <div class="container py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-10">
        <div class="card mask-custom">
          <div class="card-body p-4 text-white">
            <div class="text-center pt-3 pb-2 list-title d-flex justify-content-center align-items-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                alt="Check" width="60">
              <h2 class="my-4">To-Do List</h2>
            </div>
            <form @submit.prevent="$store.commit('addTodo')" class="d-flex justify-content-center align-items-center mb-4 form-margin">
              <div data-mdb-input-init class="form-outline">
                <input v-model="$store.state.newTodo" required type="text" id="form3" class="form-control" placeholder="Enter to-do" />
                <input v-model="$store.state.newMember" required type="text" id="form3" class="form-control" placeholder="Enter member" />
                <h4 style="color: white;">Priority</h4>
                <select class="form-select form-select-lg" name="priority" v-model="$store.state.newPriority">
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="high">high</option>
                </select>
              </div>
              <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg ms-2">Add</button>
              <button type="button" class="btn btn-primary btn-lg ms-2 hide-btn" @click="$store.state.hideCompleted = !$store.state.hideCompleted">
                {{$store.state.hideCompleted?"show all":"hide completed"}}
              </button>
            </form>
            <table class="table text-white mb-0 gradient-custom-3">
              <thead>
                <tr>
                  <th scope="col">Team Member</th>
                  <th scope="col">Task</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="fw-normal" v-for="todo in $store.getters.filtered_list" :key="todo.id">
                  <td class="border-0 algin-middle">
                      <tr>
                        <td style="text-align: left;"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1" style="width: 45px; height: auto; vertical-algin: middle"></td>
                        <td class="td-text" style="text-align: right;"><h3 class="mb-0"><span class="ms-2">{{todo.member}}</span></h3></td>
                      </tr>
                  </td>
                  <td class="border-0 align-middle td-text"><h3 class="mb-0"><span :class="{done: todo.done}">{{todo.text}}</span></h3></td>
                  <td class="border-0 align-middle td-text">
                    <h3 class="mb-0">
                      <span :style="priorityStyle(todo.priority)">{{ todo.priority }}</span>
                    </h3>
                  </td>
                  <td class="border-0 align-middle td-text">
                    <div class="wrapper">
                        <input class="checkbox" type="checkbox" v-model="todo.done" >
                      <div class="icon-container" @click="$store.commit('removeTodo', todo)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class='icon' fill="red"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>


<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.gradient-custom-2 {
  background: #000000;

  background: linear-gradient(
    to right,
    rgb(75, 55, 133),
    rgb(13, 57, 101)
  );


  height: 100vh; /* Ensure the gradient fills the viewport height */
  overflow-y: auto;
}

.mask-custom {
  background: rgb(31, 31, 30);
  border-radius: 2em;
  backdrop-filter: blur(25px);
  border: 2px solid rgba(255, 255, 255, 0.05);
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
}

.wrapper {
  margin-top: 14px;
  display: flex;
}

.checkbox {
  margin-right: 10px; 
}

.checkbox {
  margin-right: 10px;
  width: 25px; 
  height: 25px;
}

.icon {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}

.table {
  font-size: 18px;
  color:rgb(255, 255, 255)
}


.list-title {
  color: white
}

.form-select-lg {
  color: white;
  font-size: 1.5rem; /* Adjust the font size as needed */
  padding: 4px 5px; /* Adjust the padding as needed */
  background:#3a3838
}

.form-margin {
    margin: 0 20px; /* Adjust the margin as needed */
}

.btn {
  margin-top: 5px;
  margin-bottom: 10px;
}

.form-control {
  background:#3a3838 !important;
  color: white !important;
}

.badge {
  border-radius: 4px !important; /* Adjust the value as needed */
}

.hide-btn {
  margin-left: 15px;
}

.btn {
  margin-top: 10px !important;
  padding: 8px 17px !important;
  font-size: 14px !important;
}
</style>
