import React, { useState } from 'react';

const Velo = () => {
  const [address, setAddress] = useState('');
  const [bikes, setBikes] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [availableBikes, setAvailableBikes] = useState(0);
  const [availableStands, setAvailableStands] = useState(0);

  const handleGeocoding = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setLatitude(lat);
        setLongitude(lon);
        handleSearch(lat, lon);
      } else {
        // Aucun résultat trouvé
        setLatitude('');
        setLongitude('');
        setBikes([]);
        setAvailableBikes(0);
        setAvailableStands(0);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&geofilter.distance=${lat},${lon},2000`
      );
      const data = await response.json();
      setBikes(data.records);
      setAvailableBikes(data.nhits); // Récupération du nombre total de vélibs disponibles
      setAvailableStands(data.nhits - data.records.length); // Calcul du nombre de bornes disponibles
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Entrez une adresse"
      />
      <button onClick={handleGeocoding}>Rechercher</button>
      <p>Nombre de Vélibs disponibles : {availableBikes}</p>
      <p>Nombre de bornes disponibles : {availableStands}</p>
      {bikes.map((bike) => (
            <div key={bike.recordid}>
              <h3>{bike.fields.name}</h3>
              <p>Available Bikes: {bike.fields.numbikesavailable}</p>
              <p>Available Stands: {bike.fields.numdocksavailable}</p>
              <p>Available ebike: {bike.fields.ebike}</p>
            </div>))}
    </div>
  );
};

export default Velo;
