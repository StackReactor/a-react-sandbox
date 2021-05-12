import './App.css';

function App() {
  const url = "https://www.linkedin.com/in/mina-newcomb-722080200/"
  const name = "Ms. Mina Newcomb"
  const message = <button>"Hire This Transfemme Hottie!!!"</button>
  const img = <img src="https://saladforpresident.com/wp-content/uploads/2017/04/2017_4_27_SaladForPresident_%C2%A9LauraJuneKirsch-1308.jpg"></img>
  const element = <h1>Hello {name}!</h1>
  const element2 = <h2><a href={url} target="_blank">{message}</a></h2>
  return (<div>{element}{element2}{img}
  </div>)
}

function App2() {
  const item = "apple";
  const price = 2;
  const count = 10;
  const element = (
    <>
      <h1>Total Purchased:</h1>
      <p>Purchased {count} {item}s for {price} each.</p>
      <hr/>
      <p>The total is ${count * price}.</p>
    </>
  ); 
  return element;
}

export { App as default, App2}  ;

