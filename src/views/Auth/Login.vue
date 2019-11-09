<template>
    <div>
        <form class="login" @submit.prevent="login">
            <h1>Sign in</h1>
            <label>User name</label>
            <input required v-model="email" type="text" placeholder="Snoopy"/>
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="Password"/>
            <hr/>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            login: function () {
                const { email, password } = this;
                this.$store.dispatch('AUTH_REQUEST', { email, password }).then(() => {
                    this.$router.push('/socials')
                })
            }
        }
    }
</script>

<style scoped>

</style>
