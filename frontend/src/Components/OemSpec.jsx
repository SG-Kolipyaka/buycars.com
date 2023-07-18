import React, { useState, useEffect } from 'react';
import '../css/oemSpec.css';

const OemSpec = () => {
  const [specs, setSpecs] = useState([]);
  const [searchName, setSearchName] = useState('');

  const dummyData = [
    {
      id: 1,
      name: 'Car A',
      year: 2022,
      listPrice: 25000,
      colors: ['Red', 'Blue', 'Silver'],
      mileage: '10,000',
      power: 150,
      maxSpeed: 200,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHH8nAv-FOm2hrE9q1G09P_jfqj9gfj74kUg&usqp=CAU'
    },
    {
      id: 2,
      name: 'Car B',
      year: 2021,
      listPrice: 30000,
      colors: ['Black', 'White', 'Gray'],
      mileage: '8,000',
      power: 180,
      maxSpeed: 220,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwBatUShJXI5IryVAWJOb7WnW3ztIkFVOCw&usqp=CAU'
    },
    
  ];

  useEffect(() => {
    setSpecs(dummyData);
  }, []);

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const filteredSpecs = specs.filter((spec) =>
    spec.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="gg1">
      <h2 className="gg2">OEM Specifications</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchName}
        onChange={handleSearch}
      />
      <br />
      <br />
      <table className="gg2">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Year</th>
            <th>List Price</th>
            <th>Colors</th>
            <th>Mileage</th>
            <th>Power (BHP)</th>
            <th>Max Speed</th>
          </tr>
        </thead>
        <tbody>
          {filteredSpecs.map((spec) => (
            <tr key={spec.id}>
              <td>
                <img src={spec.image} alt={spec.name} className="car-image" />
              </td>
              <td>{spec.name}</td>
              <td>{spec.year}</td>
              <td>{spec.listPrice}</td>
              <td>{spec.colors.join(', ')}</td>
              <td>{spec.mileage}</td>
              <td>{spec.power}</td>
              <td>{spec.maxSpeed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OemSpec;
