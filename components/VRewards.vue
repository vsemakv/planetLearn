<template lang="pug">
    .reward
        .reward__product-rewards  
                    p 
                        | Exclusive access to 
                        span 350+ 
                        | learning programs
                    p Personalized course plan
                    p Comfy learning schedule made by you
                    p 
                        span 24/7 
                        | tutor support in a secure chat
                    p Lifetime access to materials
                    button.reward__product-button Safe &amp; secure payment
                    .reward__product-info 
                        p $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By continuing, you indicate that you've read and agree to our Terms &amp; Conditions, Privacy Policy , Money Back , and Subscription Terms .
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.reward { 
    padding: 0;
    &__product { 
        &-rewards { 
            margin-top: 24px;
            width: 100%;

            & > p { 
                padding-left: 34px;
                margin-bottom: 24px;
                font-weight: 400;
                font-size: 16px;
                line-height: 120%;
                position: relative;

                & > span { 
                    color: #FF8D24;
                    font-weight: 700;
                }

                &::before { 
                    display: block;
                    content: "";
                    position: absolute;
                    background-image: url("@/assets/images/svg/star.svg");
                    width: 24px;
                    height: 24px;
                    left: 0px;
                    top: 50%;
                    transform: translate(0, -50%);
                }
            }
        }
        &-button { 
            width: 100%;
            height: 56px;
            background-color: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            transition: all 0.3s;

            font-weight: 500;
            font-size: 16px;
            line-height: 16px;
            color: #01C120;

            padding-left: 45px;
            margin: 8px 0px;
            position: relative;

            &::before { 
                position: absolute;
                display: block;
                content: "";
                background-image: url("@/assets/images/svg/lock.svg");
                width: 24px;
                height: 24px;
                left: 29%;
                top: 50%;
                transform: translate(0, -50%);
                @media screen and (min-width: 360px) and (max-width: 1024px){
                    left: 20%;
                }
                
            }

            @media screen and (min-width: 360px) and (max-width: 1024px){
                width: 100%;
            }
        }
        &-info { 
            margin-top: 24px;

            & > p { 
                font-weight: 400;
                font-size: 12px;
                line-height: 120%;
                text-align: center;
                opacity: 0.5;
            }
        }
    }
}
</style>