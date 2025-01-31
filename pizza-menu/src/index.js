import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "images/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <header className="header">Fast React Pizza Co.</header>;
}
function Menu() {
  return (
    <main>
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul>
        {pizzaData?.map((data) => (
          <Pizza pizza={data} key={data.name} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizza }) {
  // if (pizza.soldOut) return null;
  return (
    <li>
      <img src={pizza.photoName} alt="pizza-image" />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <p>{pizza.soldOut ? "SOLD OUT" : pizza.price}</p>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOPen = hour >= openHours && hour <= closeHours;
  return (
    <footer>
      {isOPen ? (
        <SubFooter close={closeHours} />
      ) : (
        <p>
          We are happy to welcome you between {openHours}:00 and {closeHours}:00
        </p>
      )}
    </footer>
  );
}

function SubFooter({ close }) {
  return (
    <div>
      <p>We are open untill {close}:00. Come visit us or order online. </p>
      <button>Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
