import './App.css';

function WelcomeBack({name="valued customer", adjective="nice"}) {
  return <p>Welcome back, {adjective} {name}!</p>;
}

function EncouragingWords({name}){
  return <p>Believe you can, {name}, and you're halfway there!</p>;
}

function DailyTip(){
  return <p>Highlight a whole paragraph by triple-clicking on it</p>;
}

function Header(){
  return <h1>App Header</h1>;
}

function Nav(){
  return <h2>Navigation</h2>;
}

function Component1(){
  return <p>Component 1 Content</p>
}

function Component2(){
  return <p>Component 2 Content</p>
}
function Component3(){
  return <p>Component 3 Content</p>
}

function Footer(){
  return <h3>Footer</h3>
}
function App() {
  return <>
    <WelcomeBack name="Mina" adjective="cute"/>
    <WelcomeBack name="Nick" adjective="handsome"/>
    <WelcomeBack />
    <EncouragingWords name="Mina"/>
    <DailyTip/>
    <Header/>
    <Nav/>
    <Component1/>
    <Component2/>
    <Component3/>
    <Footer/>
  </>;
}

export default App;
