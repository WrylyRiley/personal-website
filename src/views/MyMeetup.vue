<template>
  <div class="center-center meetup-container">
    <div class="center-center meetup">
      <h3>
        From September 2022 to April 2025, I ran a local chapter of &nbsp;
        <a style="text-decoration: none" href="https://codeandcoffee.org/">
          <span class="coffee pill low-underline">👩‍💻 Code & Coffee ☕</span>
        </a>
        in Frederick, MD. It was a group of locals that like programming and
        caffeine. We welcomed everybody no matter your preferred language,
        platform, or OS. I'm proud of the time I spent organizing that group.
      </h3>
      &nbsp;
      <h3>
        It was one of many meetups in town that catered to anyone, but I rarely
        saw folks like myself there, so as of April 2025, I've pivoted to
        running a meetup called
        <a
          style="text-decoration: none"
          href="https://www.meetup.com/queer-coded/?eventOrigin=home_groups_you_organize/"
        >
          <span class="qc pill low-underline">🌈Queer Coded🌈</span></a
        >, a tech-focused meetup and safe space for everyone in the
        <span class="rainbow-text">&nbsp;&nbsp;LGBTQIA+ SPECTRUM</span>
      </h3>
      &nbsp;
      <h3>
        We host monthly-ish events at a local coffee shop. Bring your authentic
        self, and bring your laptop, and bring that
        <span class="python-yellow pill">Python</span> book that's been
        collecting dust in your desk drawer!
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

.coffee {
  background-color: darkgoldenrod;
  padding: 0 1rem;
  color: var(--text);
}

.qc {
  background-color: #e0d3fa;
  padding: 0 1rem;
  color: var(--black-text);
}

.low-underline {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
  text-decoration-style: solid;
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
}

.rainbow-text {
  white-space: nowrap;
  margin-left: 0.5rem;
  text-shadow:
    -2px 2px #ef3550,
    -4px 4px #f48fb1,
    -6px 6px #7e57c2,
    -8px 8px #2196f3,
    -10px 10px #26c6da,
    -12px 12px #43a047,
    -14px 14px #eeff41,
    -16px 16px #f9a825,
    -18px 18px #ff5722;
}

a {
  color: var(--text);
}
</style>
