<template lang="html">
  <div class="username-input-modal-box">
      <h1 class="modal-box-background-text">THE CHAT BOX</h1>
      <form class="username-input-form">
        <input class="username-input-box" type="text" placeholder="who are you?" v-model="usernameLogged"><br>
        <button class="username-submit-button" v-on:click="direct">enter a username</button>
      </form>
  </div>
</template>

<script>
export default {
  name: "LoginScreen",
  data() {
    return {
      usernameLogged: "",
      direct: () => {
        this.$router.push({name: 'ChatScreen'});
      },
      // THIS IS ALL WRONG BECAUSE APPARENTLY YOU CANNOT WRITE TO A JSON FILE
      // FROM BROWSER == DATA NEEDS TO BE STORED DIFFERENTLY
      // logUser: () => {
      //   console.log("logUser activated")
      //   let allUsers = require("./allUsers.json");
      //   let userList = [];
      //   for(let user in Object.keys(allUsers)) {
      //     userList.push(allUsers[user])
      //   }
      //   let newUser = {"name": this.usernameLogged, "isActive": true}
      //   userList.push(newUser)
      //   let newJson = "{ \n"
      //   let userNo = 0;
      //   for (let user of userList) {
      //     userNo += 1;
      //     newJson += `user${ userNo }` + JSON.stringify(user) + ", \n"
      //   }
      //   newJson += "}"
      //
      //   allUsers.writeFile("./allUsers.json", newJson, function(err) {
      //     if(err) {
      //       console.error(err);
      //       return
      //     };
      //     console.log("File rewritten!")
      //   })
      // },
      // directAndLog: () => {
      //   this.direct();
      //   this.logUser();
      // }
    };
  },
}
</script>

<style scoped lang="css">
  div.username-input-modal-box {
    position: absolute;
    background-color: #935347;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }

  form.username-input-form {
    height: 20vw;
    width: 50vh;
    margin: 0 auto;
    text-align: center;
  }

  input.username-input-box {
    padding: 1%;
    background-color: #FFE180;
    height: 8vh;
    font-size: 2em;
    width: 100%;
    text-align: center;
  }

  input.username-input-box::placeholder {
    font-size: 1em;
  }

  button.username-submit-button {
    font-size: 2em;
    background-color: #9ad3de;
    margin-top: 1%;
    padding: 1%;
    color: #284f5f;
    width: 100%;
  }

  h1.modal-box-background-text {
    color: #252839;
    padding: 2%;
    font-size: 23vw;
  }

</style>
