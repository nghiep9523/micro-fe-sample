<script>
  import { setContext } from "svelte";
  export let store;
  export let actions;
  setContext("store", store);
  setContext("actions", actions);
</script>

<div>
  <slot />
</div>
