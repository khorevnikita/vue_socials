<template>
    <div>
        {{$store.api_token}}
        {{$store.status}}
        <ul>
            <li v-for="social in socials">
                <a :href="social.auth_url">{{social.type}}</a>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "Socials",
        data() {
            return {
                socials: [],
                api_token: ""
            }
        },
        created() {
            console.log(this.$store);
            axios.get("http://socials.local/api/socials").then(r => {
                this.socials = r.data.socials
            })
        },
    }
</script>

<style scoped>

</style>
