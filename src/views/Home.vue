<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <app-map-filter />
            </div>
            <div class="col-8">
                <app-map />
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import AppMapFilter from '@/components/AppMapFilter.vue';
import AppMap from '@/components/AppMap.vue';

export default {
    name: 'Home',
    components: {
        AppMapFilter,
        AppMap,
    },
};
</script>
<style lang="scss" scoped>
</style>
