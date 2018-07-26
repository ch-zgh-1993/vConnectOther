<template>
    <code>{{ msg }}</code>
</template>

<script>
    export default {
        name: 'start',
        data: function(){
            return {
                msg: 'this is a start'
            }
        }
    }
</script>

<style>
    code {
        color: orange;
    }
</style>
