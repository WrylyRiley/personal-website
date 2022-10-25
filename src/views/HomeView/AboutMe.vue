<template>
  <!-- Bunch o' stuff about me -->
  <div class="about-me-container">
    <div style="position: relative">
      <h3 class="check-us-out">Check us out!</h3>
      <ArrowDownIcon class="check-us-out-arrow" />
      <h3 class="about-me">
        I'm a full-stack, senior software engieneer at
        <a href="https://www.rocketmoney.com" target="_blank" class="rm-link"
          ><span class="summer-sunrise pill">Rocket Money</span></a
        >. My professional specialities lie in
        <span class="react-blue pill">React</span>,
        <span class="react-blue pill">React Native</span>, and backend
        <span class="node-green pill">NodeJS</span>, all with
        <span class="ts-blue pill">Typescript</span> as my preferred language ,
        though in a pinch I'll concede to using
        <span class="js-yellow pill">Javascript</span>. This website was written
        in <span class="vue-green pill">Vue3</span> using the new composition
        API as a fun way to learn something new.
        <span style="text-decoration: line-through">All</span> Most of the
        <span class="css-blue pill">CSS</span> was done by hand.
      </h3>
    </div>
    <BouncyBottomArrow />
  </div>
</template>

<script setup lang="ts">
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon.vue";
import BouncyBottomArrow from "@/components/BouncyBottomArrow.vue";
</script>

<style>
.about-me-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about-me {
  width: 55vw;
}

.social-pointer-container {
  margin-right: 1rem;
  margin-top: 0.5rem;
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 1.5rem;
}

.social-pointer {
  animation: smolShakeUp ease 2s infinite;
  width: 1rem;
  height: 1rem;
}

.rm-link {
  text-decoration: none;
  /* text-decoration: underline; */
}
.rm-link:visited {
  color: var(--text);
}

.check-us-out {
  /* transform: translate(3rem 5rem); */
  align-self: flex-end;
  position: absolute;
  top: -3rem;
  right: -3rem;
  transform: rotate(10deg);
}

.check-us-out-arrow {
  position: absolute;
  top: -1rem;
  right: 1rem;
  transform: rotate(10deg);
}
</style>
