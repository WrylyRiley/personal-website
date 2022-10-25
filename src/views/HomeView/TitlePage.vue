<template>
  <div class="box">
    <h1 :class="caretDisplay">{{ typedText }}</h1>
    <h2 :class="subtitleDisplay">{{ headlinerSubtitle }}</h2>
    <BouncyBottomArrow :class="arrowDisplay" />
  </div>
</template>

<script setup lang="ts">
import BouncyBottomArrow from "@/components/BouncyBottomArrow.vue";
import { stash } from "@/stash";
import { onMounted, ref } from "vue";

// setup vars
const typingDelayInMs = 150;
const fadeDelayInMs = 1000;
let cursorTick = false;

// actual text
const headliner = "Hi. I'm Riley";
const headlinerSubtitle = "I like to code";
let typedText = ref("");

// interval to blink caret
let caretDisplay = ref("caret-off");
let subtitleDisplay = ref("subtitle-off");
let arrowDisplay = ref("arrow-off");

setInterval(() => {
  cursorTick = !cursorTick;
  caretDisplay.value = cursorTick ? "caret-on" : "caret-off";
}, fadeDelayInMs);

const appendString = (str: string, i?: number) => {
  let index = i ?? 0;
  if (index < str.length) {
    typedText.value += str[index];
    setTimeout(() => appendString(str, index + 1), typingDelayInMs);
  } else {
    subtitleDisplay.value = "subtitle-on";
    setTimeout(() => {
      arrowDisplay.value = "arrow-on";
      stash.hasLoadedHomePage = true;
    }, fadeDelayInMs);
  }
};

// start writing text
onMounted(() => {
  if (stash.hasLoadedHomePage) {
    typedText.value = headliner;
    subtitleDisplay.value = "";
    arrowDisplay.value = "arrow-on-no-fade";

    return;
  }
  const delayStart = 400;
  setTimeout(() => appendString(headliner), delayStart);
});
</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.arrow-on {
  animation: shake ease 10s infinite, fadeIn ease 2s;
}

.arrow-on-no-fade {
  animation: shake ease 10s infinite;
}

.arrow-off {
  visibility: hidden;
}

.caret-on {
  padding-right: 3px;
  border-right: 3px solid var(--text);
}

.caret-off {
  padding-right: 6px;
}

.subtitle-on {
  animation: fadeIn ease 2s;
}

.subtitle-off {
  visibility: hidden;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
