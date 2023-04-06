<template>
  <div class="flex-container">
    <div
      class="flex-slide home"
      :class="{ showDetails: showDetails.home }"
      @mouseover="showDetails.home = true"
      @mouseout="showDetails.home = false"
    >
      <div class="flex-title flex-title-home">Home</div>
      <div class="flex-about flex-about-home">
        <p>Click here to navigate to the home section of the website</p>
      </div>
    </div>
    <div
      class="flex-slide about"
      :class="{ showDetails: showDetails.about }"
      @mouseover="showDetails.about = true"
      @mouseout="showDetails.about = false"
    >
      <div class="flex-title">About</div>
      <div class="flex-about">
        <p>Click here to navigate to the About section of the website</p>
      </div>
    </div>
    <div
      class="flex-slide work"
      :class="{ showDetails: showDetails.work }"
      @mouseover="showDetails.work = true"
      @mouseout="showDetails.work = false"
    >
      <div class="flex-title">Work</div>
      <div class="flex-about">
        <p>Listing relevant snippets of work:</p>
        <ul>
          <li>First piece of work</li>
          <li>Second piece of work</li>
          <li>Third piece of work</li>
        </ul>
      </div>
    </div>
    <div
      class="flex-slide contact"
      :class="{ showDetails: showDetails.contact }"
      @mouseover="showDetails.contact = true"
      @mouseout="showDetails.contact = false"
    >
      <div class="flex-title">Contact</div>
      <div class="flex-about">
        <p>Use the contact form below</p>
        <form class="contact-form">
          <p>Email <input type="text" name="email" /></p>
          <p>
            Comment <textarea type="text" name="comment" row="5"></textarea>
          </p>
          <p><input type="submit" name="email" value="Send Message" /></p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      showDetails: {
        home: false,
        about: false,
        work: false,
        contact: false,
      },
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.flex-container {
  position: absolute;
  height: 100vh;
  width: 100%;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }
}

.flex-title {
  color: #f1f1f1;
  position: relative;
  font-size: 6vw;
  margin: auto;
  text-align: center;
  transform: rotate(90deg);
  top: 15%;
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
}
@media screen and (max-width: 768px) {
  .flex-title {
    transform: rotate(0deg) !important;
  }
}
.flex-about {
  opacity: 0;
  color: #f1f1f1;
  position: relative;
  width: 70%;
  font-size: 2vw;
  padding: 5%;
  top: 20%;
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  line-height: 1.3;
  margin: auto;
  text-align: left;
  transform: rotate(0deg);
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
}
@media screen and (max-width: 768px) {
  .flex-about {
    padding: 0%;
    border: 0px solid #f1f1f1;
  }
}

.flex-slide {
  -webkit-flex: 1;
  /* Safari 6.1+ */
  -ms-flex: 1;
  /* IE 10 */
  flex: 1;
  cursor: pointer;
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
  &.showDetails {
    .flex-title {
      transform: rotate(0deg);
      top: 10%;
    }
    .flex-about {
      opacity: 1;
    }
  }
  &.hideDetails {
    .flex-title {
      transform: rotate(90deg);
      top: 15%;
    }
    .flex-about {
      opacity: 0;
    }
  }
}
@media screen and (max-width: 768px) {
  .flex-slide {
    overflow: auto;
    overflow-x: hidden;
  }
}

@media screen and (max-width: 768px) {
  .flex-slide p {
    font-size: 2em;
  }
}

@media screen and (max-width: 768px) {
  .flex-slide ul li {
    font-size: 2em;
  }
}

.flex-slide:hover {
  -webkit-flex-grow: 3;
  flex-grow: 3;
}

.home {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/lake-macquarie-71208_1920.jpg);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
@media screen and (min-width: 768px) {
  .home {
    animation: aboutFlexSlide 3s 1;
    animation-delay: 0s;
  }
}

@keyframes aboutFlexSlide {
  0% {
    -webkit-flex-grow: 1;
    flex-grow: 1;
  }
  50% {
    -webkit-flex-grow: 3;
    flex-grow: 3;
  }
  100% {
    -webkit-flex-grow: 1;
    flex-grow: 1;
  }
}
@media screen and (min-width: 768px) {
  .flex-title-home {
    transform: rotate(90deg);
    top: 15%;
    animation: aboutFlexSlide 3s 1;
    animation-delay: 0s;
  }
}

@keyframes homeFlextitle {
  0% {
    transform: rotate(90deg);
    top: 15%;
  }
  50% {
    transform: rotate(0deg);
    top: 15%;
  }
  100% {
    transform: rotate(90deg);
    top: 15%;
  }
}
.flex-about-home {
  opacity: 0;
}
@media screen and (min-width: 768px) {
  .flex-about-home {
    animation: aboutFlexSlide 3s 1;
    animation-delay: 0s;
  }
}

@keyframes flexAboutHome {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.about {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/beach-2089959_1280.jpg);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.contact-form {
  width: 100%;
}

input {
  width: 100%;
}

textarea {
  width: 100%;
}

.contact {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/lake-696098_1920.jpg);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.work {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/forest-208517_1280.jpg);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.spinner {
  position: fixed;
  top: 0;
  left: 0;
  background: #222;
  height: 100%;
  width: 100%;
  z-index: 11;
  margin-top: 0;
  color: #fff;
  font-size: 1em;
}

.cube1,
.cube2 {
  background-color: #fff;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
@keyframes sk-cubemove {
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
</style>
