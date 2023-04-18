// import logo from './logo.svg';
import Card from './Componants/Card';
import './App.css';
let fooditems = [
  {
    item: "Samosa",
    desc: "Samosa is indian food item it is spicy",
    rating: 4.2,
    img: "https://source.unsplash.com/350x300/?samosa",
    price: 20,
  },
  {
    item: "Vadapav",
    desc: "vadapav is indian food item it is spicy",
    rating: 4.2,
    img: "https://source.unsplash.com/350x300/?pav-vada",
    price: 25,
  },
  {
    item: "Roll",
    desc: "Roll is indian food item it is spicy",
    rating: 4.2,
    img: "https://source.unsplash.com/350x300/?Egg-roll",
    price: 40,
  },
  {
    item: "Burger",
    desc: "Burger is indian food item it is spicy",
    rating: 4.2,
    img: "https://source.unsplash.com/350x300/?burger",
    price: 80,
  }
]


function App() {
  return (
    <div className='flex'>
            {
        fooditems.map((fooditem) => {
       return < Card title = { fooditem.item } img = { fooditem.img} price= {fooditem.price} />
    })
  }
    </div>

  );
}

export default App;

