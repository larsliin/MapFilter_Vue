<template>
    <div class="inputfield">
        <label class="inputfield__label">{{ label }}</label>
        <input type="text" />
    </div>
</template>

<script>
export default {
    name: 'AppFieldTextInput',
    props: {
        label: String,
    },
};
</script>

<style scoped lang="scss">
    .inputfield {
        margin-top: 10px;
    }
    .inputfield__label {
        margin-bottom: 0;
    }
</style>
