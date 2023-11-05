import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

export function run(): void {
  createApp(App).mount("#app");
}
