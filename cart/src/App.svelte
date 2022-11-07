<script>
  import { loadStore } from "./loadStore";
  import Cart from "./Cart.svelte";
  import StoreProvider from "./StoreProvider.svelte";
  let storePromise = loadStore();
</script>

<div class="footer">
  {#await storePromise}
    <div />
  {:then store}
    <StoreProvider store={store.store} actions={store.actions}>
      <h2>Your Cart</h2>
      <Cart />
    </StoreProvider>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
