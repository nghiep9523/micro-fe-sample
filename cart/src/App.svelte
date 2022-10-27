<script>
  import { loadStore } from "./loadStore";
  import CartItem from "./CartItem.svelte";
  import StoreProvider from "./StoreProvider.svelte";
  let storePromise = loadStore();
</script>

<div class="footer">
  {#await storePromise}
    <div />
  {:then store}
    <StoreProvider {store}>
      <CartItem />
    </StoreProvider>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>

<style>
  .footer {
    background-color: #aaa;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .svelte-logo {
    height: 70px;
  }
</style>
