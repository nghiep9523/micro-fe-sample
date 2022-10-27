export const loadStore = async () => {
  const module = await import("store/store");
  return module.default;
};
