<template>
    <div class="radiobtngroup">
        <label class="radiobtngroup__label">{{ label }}</label>
        <ul>
            <li v-for="(radiobutton, i) in radiobuttons" :key="i">
                <span>
                    <input
                        type="radio"
                        :id="toId(radiobutton.label)"
                        :name="groupid"
                        :value="radiobutton.label"
                    />
                    <label :for="toId(radiobutton.label)">{{ radiobutton.label }}</label>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AppFieldRadioGroup',
    props: {
        label: String,
        radiobuttons: Array,
        groupid: String,
    },
    methods: {
        toId(str) {
            return str.replace(/\s/g, '_');
        },
    },
};
</script>

<style scoped lang="scss">
    .radiobtngroup {
        margin-top: 10px;
    }
    .radiobtngroup__label {
        margin-bottom: 0;
        white-space: nowrap;
    }
    ul {
        list-style: none;
        padding-left: 0;
    }
    input[type=radio] {
        margin-right: 6px;
    }
    span {
        display: block;
        white-space: nowrap;
    }
</style>
