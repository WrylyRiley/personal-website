import { reactive } from "vue";

interface Stash {
  darkModeActive: boolean;
  hasLoadedHomePage: boolean;
}

export const stash = reactive<Stash>({
  darkModeActive: true,
  hasLoadedHomePage: false,
});
