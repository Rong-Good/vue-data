<template>
    <div>
        登陆
        <button @click="get">获取tokk值</button>
    </div>
</template>

<script>
export default {
methods: {
       get(){
           
           localStorage.setItem("c",123)
           console.log(this)
           this.$router.push({
               path:'/home/yisi'
           })
       }
    },
}
</script>

<style>

</style>