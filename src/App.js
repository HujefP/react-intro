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
    item: "Momos",
    desc: "Momo is indian food item it is spicy",
    rating: 4.2,
    img: "https://source.unsplash.com/350x300/?momos",
    price: 40,
  },
  {
    item: "Burger",
    desc: "Burger is indian food item it is spicy",
    rating: 4.2,
    img: "https://source.unsplash.com/350x300/?burger",
    price: 80,
  },
  {
    item: "Pizza",
    desc: "Pizza is indian food item it is spicy",
    rating: 4.2,
    img: "https://source.unsplash.com/350x300/?pizza",
    price: 50,
  },
  {
    item: "Fries",
    desc: "vadapav is indian food item it is spicy",
    rating: 4.2,
    img: "https://source.unsplash.com/350x300/?fries",
    price: 25,
  },
  {
    item: "Mango Shake",
    desc: "Juice is indian food item it is spicy",
    rating: 4.2,
    img: "https://source.unsplash.com/350x300/?juice",
    price: 45,
  },
  {
    item: "Coffie",
    desc: "Coffie is indian food item it is spicy",
    rating: 4.2,
    img: "https://source.unsplash.com/350x300/?coffie",
    price: 30,
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

