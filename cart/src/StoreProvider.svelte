<script>
  import { setContext } from "svelte";
  export let store;
  setContext("store", store);
</script>

<div>
  <slot />
</div>
