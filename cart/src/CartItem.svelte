<script>
  import { getContext } from "svelte";
  export let data;
  const store = getContext("store");
  const actions = getContext("actions");
  const onClickRemoveFromCart = () => {
    store.dispatch(actions.removeFromCart(data.id));
  };
</script>

<div class="cart-wrapper">
  <div class="img-wrapper">
    <img src={data.image} alt="img" />
  </div>
  <div class="cart-info">
    <div>{data.name}</div>
    <div>Amount: {data.amount}</div>
    <div>Price: {data.price * data.amount}$</div>
    <button on:click={onClickRemoveFromCart}>Remove From Cart</button>
  </div>
</div>

<style>
  .cart-wrapper {
    display: flex;
    margin-bottom: 4px;
  }
  .img-wrapper {
    flex: 1;
  }
  .img-wrapper img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  .cart-info {
    font-size: 1.5em;
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
  }
</style>
