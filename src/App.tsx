import * as React from 'react';
import { useState, useEffect }  from 'react';
import './App.css';
import api from './api/axiosConfig';
import InputField from './components/InputField';

const App: React.FC = () => {

  const [listings, setListings] = useState<string[]>([]);

  const getListings = async () => {
    try {
      const response = await api.get("/listings");
      console.log(response.data);
      setListings(response.data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getListings();
  },[])
  
  return (
    <div className="App">
      <span className="heading">Add application information!</span>
      <InputField />
      <span className="heading">Current Applications</span>
    </div>
  );
}

export default App;
