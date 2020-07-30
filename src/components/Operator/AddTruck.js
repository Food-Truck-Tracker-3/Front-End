import React, { useState } from 'react';
import {useHistory} from "react-router-dom";

const initialTruck = {
  name: '',
  description: '',
  cuisine: "",
  imageURL: '',
  city: '',
  hours: "",
  current_location: ""
};

const AddTruck = props => {
  const [truck, setTruck] = useState(initialTruck);
  const { push } = useHistory();

  const changeHandler = ev => {
    ev.persist();

    let value = ev.target.value;

    setTruck({
      ...truck,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTruck();
    push(`/operator/${truck.operator_id}`);
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="name"
          value={truck.name}
        />
        <div className="baseline" />

        <input
          type="text"
          name="description"
          onChange={changeHandler}
          placeholder="Description"
          value={truck.description}
        />
        <div className="baseline" />

        <input
          type="text"
          name="cuisine"
          onChange={changeHandler}
          placeholder="Cuisine"
          value={truck.cuisine}
        />
        <div className="baseline" />

        <input
          type="text"
          name="imageURL"
          onChange={changeHandler}
          placeholder="Image"
          value={truck.imageURL}
        />
        <div className="baseline" />

        <input
          type="text"
          name="city"
          onChange={changeHandler}
          placeholder="City"
          value={truck.city}
        />
        <div className="baseline" />

        <input
          type="text"
          name="hours"
          onChange={changeHandler}
          placeholder="Hours"
          value={truck.hours}
        />
        <div className="baseline" />

        <input
          type="text"
          name="current_location"
          onChange={changeHandler}
          placeholder="Current Location"
          value={truck.current_location}
        />
        <div className="baseline" />

        <button>Add New Truck</button>
      </form>
    </div>
  );
};

export default AddTruck;