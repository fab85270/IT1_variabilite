import React, { useState } from 'react';
import './Velo.css';

const Velo = () => {
  const [address, setAddress] = useState('');
  const [bikes, setBikes] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [availableBikes, setAvailableBikes] = useState(0);
  const [availableStands, setAvailableStands] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const ebikeImages = [
    'https://images.squarespace-cdn.com/content/57d61144e58c62ac0e3179cf/0545ec9c-1eca-4b4d-bf1d-5763a2eea4c8/Propella-blue-orange+background.jpeg?format=1500w&content-type=image%2Fjpeg',
    'https://cdn.futura-sciences.com/sources/images/l-urbain.jpg',
  ];

  const bikeImage = [
    'https://www.01net.com/app/uploads/2022/06/MEA-4.jpg',
    'https://adfnjoxprq.cloudimg.io/v7/_lapierre_prod/thumbnail/64/bb/9f/1648474576/E-Sensium%202.2%20MY21%20Web%20-%20View%20PNG_800x800.png',
  ];

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

  const generateFakeIds = (count) => {
    const fakeIds = [];
    for (let i = 1; i <= count; i++) {
      fakeIds.push(`fake-id-${i}`);
    }
    return fakeIds;
  };

  const renderRentButtons = (bike) => {
    const fakeIds = generateFakeIds(bike.fields.ebike);
      const randomImage = ebikeImages[Math.floor(Math.random() * ebikeImages.length)];

      return (
        <div className="bike-row">
          {fakeIds.map((fakeId) => {
      
            const togglePopup = () => {
              setIsOpen(!isOpen);
            };
      
            return (
              <div key={fakeId} className="bike-item">
                <img src={randomImage} />
                <button onClick={togglePopup}>
                  Louer ce vélo 
                </button>
                {isOpen && (
                  <div className="popup">
                    <div className="popup-content">
                      Le vélo électrique choisi est bien loué 
                      <button onClick={togglePopup}>
                        Fermer
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
        } 
        const renderRentButton = (bike) => {
          const fakeIdd = generateFakeIds(bike.fields.mechanical);
            const randomImage = bikeImage[Math.floor(Math.random() * bikeImage.length)];
      
            return (
              <div className="bike-row">
                {fakeIdd.map((fakeId) => {
            
                  const togglePopup = () => {
                    setIsOpen(!isOpen);
                  };
            
                  return (
                    <div key={fakeId} className="bike-item">
                      <img src={randomImage} />
                      <button onClick={togglePopup}>
                        Louer ce vélo
                      </button>
                      {isOpen && (
                        <div className="popup">
                          <div className="popup-content">
                            Le vélo mécanique choisi est bien loué 
                            <button onClick={togglePopup}>
                              Fermer
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
              }

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Entrez une adresse"
        />
        <button className="search-button" onClick={handleGeocoding}>
          Rechercher
        </button>
      </div>
      <h2 >Nous avons trouvé au total {availableBikes} de Vélibs disponibles </h2>
      <h2>Nous avons trouvé au total {availableStands} de bornes disponibles </h2>
      {bikes.map((bike) => (
        <div key={bike.recordid}>
          <h1 className="bike-name">{bike.fields.name}</h1>
          <div className="container">
          <h3>Le nombre total de vélos disponibles dans cette station : {bike.fields.numbikesavailable}</h3>
          <p> Station disponible pour location : {bike.fields.is_renting}</p>
          <p> Station disponible pour retour de vélo : {bike.fields.is_renting}</p>
          <p>Vélos électriques disponibles : {bike.fields.ebike}</p>
          <p>Vélos mécaniques disponibles : {bike.fields.mechanical}</p>
          <p>Bornes disponibles : {bike.fields.numdocksavailable}</p>
          </div>
          <h3 className="available-stands"> Choisissez votre vélo électrique : {bike.fields.ebike}</h3>
          {renderRentButtons(bike)}
          <h3 className="available-stands"> Choisissez votre vélo mécanique : {bike.fields.mechanical}</h3>
          {renderRentButton(bike)}
        </div>
      ))}
    </div>
  );
};

export default Velo;
