import React from "react";
import { useDispatch, useSelector } from "react-redux";
import pillow1 from "./assets/1.jpg";
import pillow2 from "./assets/2.jpg";
import pillow3 from "./assets/3.jpg";
import pillow4 from "./assets/4.jpg";
import pillow5 from "./assets/5.jpg";
import pillow6 from "./assets/6.jpg";
import pillow7 from "./assets/7.jpg";
import pillow8 from "./assets/8.jpg";
import { addToCart, removeFromCart } from "store/actions";
import { IButtonContent } from "./types";

// Sample data for demo
const goods = [
  {
    id: 1,
    image: pillow1,
    desc: "The best PEPE Pillow ever",
    name: "Pajama Pepe With Teddy Bear",
    price: 100,
  },
  {
    id: 2,
    image: pillow2,
    desc: "The best PEPE Pillow ever",
    name: "Smug Pepe",
    price: 100,
  },
  {
    id: 3,
    image: pillow3,
    desc: "The best PEPE Pillow ever",
    name: "Love Pepe",
    price: 200,
  },
  {
    id: 4,
    image: pillow4,
    desc: "The best PEPE Pillow ever",
    name: "Happy Pepe",
    price: 300,
  },
  {
    id: 5,
    image: pillow5,
    desc: "The best PEPE Pillow ever",
    name: "Feels Okay Man Pepe",
    price: 100,
  },
  {
    id: 6,
    image: pillow6,
    desc: "The best PEPE Pillow ever",
    name: "Comfy Pepe",
    price: 100,
  },
  {
    id: 7,
    image: pillow7,
    desc: "The best PEPE Pillow ever",
    name: "EZ Pepe",
    price: 100,
  },
  {
    id: 8,
    image: pillow8,
    desc: "The best PEPE Pillow ever",
    name: "Pepega",
    price: 100,
  },
];

const ButtonContent = ({
  itemId,
  isInCart,
  itemsInCart,
  onRemove,
}: IButtonContent) => {
  return isInCart ? (
    <>
      In Cart ({itemsInCart.length}) <span>|</span>
      <div className="remove-from-cart" onClick={() => onRemove(itemId)}>
        Remove from Cart
      </div>
    </>
  ) : (
    <label>Add To Cart</label>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const itemsInCart =
    useSelector((state: any) => {
      return state.items;
    }) || [];

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="App">
      <h2>Pick your lovely pepe</h2>
      <div className="list-wrapper">
        {goods.map((good) => {
          const { id: itemId, image, price } = good;
          const inCart = itemsInCart.filter((data: any) => data.id === itemId);
          const isInCart = inCart?.length > 0;

          return (
            <div key={itemId} className="list-item">
              <div className="img-container">
                <img src={image} alt={"pepe"} />
                <label className="pepe-price">{price}$</label>
              </div>
              <button
                className="btn-add-to-cart"
                style={
                  {
                    "--backgroundColor": isInCart ? "#11468f" : "#92b4ec",
                    "--justifyContent": isInCart ? "space-between" : "center",
                  } as any
                }
                onClick={() => {
                  !isInCart && dispatch(addToCart(good));
                }}
              >
                <ButtonContent
                  itemId={itemId}
                  isInCart={isInCart}
                  itemsInCart={itemsInCart}
                  onRemove={handleRemoveFromCart}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
