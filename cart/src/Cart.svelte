<script>
  import { getContext } from "svelte";
  import CartItem from "./CartItem.svelte";
  const store = getContext("store");
</script>

{#if $store.items.length === 0}
  <h2>Your Cart Is Empty</h2>
{:else}
  {#each $store.items as cartItem}
    <CartItem data={cartItem} />
  {/each}
{/if}
