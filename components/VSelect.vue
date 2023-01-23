<template lang="pug">
    .select     
        p.select__name {{ title }}
        .select__title(@click="showOptions") 
            p {{ selected }}
            img(src="@/assets/images/svg/arrow.svg", alt="Arrow bottom")
        .select__options
            ul(v-for="option in options" :key="option.id" v-if="isVisible").select__options-list 
                li.select__options-item(@click="selectOption(option)") {{ option.name }}
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                default() { 
                    return []
                }
            },
            selected: { 
                type: String,
                default: ''
            }, 
            title: { 
                type: String,
                default: null
            }
        },
        data() {
            return {
                isVisible: false
            }
        },
        methods: {
            showOptions() {
                this.isVisible = !this.isVisible
            },
            selectOption(option){
                this.$emit('select', option)
                this.isVisible = false
            },
            hideSelect() { 
                this.isVisible = false
            }
        },
    }
</script>

<style lang="scss" scoped>
.select   { 
    cursor: pointer;
    position: relative;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    &__name { 
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        color: #121826;
    }
    &__title { 
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 84px;
        padding: 16px;
        background: #FFFFFF;
        border: 1px solid #D2D5DA;
        border-radius: 8px;

        @media screen and (min-width: 360px) and (max-width: 1024px){
            padding: 16px 4px;
            justify-content: space-around;
        }
        & > p { 
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #6C727F;

        }
    }
    &__name { 
        font-weight: 700;
            font-size: 14px;
            line-height: 15px;
            color: #121826;
            background-color: #FFFFFF;
            padding: 0px 8px;

            position: absolute;
            top: -7px;
            left: 12.15px;

            @media screen and (min-width: 360px) and (max-width: 1024px){
                font-size: 12px;
            }
    }
    &__options {
        position: absolute;
        width: 100%;
        overflow-y: scroll;
        max-height: 100px;

        &-list { 
            display: flex;
            justify-content: center;
            
        }
        &-item { 
            border: 1px solid #6C727F;
            border-top: none;
            width: 80%;
            background-color: #FFFFFF;   
            transition: all 0.3s;

            &:hover { 
                background-color: #e5e5e5;   
                transition: all 0.3s;

            }
        }
    }

}
</style>