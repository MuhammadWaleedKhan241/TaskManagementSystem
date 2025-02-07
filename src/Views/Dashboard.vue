<template>
<div class="container"> 

    <h1>task management system</h1>
    <button  >Add Task</button>
    <ul>
        <li v-for="task in tasks" :key="task">
            {{task}}
        </li>
    </ul>

</div>
</template>


<script>
export default{
    data(){
        return{
            tasks:['Ali','Ahmad',]
        }
    }
}
</script>


<style scoped>



</style>