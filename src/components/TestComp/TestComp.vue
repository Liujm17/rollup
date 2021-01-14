<template>
<div>
TestComp111111
{{testmsg}}
<p @click="add">add</p>
 </div>
</template>

<script>
 export default {
    name: 'TestComp',
    data(){
        return{
            count:1
        }
    },
    computed:{
      testmsg(){
        return this.count*2
      }
    },
    methods:{
      add(){
         this.count++
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>