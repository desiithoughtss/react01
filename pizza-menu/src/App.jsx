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

function Header() {
  // return <h1 style={{ background: "red" }}> Fast React Pizza Co.</h1>;
  return (
    <header className="header">
      <h1> Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on menu, Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  const { name, photoName, ingredients, price, soldOut } = pizzaObject;
  // console.log(props);
  if (soldOut) return null;
  return (
    <li className="pizza">
      <img src={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const openHours = 9;
  const closeHours = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openHours && hour <= closeHours;

  if (!isOpen) {
    return (
      <footer className="footer">
        <p className="order">Closed</p>
      </footer>
    );
  }
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're are open untill {closeHours}:00, Come visit us or order online{" "}
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
