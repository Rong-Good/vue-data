<template>
    <div>

        主页 {{this.$store.state.home.text}}

       <router-link to="/home/yisi">跳转到隐私页面需要登陆</router-link>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jj:111,
            vv:222
        }
    },
    beforeCreate() {
       console.log(this.$data) 
    },
    created() {
               console.log(this.$data) 
        this.$data.cc=1222
        console.log(this.$options.data())

    },
}
</script>

<style>

</style>