
import './App.css';
import Countries from './Component/Countries/Countries';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
       <Countries></Countries>
       <Footer></Footer>
    </div>
  );
}
// function Countries(){
//   const [countries,setCountries] = useState([]);
//   useEffect( ()=>{

//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])
 
//   return (
//     <div>
//       <h1>Traveling Round the world!!</h1>
//       <h4>Countries Available: {countries.length}</h4>
//       {
//         countries.map(countrys=> <Country name={countrys.name.common} capital ={countrys.capital}></Country>)
       
//       }
//     </div>
//   )
// }

// function Country(props){
//   console.log(props.name)
//   return (
//     <div>
//      <h1>Name: {props.name}</h1>
//      <p>Capital:{props.capital}</p>
//     </div>
//   );
// }
export default App;
