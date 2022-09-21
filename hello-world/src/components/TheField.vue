<template>
<div>
    <h2>next file</h2>
    <input type="text" v-model="messege">
    <p> ответ с инпута: {{messege}}</p>
    </div>
</template>


<script>

export default {
   data () {
    return {
        messege: ''
    }
   }
}
</script>

