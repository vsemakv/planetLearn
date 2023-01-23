<template lang="pug">
.popup
  .popup__bg(@click='closeModal' :class="{'hidden': !$store.state.popup.showPopup}")
  ValidationObserver
    form.popup__form(:class="{'hidden': !$store.state.popup.showPopup}")
      p.popup__form-title Payment method
      button.popup__form-button--paypal 
        img(src="@/assets/images/svg/PayPal.svg", alt="PayPal logo")
        p Buy now
      button.popup__form-button--google
        img(src="@/assets/images/svg/googlePay.svg", alt="GooglePay logo")
        p Pay
      span.popup__form-choose OR
      .popup__form-number
          p Card number
          ValidationProvider( rules="min:19" v-slot="{ errors }").validator
            input(v-model="valueCard" 
            v-mask="'#### #### #### ####'" 
            type="text" 
            placeholder='•••• •••• •••• ••••'
            :class="{'incorrect': isIncorrectNum, 'correct': isCorrectNum}"
            ).popup__form-number--input
            span.error {{ errors[0] }}
      .popup__form-card
        .popup__form-select
          VSelect(:options="months" 
          @select="selectOptionMonth" 
          :selected="selectedMonth" 
          :title="titleMonth" 
          :class="{'correct-select': isSelectedMonth}")
        .popup__form-select
          VSelect(:options="years" 
          @select="selectOptionYear" 
          :selected="selectedYear" 
          :title="titleYear"
          :class="{'correct-select': isSelectedYear}")
        .popup__form-select
          p.popup__form-select--name CVC
          input(v-model="valueCvc"
            type="password"
            placeholder='•••' 
            v-mask="'###'"
            :class="{'correct': isCorrectCvc}"
            ).popup__form-select--input
      button.popup__form-button--submit(
        @click.prevent=""
        :disabled=" !isCorrectNum || !isCorrectCvc || selectedYear.length !== 4 || selectedMonth.length !== 2" 
        :class="{'active': isCorrectNum && isCorrectCvc && selectedYear.length == 4 && selectedMonth.length == 2}") Submit
      button.popup__form-button--close(@click.prevent='closeModal') Close
</template>

<script>
import VSelect from "./VSelect.vue";
import { ValidationProvider, extend } from 'vee-validate';
import { required, min } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});
extend('min', {
  ...min,
  message: 'Invalid number'
});

export default {
  components: {
    VSelect,
    ValidationProvider
  },
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
      selectedMonth: 'Select',
      isSelectedMonth: false,
      selectedYear: 'Select',
      isSelectedYear: false,
      titleYear: 'Year',
      titleMonth: 'Month',
      isVisible: false,
      valueCard: '',
      valueCvc: '',
      isCorrectCvc: false,
      isIncorrectNum: false,
      isCorrectNum: false,
      activeButton: false,
      isDisabled: true,
    };
  },
  watch: {
    valueCard() {
      if(this.valueCard.length == 19) { 
        this.isIncorrectNum = false
        this.isCorrectNum = true
      }else { 
        this.isIncorrectNum = true
        this.isCorrectNum = false
      }
    },
    selectedMonth(){
      if(this.selectedMonth.length == 2){
        this.isSelectedMonth = true
      }
    },
    selectedYear(){
      if(this.selectedYear.length == 4){
        this.isSelectedYear = true
      }
    },
    valueCvc(){
      if(this.valueCvc.length == 3){
        this.isCorrectCvc = true
      }else { 
        this.isCorrectCvc = false
      }
    }
  },
  methods: {
    selectOptionMonth(option) {
      this.selectedMonth = option.name
    },
    selectOptionYear(option) {
      this.selectedYear = option.name
    },
    closeModal() {
      document.querySelector("body").style = "overflow-y: unset";
      this.$store.dispatch("popup/close");
    }
  },
  mounted () {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          this.$store.dispatch("popup/close");
        }
      })
  },
};
</script>

<style lang="scss" scoped>
.popup {
  &__bg {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  &__form {
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

    @media screen and (min-width: 360px) and (max-width: 1024px){
      width: 80%;
    }

    &-title {
      font-weight: 800;
      font-size: 21px;
      line-height: 120%;
      text-align: center;
    }

    
    &-button {
      &--paypal {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 56px;
        background: #fec538;
        border-radius: 12px;
        border: none;
        transition: all 0.3s;
        &:hover { 
            transition: all 0.3s;
            background: #FFDA80;
        }
        & > p {
          margin-left: 10px;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
        }

        
      }
      &--google {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 56px;
        background: #ffffff;
        border-radius: 12px;
        border: 1px solid #e1e1e1;
        transition: all 0.3s;

        &:hover { 
            transition: all 0.3s;
            background: #000000;
            color: #FFFFFF;
        }

        & > p {
          margin-left: 10px;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
        }
      }
      &--submit { 
        padding: 18.5px 124px;
        background: #D2D2D2;
        border-radius: 12px;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        border: none;
        cursor: default;
      }
      &--close{
        padding: 10px;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: rgba(0, 0, 0, 0.4);
        background-color: #FFFFFF;
        border: none;
      }
    }
    &-choose {
        width: 100%;
      font-weight: 600;
      font-size: 12px;
      line-height: 140%;
      letter-spacing: -0.36px;
      text-align: center;
      color: rgba(0, 0, 0, 0.4);

      position: relative;

      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 45%;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.1);
        left: 0px;
        top: 50%;
        transform: translate(0, -50%);
      }
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 45%;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.1);
        right: 0px;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
    &-number { 
        width: 100%;
        position: relative;
        display: flex;

        &--input {
            width: 100%;
            background: #FFFFFF;
            border: 1px solid #D2D5DA;
            border-radius: 8px;
            height: 46px;
            font-size: 20px;
            padding-left: 16px;
            // border: 2px solid #00CA14;
            outline: 0;
            outline-offset: 0;

            @media screen and (min-width: 360px) and (max-width: 1024px){
              font-size: 12px;
            }
        }
        & > p { 
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
        &::after { 
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            content: url("@/assets/images/svg/Mastercard.svg");
            width: 32px;
            height: 22px;
            right: 12px;
            top: 50%;
            transform: translate(0, -50%);
            border: 1px solid #F2F4F7;
            border-radius: 4px;
            padding-top: 3px;
        }
    }
    &-card { 
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 16px 0px;
    }
    &-select { 
      position: relative;
      &--input { 
        width: 84px;
        padding: 16px;
        background: #FFFFFF;
        border: 1px solid #D2D5DA;
        border-radius: 8px;
        // border: 2px solid rgb(0, 209, 0);
        outline: 0;
        outline-offset: 0;

        @media screen and (min-width: 360px) and (max-width: 1024px){
          padding: 16px 4px;   
        }
      }
      &--name{ 
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
    }
  }
  .validator { 
    display: flex;
    width: 100%;
  }
  .error { 
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 52px;
    color: red;
  }
  .active { 
    background-color: #00CA14;
    cursor: pointer;
  }
  .hidden{
    display: none;
  }
  .incorrect { 
    border: 2px solid red;
  }
  
  .correct { 
    border: 2px solid #00CA14;
  }
  .correct-select { 
    border-radius: 10px;
    border: 2px solid #00CA14;
  }
}
</style>