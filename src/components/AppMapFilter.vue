<template>
    <h2>Filter</h2>
    <div>
        <app-field-text-input label="Field 1" />
        <app-field-text-input label="Field 2" />
        <app-field-text-input label="Field 3" />
        <app-field-text-input label="Field 4" />
        <app-field-radio-group
            :label="'Radio buttons'"
            :groupid="'radiobutton_group'"
            :radiobuttons="[{ label: 'Button 1' }, { label: 'Button 2' }, { label: 'Button 3' }]"
        />
    </div>
</template>

<script>
import AppFieldTextInput from '@/components/AppFieldTextInput.vue';
import AppFieldRadioGroup from '@/components/AppFieldRadioGroup.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'AppMapFilter',
    components: {
        AppFieldTextInput,
        AppFieldRadioGroup,
    },
    props: {
        msg: String,
    },
    computed: mapGetters(['propertiesList']),
    methods: {
    },
};
</script>

<style scoped lang="scss">
</style>
