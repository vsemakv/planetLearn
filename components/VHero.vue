<template lang="pug">
    .main
        .main__product-rewards  
            VRewards   
        .main__offer 
            p.main__offer-title Start your learning journey now
            p.main__offer-description 
                | Get a 
                span.colored  Planet
                span Learn 
                | plan to rock self-learning
            button.main__offer-button(@click="showModal") Get my plan
        .main__product  
            img(src="@/assets/images/svg/asteroid.svg", alt="Image asteroid").main__product-asteroid
            .main__action(:class="{'end-action-price': timeOut}")
                .main__action-price(:class="{'end-action-price': timeOut}")
                    p 3-day trial for 
                        span $0.99
                    p(:class="{'end-action': timeOut}") Then $9.99
                    p(:class="{'end-action': !timeOut}") Then $39.99/week
                    p(:class="{'end-action': timeOut}") $39.99/week
                .main__action-timer 
                    VTimer(:class="{'end-action': timeOut}")
            .main__product-rewards  
                VRewards
</template>

<script>
import VRewards from "@/components/VRewards.vue"
import VTimer from "@/components/VTimer.vue"
export default {
    components: {
        VRewards, VTimer
    },
    data() {
        return {
            timeOut: false
        }
    },
    methods: {
        showModal() {
            document.querySelector("body").style = "overflow-y: hidden";
            this.$store.dispatch("popup/toggle");
        },
    },
    mounted() {
        setTimeout(() => {
            this.timeOut = true
        }, 180000)
    }
}
</script>

<style lang="scss" scoped>
.main {
    padding: 70px 100px;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 360px) and (max-width: 1024px) {
        flex-direction: column-reverse;
        padding: 0;
    }

    &__offer {
        max-width: 473px;
        padding-top: 15px;

        &-title {
            font-weight: 800;
            font-size: 48px;
            line-height: 120%;

            @media screen and (min-width: 360px) and (max-width: 1024px) {
                font-size: 32px;
            }
        }

        &-description {
            font-weight: 600;
            font-size: 24px;
            line-height: 120%;
            margin-top: 24px;
            max-width: 375px;

            &>span {
                font-weight: 800;

                &:first-child {
                    color: #FF8D24;
                }
            }

            @media screen and (min-width: 360px) and (max-width: 1024px) {
                font-size: 24px;
            }
        }

        &-button {
            margin-top: 23px;
            width: 273px;
            height: 56px;
            background: #000000;
            border-radius: 12px;
            padding: 16px 40px;
            color: #FFFFFF;
            font-weight: 700;
            font-size: 16px;
            line-height: 120%;
            border: none;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                transition: all 0.3s;
                background-color: #00CA14;
            }

            @media screen and (min-width: 360px) and (max-width: 1024px) {
                width: 100%;
            }
        }
    }

    &__product {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 24px;
        width: 50%;
        background: #FFFFFF;
        border: 1px solid #CDCDCD;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
        border-radius: 24px;

        position: relative;

        @media screen and (min-width: 360px) and (max-width: 1024px) {
            width: 100%;
            padding: 0;
            margin: 32px 0px 24px 0px;
        }

        &-asteroid {
            position: absolute;
            left: 53.3%;
            top: -56px;

            @media screen and (min-width: 360px) and (max-width: 1024px) {
                display: none;
            }
        }

        &-rewards {
            &:first-child {
                display: none;

                @media screen and (min-width: 360px) and (max-width: 1024px) {
                    display: block;
                }
            }

            &:last-child {
                @media screen and (min-width: 360px) and (max-width: 1024px) {
                    display: none;

                    padding: 12px 14px;
                }
            }
        }
    }

    &__action {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;


        &-price {
            min-height: 85px;

            &>p {
                font-weight: 800;
                font-size: 24px;
                line-height: 120%;
                color: #000000;

                &>span {
                    color: #FF8D24;
                }

                &:nth-child(2) {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 120%;
                    margin-top: 8px;

                    @media screen and (min-width: 360px) and (max-width: 1024px) {
                        font-size: 16px;
                    }
                }

                &:nth-child(3) {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 120%;
                    margin-top: 8px;

                    @media screen and (min-width: 360px) and (max-width: 1024px) {
                        font-size: 16px;
                    }
                }

                &:last-child {
                    text-decoration-line: line-through;
                    opacity: 0.4;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 140%;

                    @media screen and (min-width: 360px) and (max-width: 1024px) {
                        font-size: 14px;
                    }
                }

                @media screen and (min-width: 360px) and (max-width: 1024px) {
                    font-size: 18px;
                }
            }

            @media screen and (min-width: 360px) and (max-width: 1024px) {
                padding: 12px 14px;
                min-height: 70px;
            }
        }

        &-timer {
            @media screen and (min-width: 360px) and (max-width: 1024px) {
                padding-right: 14px;
            }
        }
    }

    .end-action {
        display: none;
    }

    .end-action-price {
        @media screen and (min-width: 360px) and (max-width: 1024px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }
}
</style>