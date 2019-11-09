<template>
    <div>
        <form>
            <div>
                <input type="text" v-model="name" placeholder="name">
            </div>
            <div>
                <input type="text" v-model="email" placeholder="email">
            </div>
            <div>
                <input type="text" v-model="password" placeholder="password">
            </div>
            <div>
                <button type="button" @click="submit">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                name: "",
                email: "",
                password: ""
            }
        },
        methods: {
            submit() {
                axios.post("http://socials.local/api/register", {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                }).then(r => {
                    store.api_token = r.data.api_token;
                })
            }
        }
    }
</script>

<style scoped>

</style>
