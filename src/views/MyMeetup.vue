<template>
  <div class="center-center meetup-container">
    <div class="center-center meetup">
      <h3>I run a meetup in Frederick, MD called</h3>
      <h3 class="coffee-text pill">👩‍💻 Frederick Code & Coffee ☕</h3>
      <h3>
        We're a fledgeling group of locals that like programming and caffeine.
        We welcome everybody and anybody no matter your preferred language,
        platform, or OS. We're proudly queer led and a safe space for anyone in
        the
        <span class="rainbow-text">LGBTQIA+ SPECTRUM</span>
      </h3>
      <br />
      <h3>
        Come check us out! We host monthly-ish events at local coffee shops.
        Bring your kids, bring your laptop, bring that
        <span class="python-yellow pill">Python</span> book that's been
        collecting dust in your desk drawer.
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.meetup-container {
  height: 100%;
  width: 100%;
}

.meetup {
  width: 80vw;
  position: relative;
  flex-direction: column;
}

@media (min-width: 800px) {
  .meetup {
    width: 75vw;
  }
}

.coffee-text {
  background-color: darkgoldenrod;
  white-space: nowrap;
  padding: 0 1rem;
}

.rainbow-text {
  white-space: nowrap;
  margin-left: 0.5rem;
  text-shadow: -2px 2px #ef3550, -4px 4px #f48fb1, -6px 6px #7e57c2,
    -8px 8px #2196f3, -10px 10px #26c6da, -12px 12px #43a047, -14px 14px #eeff41,
    -16px 16px #f9a825, -18px 18px #ff5722;
}
</style>
