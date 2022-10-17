import App from "./App.svelte";

const mount = (el) => {
  new App({
    target: el,
  });
};

export { mount };
