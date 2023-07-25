import { defineStore } from "pinia";

export const useAppStore = defineStore('AppStore', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
