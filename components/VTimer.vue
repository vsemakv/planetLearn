<template lang="pug">
    .timer
        .timer__time 
            p 0{{ minutes }}
            span :
            p   
                span(:class="{'sec': isLowSec}") 0
                | {{ seconds }}
        .timer__wrapper(:class="{'low': isLow}")
            .timer__bar(ref="bar")
</template>

<script>
    export default {
        data() {
            return {
                time: 180,
                interval: 180,
                isLow: false,
                isLowSec: false,
                totalTime: 180,
                minutes: 0,
                seconds: 0,
            }
        },
        methods: {
            start() {
                let countDown = setInterval(() => {
                    this.minutes = Math.floor((this.totalTime / 60))
                    this.seconds = this.totalTime - (this.minutes * 60)
                    this.totalTime--;
                    this.interval--;
                    let progressWith = this.interval / this.time * 100;

                    if (this.interval > 0) {
                        this.$refs.bar.style.width = progressWith + "%";
                    } else {
                        clearInterval(countDown);
                        this.$refs.bar.style = "width: 0%";
                    }
                }, 1000) 
            },
        },
        watch: { 
            interval(){ 
                if(this.interval < 11){
                    this.isLow = true
                }
            },
            seconds(){
                if(this.seconds > 9) {
                    this.isLowSec = true
                    console.log(this.seconds);
                }else{
                    this.isLowSec = false
                }
            }
        },
        mounted(){
            this.start()
        }
    }
</script>

<style lang="scss" scoped>
.timer {
    position: relative;

    &__time {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        & > p { 
            color: white;
            font-weight: 600;
            font-size: 24px;
            line-height: 140%;
            padding: 2px;
        }
        & > span { 
            color: white;
            font-weight: 600;
            font-size: 24px;
            line-height: 140%;
        }
    }
    &__wrapper {
        width: 160px;
        height: 60px;
        border-radius: 12px;
        background: #000000;

        @media screen and (min-width: 360px) and (max-width: 1024px){
            width: 105px;
            height: 47px;
        }
    }
    &__bar {
        width: 160px;
        height: 60px;
        border-radius: 11px;

        background: #00CA14;
        display: flex;
        align-items: center;
        transition: width 0.3s ease-out;

        @media screen and (min-width: 360px) and (max-width: 1024px){
            width: 105px;
            height: 47px;
        }
    }
}
.low{
    border: 2px solid #FF0000;
    border-radius: 13px;
    box-shadow: 2px;
    box-shadow: 0px 0px 15px 2px #FF0000;
}
.sec { 
    display: none;
}
</style>