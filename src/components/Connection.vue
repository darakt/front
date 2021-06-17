<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
import store from '../store';

    export default {
        name: 'Login',
        data() {
            return {
                token: '',
                input: {
                    username: "first",
                    password: "azerty"
                },
                return: {
                  isConnected: false,
                  message: '',
                }
            }
        },
        methods: {
            async login() {
                if(this.input.username != "" && this.input.password != "") {
                  store.dispatch('getToken',{
                    username: this.input.username,
                    password: this.input.password,
                  });
                } else {
                  this.message = 'Missing Username or password';
                }
            }
        }
    }
</script>

<style scoped>
    #login {
      width: 500px;
      border: 1px solid #CCCCCC;
      background-color: #FFFFFF;
      margin: auto;
      margin-top: 200px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
    }

    #login > input, h1, button {
      margin: 5px;
    }

    #login > input, button {
      padding: 2px;
      font-size: 1rem;
    }

    #login > h1 {
      font-size: 1.5rem;
    }
</style>