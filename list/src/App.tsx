import "./App.css";
import pillow1 from "./assets/1.jpg";
import pillow2 from "./assets/2.jpg";
import pillow3 from "./assets/3.jpg";
import pillow4 from "./assets/4.jpg";
import pillow5 from "./assets/5.jpg";
import pillow6 from "./assets/6.jpg";
import pillow7 from "./assets/7.jpg";
import pillow8 from "./assets/8.jpg";

const goods = [
  {
    id: 1,
    image: pillow1,
    desc: "The best PEPE Pillow ever",
    name: "Pajama Pepe With Teddy Bear",
  },
  {
    id: 2,
    image: pillow2,
    desc: "The best PEPE Pillow ever",
    name: "Smug Pepe",
  },
  {
    id: 3,
    image: pillow3,
    desc: "The best PEPE Pillow ever",
    name: "Love Pepe",
  },
  {
    id: 4,
    image: pillow4,
    desc: "The best PEPE Pillow ever",
    name: "Happy Pepe",
  },
  {
    id: 5,
    image: pillow5,
    desc: "The best PEPE Pillow ever",
    name: "Feels Okay Man Pepe",
  },
  {
    id: 6,
    image: pillow6,
    desc: "The best PEPE Pillow ever",
    name: "Comfy Pepe",
  },
  {
    id: 7,
    image: pillow7,
    desc: "The best PEPE Pillow ever",
    name: "EZ Pepe",
  },
  {
    id: 8,
    image: pillow8,
    desc: "The best PEPE Pillow ever",
    name: "Pepega",
  },
];

const App = () => {
  return (
    <div className="App">
      <div className="list-wrapper">
        {goods.map((good) => {
          return (
            <div key={good.id} className="list-item">
              <img src={good.image} alt={"pepe"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
