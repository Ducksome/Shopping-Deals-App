<template>
    <div class="form">
        <form action="">
            <fieldset class="box">
                <h1 class="form-title">Sign Up</h1>
                <p class="form-description">Get Access to all the Best Deals on the Internet</p>
                <div class="form-group">
                    <label class="form-label" for="email">{{ emailLabel }}</label>
                    <input type="email" v-model="email" id="email" class="form-input" autocomplete="off">
                </div>
                <div class="form-group">
                    <label for="password" class="form-label">Password</label>
                    <input :value="password" v-model="password" :type="inputType" id="password" class="form-input" >
                    <span
                        class="toggle-password"
                        @click="toggleShowPassword">
                        {{ icon }}
                    </span>
                </div>
                <button>Sign Up</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPassword: false,
            focus: false,
            email: '',
            password: '',
            emailLabel: 'Email',
        }
    },
    methods: {
        toggleShowPassword() {
            this.showPassword = !this.showPassword
        },
        // async signupRequest() {
        //     firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        //         () => {
        //             alert('Success Oh')
        //         }
        //     )
        // }
    },
    computed: {
        icon() {
            return this.showPassword ? '🙈' : '👁️';
        },
        inputType() {
            return this.showPassword ? 'text' : 'password'
        }
    },
}
</script>

<style scoped>
.box {
    border: 4px solid #083a85;
    padding: 35px 50px;
}

.form {
    box-sizing: border-box;
    padding: 0 35%;
    font-family: 'Montserrat', sans-serif;
    margin-top: 75px;
}

.form-group {
    width: 100%;
    margin: 0 auto;
    position: relative;
    border-bottom: 2px dashed #083a85;
    margin: 4rem auto 1rem;
    transition: 500ms;
}

.form-input {
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 0.25rem 0;
    background: none;
    color: black;
    font-size: 1.2em;
    font-weight: bold;
    transition: border 500ms;
}

.form-input:invalid {
    color: red;
    border-bottom: 4px solid salmon;
}

.form-input:valid {
    color: rgb(28, 194, 130)
}

.form-group::after {
    content: "";
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background: rgb(28, 194, 130);
    transform: scaleX(0);
    transform-origin: 0%;
    opacity: 0;
    transition: all 500ms ease;
    top: 2px;
}

.form-group:focus-within {
    border-color: transparent;
}

.form-group:focus-within::after {
    transform: scaleX(1);
    opacity: 1;
}

.form-label {
    z-index: -1;
    position: absolute;
    transform: translateY(-2rem);
    transform-origin: 0%;
    transition: transform 400ms;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
}

 .form-group:focus-within .form-label {
    transform: scale(0.8) translateY(-2rem);
    opacity: 1;
  }

.form-label .text-entered {
    z-index: -1;
    position: absolute;
    transform: translateY(0rem) scale(0.8);
    transform-origin: 0%;
    transition: transform 400ms;
    font-family: 'Montserrat', sans-serif;
}

button {
  padding: 15px 25px;
  background-color: rgb(28, 194, 130);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #edf0f1;
  transition: all 0.3s ease 0s;
  margin-top: 25px;
}

button:hover {
    background-color: rgb(0, 130, 169);
}

.toggle-password {
    position: absolute;
    cursor: pointer;
    font-size: 1.2rem;
    right: 0.25rem;
    bottom: 0.5rem;
}
</style>