import './App.css';

function App() {

  let PROJECTID = '98grckdw'
  let DATASET = 'production'
  let QUERRY = encodeURIComponent('*[_type == "products"]')

  let URL = `https://${PROJECTID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERRY}`

  fetch(URL)
  .then((res) => res.json())
  .then(({result}) => {console.log(result)})

  return (
    <h1>Innhold fra sanity</h1>

  );
}

export default App;
