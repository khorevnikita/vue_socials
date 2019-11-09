<template>
    <div>
        Wait...
    </div>
</template>

<script>
    export default {
        name: "VkResponse",
        data() {
            return {}
        },
        created() {

            axios.post("http://socials.local/api/socials/set", {
                type: this.$route.query.state,
                code: this.$route.query.code
            }).then(r => {
                this.get_token(r.data.token_url);
            })
        },
        methods: {
            get_token(url) {
                axios.get(url).then(r => {
                   console.log(r);
                });
            }
        }
    }
</script>

<style scoped>

</style>
