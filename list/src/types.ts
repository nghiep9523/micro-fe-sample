export type IButtonContent = {
  isInCart: boolean;
  itemsInCart: Array<object>;
  onRemove: (itemId: number) => void;
  itemId: number;
};
