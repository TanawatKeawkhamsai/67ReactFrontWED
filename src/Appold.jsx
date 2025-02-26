
import Hello from "./assets/Hello";
import Counter from "./assets/Counter";
import Contact from "./assets/Contact";


function App() {
  const helloData = [
    { name: 'Bossza', message: 'Hi'},
    { name: 'The King of God', message: 'Hello....'},

  ];
  return(
    <div className="App">
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Bosszaondabeat.com" phone="111111111111" />
    </div>

  );
}

  

export default App;
