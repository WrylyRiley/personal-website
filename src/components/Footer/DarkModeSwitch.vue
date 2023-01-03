<template>
  <div class="dark-mode-container">
    <label class="switch">
      <input v-model="checkboxInput" type="checkbox" />
      <span class="slider"></span>
    </label>
    <SunIcon v-if="checkboxInput" class="icon" />
    <MoonIcon v-else class="icon" />
  </div>
</template>

<script setup lang="ts">
import MoonIcon from "@/assets/icons/MoonIcon.vue";
import SunIcon from "@/assets/icons/SunIcon.vue";
import { stash } from "@/stash";
import { ref, watch } from "vue";

const checkboxInput = ref(false);

watch(checkboxInput, (checked) => {
  stash.darkModeActive = checked;
  if (checked) {
    document.body.classList.add("body-light");
    document.querySelector(".slider")?.classList.add("slider-selected");
  } else {
    document.body.classList.remove("body-light");
    document.querySelector(".slider")?.classList.remove("slider-selected");
  }
});
</script>

<style lang="css" scoped>
.dark-mode-dark-mode-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.icon {
  height: 16px;
  width: 16px;
  margin-left: 8px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 10px;
  border: 1px solid var(--text);
  border-radius: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider-selected {
  background-color: var(--text);
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: var(--bg);
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: var(--text);
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--dark-slider-light-mode);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--dark-slider-light-mode);
}

input:checked + .slider:before {
  transform: translateX(19px);
}
</style>
