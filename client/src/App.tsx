import React from 'react';
import logo from './logo.svg';
import './App.scss';
import _config from './config'
import apisauce from 'apisauce'

const api = apisauce.create({
  baseURL: "",
})

const config = _config.get('app')

function App() {

  const [res, setRes]: [any, any] = React.useState("")

  React.useEffect(() => {
    api.get('/api')
    .then(res => {
      if(res.ok){
        setRes(res.data)
      }
    })
  }, [])

  return (
    <div className="App">
      {config.test}
      <div>
        {'res: ' + res}
      </div>
    </div>
  );
}

export default App;
