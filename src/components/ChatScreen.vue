<template>
  <div class="container">
    <div class="header">
    	<h1 class="header-text">THE CHAT BOX</h1>
    </div>

    <div class="chat-log-container">
      <div class="chat-log-box">
        <p v-html="chatBoxTemplate"></p>
      </div>
    </div>

    <div class="users-container">
      <div class="users-box">
        <p class="users-header">USERS</p>
        <br>
        <p class="user-names" v-for="user in users"><strong> {{ user }} </strong></p>
      </div>
    </div>

    <div class="input-container">
      <form class="input-form">
        <input type="text" class="chat-input-box" placeholder="Say Something!" v-model="chatMessage">
        <button class="send-button" v-on:click="getMessage">SEND</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChatScreen",
    data() {
      return {
        users: [],
        chatMessage: "",
        messagesSoFar: [],
        chatBoxTemplate: "",
        userBoxTemplate: "",
        getMessage: (e) => {
          e.preventDefault();
          this.messagesSoFar.push(this.chatMessage);
          this.chatMessage = "";
          this.updateChat();
        },
        updateChat: () => {
          let lastMessage = this.messagesSoFar[this.messagesSoFar.length-1]
          this.chatBoxTemplate += "<p>" + lastMessage + "<br></p>";
          // this.scrollToEnd();
        },
        getUsers: () => {
          let allUsers = require("../assets/allUsers.json");
          for (let user of Object.keys(allUsers)) {
            if (allUsers[user].isActive) {
               this.users.push(allUsers[user].name);
            }
          }
        },

        // CHATBOX DOES NOT SCROLL AUTOMATICALLY
        // scrollToEnd: () => {
        //   console.log(this.$el);
        //   this.$el.scrollTop(chatLogBox.scrollHeight)
        // }
      }
    },
    created: function() {
      this.getUsers();
    }
  }
</script>

<style scoped>
.user-names {
  padding-left: 1em;
}

</style>
