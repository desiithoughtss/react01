import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./assets/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./assets/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./assets/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./assets/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./assets/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./assets/prosciutto.jpg",
    soldOut: false,
  },
];

// const pizzaData =[]

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <div className="pizzas">
            <Pizza />
          </div>
        </>
      ) : (
        <p>We're still working on our menu, Please come back later</p>
      )}
    </main>
  );
}

function Pizza() {
  return (
    <>
      {pizzaData.map((pizza) => (
        <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
          <img src={pizza.photoName} />
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>{pizza.price}</span>
          </div>
        </div>
      ))}
    </>
  );
}

function Footer() {
  const openHours = 9;
  const closeHours = 22;
  const hour = new Date().getHours();

  return (
    <footer className="footer">
      <div className="order">
        <p>
          We're are open untill {closeHours}:00, Come Visit us or Order Online
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}
