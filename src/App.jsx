import React, {useState, useEffect} from "react";
import CountryCard from './components/CountryCard';
import SearchBar from './components/SearchBar';


const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');



  


      return (

        <div>
          <SearchBar 
            value={searchValue} 
            onChange={setSearchValue} 
            onSearch={handleSearch} 
          />
          {countries.map((country, index) => (
            <CountryCard
              key={i}
              countryName={country.countryName}
              flagUrl={country.flagUrl}
              population={country.population}
              capital={country.capital}
            />
          ))}
        </div>
  );
};


export default App;