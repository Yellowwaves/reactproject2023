import { useState } from 'react';

function Filter({ countries, onFilter }) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedMagnitude, setSelectedMagnitude] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleMagnitudeChange = (event) => {
    setSelectedMagnitude(event.target.value);
  };

  const handleFilterClick = () => {
    onFilter(selectedCountry, selectedMagnitude);
  };

  return (
    <div>
      <label>
        Choix du pays:
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Tous les pays</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Choix de la magnitude:
        <select value={selectedMagnitude} onChange={handleMagnitudeChange}>
          <option value="">Toutes les magnitudes</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="8+">8+</option>
        </select>
      </label>
      <br />
      <button onClick={handleFilterClick}>Filtrer</button>
    </div>
  );
}

export default Filter;
