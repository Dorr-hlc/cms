import Vue from 'vue'
import AOS from 'aos'

Vue.use(AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  delay: 0,
  once: true
}))
