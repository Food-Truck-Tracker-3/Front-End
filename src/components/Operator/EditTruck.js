import React, { useState, useEffect } from 'react';
import {useHistory, useParams, useLocation} from "react-router-dom";
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const initialTruck = {
  name: '',
  description: '',
  cuisine: "",
  imageURL: '',
  city: '',
  hours: "",
  current_location: ""
};

const EditTruck = props => {
  const location = useLocation();
  const params = useParams();
  const [truck, setTruck] = useState(initialTruck);
  const { push } = useHistory();

  useEffect(() => {
      if(location.state) {
          setTruck(location.state);
      } else {
          axiosWithAuth()
            .get(`/api/operators/trucks/${params.id}`)
            .then(res => {
                console.log(res.data);
                setTruck(res.data);
            })
            .catch(err => console.log(err));
      };
  }, [location.state, params.id]);

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
    props.editTruck();
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

        <button>Edit Truck</button>
      </form>
    </div>
  );
};

export default EditTruck;