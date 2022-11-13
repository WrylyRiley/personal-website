<template>
  <!-- Bunch o' stuff about me -->
  <div class="center-center column">
    <div style="position: relative">
      <!-- <h3 class="check-us-out">Check us out!</h3>
      <ArrowDownIcon class="check-us-out-arrow" /> -->
      <h3 class="about-me">
        I'm a senior, full-stack software engieneer at
        <a href="https://www.rocketmoney.com" target="_blank" class="rm-link"
          ><span class="winter-sunset pill highlight">Rocket Money</span></a
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
    <!-- <BouncyBottomArrow /> -->
  </div>
</template>

<script setup lang="ts">
//
</script>

<style>
.column {
  flex-direction: column;
}

.about-me-container {
  height: 100%;
  width: 100%;
  flex-direction: column;
}

.about-me {
  width: 75vw;
}

@media (min-width: 800px) {
  .about-me {
    width: 75vw;
  }
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
  top: -3.5rem;
  right: -3.5rem;
  transform: rotate(10deg);
}

.check-us-out-arrow {
  position: absolute;
  top: -1.25rem;
  right: 1.25rem;
  transform: rotate(10deg);
}

.highlight {
  border: 1px dashed var(--text);
}
</style>
