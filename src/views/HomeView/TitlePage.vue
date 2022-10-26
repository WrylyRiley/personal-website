<template>
  <div class="box center-center">
    <h1 :class="caretDisplay">{{ typedText }}</h1>
    <h2 :class="subtitleDisplay" class="deluxe-pill center-center">
      <span>I like to</span>
      <Transition name="fade" mode="out-in" duration="750">
        <component :is="codePills[currentCodePillIndex]" />
      </Transition>
    </h2>
    <BouncyBottomArrow :class="arrowDisplay" />
  </div>
</template>

<script setup lang="ts">
import BouncyBottomArrow from "@/components/BouncyBottomArrow.vue";
import { stash } from "@/stash";
import { onMounted, ref, Transition } from "vue";
// eslint-disable-next-line max-len
import TypescriptPill from "@/components/DeluxePills/TypescriptPill.vue";
import NodePill from "@/components/DeluxePills/NodePill.vue";
import JavascriptPill from "@/components/DeluxePills/JavascriptPill.vue";
import ReactPill from "@/components/DeluxePills/ReactPill.vue";
import RocketPill from "@/components/DeluxePills/RocketPill.vue";
import CssPill from "@/components/DeluxePills/CssPill.vue";
import VuePill from "@/components/DeluxePills/VuePill.vue";
import { fadeDelayInMs, pillFadeDelay, typingDelayInMs } from "@/constants";

const codePills = [
  TypescriptPill,
  NodePill,
  JavascriptPill,
  ReactPill,
  RocketPill,
  CssPill,
  VuePill,
];

// setup vars
let cursorTick = false;

// Code pill class setup
const currentCodePillIndex = ref(0);

// actual text
const headliner = "Hi. I'm Riley";
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
    changeCodePill(0);
    setTimeout(() => {
      arrowDisplay.value = "arrow-on";
      stash.hasLoadedHomePage = true;
    }, fadeDelayInMs);
  }
};

const changeCodePill = (currentIndex: number) => {
  currentCodePillIndex.value = currentIndex;
  return setTimeout(() => {
    const newIndex =
      currentIndex === codePills.length - 1 ? 0 : currentIndex + 1;
    changeCodePill(newIndex);
  }, pillFadeDelay);
};

// start writing text
onMounted(() => {
  if (stash.hasLoadedHomePage) {
    typedText.value = headliner;
    subtitleDisplay.value = "";
    arrowDisplay.value = "arrow-on-no-fade";
    changeCodePill(0);
    return;
  }
  const delayStart = 400;
  setTimeout(() => appendString(headliner), delayStart);
});
</script>

<style>
.box {
  flex-direction: column;
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

.icon {
  height: 5vmax;
  width: 5vmax;
  border-radius: 5rem;
  background-color: var(--bg);
  padding: 6px;
  margin-left: 5px;
}
.deluxe-pill .pill {
  margin-left: 0.5rem;
}

.logo {
  height: 5vmax;
  width: 5vmax;
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
