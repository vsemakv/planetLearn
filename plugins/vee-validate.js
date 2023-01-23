import { ValidationProvider, ValidationObserver, extend, configure } from 'vee-validate';
import { required, min } from 'vee-validate/dist/rules';
import Vue from 'vue';

extend('required', required);
extend('min', min)

configure({
  classes: {
    invalid: 'is-danger'
  }
});

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)