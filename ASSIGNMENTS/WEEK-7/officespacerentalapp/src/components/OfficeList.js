import React from 'react';

const OfficeList = () => {
  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      img: "https://images.unsplash.com/photo-1581093588401-70d3c5c5be04"
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Bangalore",
      img: "https://images.unsplash.com/photo-1590650046871-92c887180603"
    },
    {
      Name: "Regus",
      Rent: 40000,
      Address: "Mumbai",
      img: "https://images.unsplash.com/photo-1508387028294-5aef6f52959d"
    }
  ];

  return (
    <div>
      <h1>Office Space, at Affordable Range</h1>
      {officeList.map((item, index) => {
        const colorStyle = {
          color: item.Rent <= 60000 ? "red" : "green"
        };

        return (
          <div key={index} style={{ marginBottom: '30px' }}>
            <img
              src={item.img}
              width="25%"
              height="25%"
              alt="Office Space"
              style={{ borderRadius: "10px", marginBottom: "10px" }}
            />
            <h2>Name: {item.Name}</h2>
            <h3 style={colorStyle}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
