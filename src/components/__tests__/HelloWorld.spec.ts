import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HeaderItem from "../Header/HeaderItem.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HeaderItem, { props: { text: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
