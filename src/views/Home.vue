<template>
  <div class="">
    <map-filter msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MapFilter from '@/components/MapFilter.vue';

export default {
    name: 'Home',
    components: {
        MapFilter,
    },
};
</script>
<style lang="scss" scoped>
</style>
