import { reactive } from "vue";

interface Stash {
  darkModeActive: boolean;
  hasLoadedHomePage: boolean;
  activeLink: string;
}

export const stash = reactive<Stash>({
  darkModeActive: true,
  hasLoadedHomePage: false,
  activeLink: "title-page",
});
