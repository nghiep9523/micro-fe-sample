export const loadStore = async () => {
  const storeModule = await import("store/store");
  const actionModule = await import("store/actions");
  console.log(actionModule);
  console.log(storeModule.default);
  return {
    store: storeModule.default,
    actions: actionModule,
  };
};
