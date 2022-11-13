<template>
  <footer>
    <div class="dark-mode-container">
      <DarkModeSwitch />
      <div class="dark-mode-hint center-center">
        <ArrowleftIcon class="dark-mode-pointer" />
        <p>Don't like dark mode? <br />It's ok to have opinions.</p>
      </div>
    </div>
    <div class="social-container">
      <div class="social-hint center-center">
        <p>Keep in touch!</p>
        <ArrowUpIcon class="social-pointer" />
      </div>
      <SocialItems />
      <!-- social items -->
    </div>
  </footer>
</template>

<script setup lang="ts">
import ArrowleftIcon from "@/assets/icons/ArrowLeftIcon.vue";
import ArrowUpIcon from "@/assets/icons/ArrowUpIcon.vue";
import SocialItems from "@/components/Footer/SocialItems.vue";
import DarkModeSwitch from "./DarkModeSwitch.vue";
</script>

<style lang="css" scoped>
@media (max-width: 500px) {
  .social-hint {
    visibility: hidden;
  }

  .dark-mode-hint {
    visibility: hidden;
  }
}

footer {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  transition: all 1s ease;
}

.dark-mode-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.dark-mode-hint {
  margin-left: 1rem;
  height: 1.5rem;
}

.dark-mode-pointer {
  animation: smolShakeDown ease 2s infinite;
  width: 1rem;
  height: 1rem;
  transform: rotate(90deg);
}

.social-hint {
  margin-right: 1rem;
  height: 1.5rem;
}

@keyframes smolShakeDown {
  0% {
    transform: translateX(0rem);
  }
  50% {
    transform: translateX(-0.5rem);
  }
  100% {
    transform: translateX(0rem);
  }
}

.social-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
