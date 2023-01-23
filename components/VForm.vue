<template lang="pug">
    .card
        validation-provider(rules="min:19" v-slot="{ errors }").card__validator
            p Card number
            input(v-model="value" v-mask="'#### #### #### ####'" type="text" placeholder='•••• •••• •••• ••••')
            span.spans {{ errors[0] }}
        .card__selects  
            VSelect(:options="months" @select="selectOptionMonth" :selected="selected" :title="titleMonth")
            VSelect(:options="years" @select="selectOptionYear" :selected="selected" :title="titleYear")
            validation-provider(rules="min:3" v-slot="{ errors }").card__validator
                p CVC
                input(v-model="value" type="email")
                span.spans {{ errors[0] }}
</template>

<script>
import VSelect from "./VSelect.vue";
import { ValidationProvider, extend } from 'vee-validate';
import { required, min, email } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});
extend('min', {
  ...min,
  message: 'min'
});
    export default {
        data() {
            return {
                months: [
                    {name: "01", id: 1 },
                    {name: "02", id: 2 },
                    {name: "03", id: 3 },
                    {name: "04", id: 4 },
                    {name: "05", id: 5 },
                    {name: "06", id: 6 },
                    {name: "07", id: 7 },
                    {name: "08", id: 8 },
                    {name: "09", id: 9 },
                    {name: "10", id: 10 },
                    {name: "11", id: 11 },
                    {name: "12", id: 12 },
                ],
                years: [
                    {name:"2023", id:1},
                    {name:"2024", id:2},
                    {name:"2025", id:3},
                    {name:"2026", id:4},
                    {name:"2027", id:5},
                    {name:"2028", id:6},
                ],
                selected: 'Select',
                titleYear: 'Year',
                titleMonth: 'Month',
            }
        },
        components: {
            ValidationProvider,VSelect
        },
        methods: {
            selectOptionMonth(option) {
                this.selected = option.name
            },
            selectOptionYear(option) {
                this.selected = option.name
            },
        },
        
    }
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 400px;
    height: 552px;
    background: #ffffff;
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 24px 16px 16px;

    &__validator {
        position: relative;
    }
}

.spans { 
    position: absolute;
    top: 100%;
    left: 0px;
    color: red;
}
</style>