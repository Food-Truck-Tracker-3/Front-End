import React, {useState} from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialTruck = {
  name: '',
  description: '',
  cuisine: "",
  imageUrl: '',
  city: '',
  hours: "",
  current_location: ""
};

const TruckList = props => {
  
  const [editing, setEditing] = useState(false);
  const [truckToEdit, setTruckToEdit] = useState(initialTruck);

  const editTruck = truck => {
    setEditing(true);
    setTruckToEdit(truck);
  };

  const saveEdit = e => {
    e.preventDefault();
  
    axiosWithAuth()
      .put(`https://foodtruck-backend-3.herokuapp.com/api/operators/trucks/${truckToEdit.id}`, truckToEdit)
      .then(res => {
        setEditing(false);
        setTruckToEdit(initialTruck);
      })
      .catch(err => console.log(err));
  };

  const deleteTruck = truck => {
    
    axiosWithAuth()
      .delete(`https://foodtruck-backend-3.herokuapp.com/api/operators/trucks/${truck.id}`)
      .then(res => {
        setEditing(false);
        setTruckToEdit(initialTruck);
      })
      .catch(err => console.log(err));
  };



  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
         .post(`https://foodtruck-backend-3.herokuapp.com/api/operators/trucks`, truckToEdit)
         .then(res => {
             setTruckToEdit(initialTruck);
         })
         .catch(err => console.log(err));
  };




  return (
    <div>
      <h3>Trucks</h3>
      {props.truckList.map(truck => (
        <div key={truck.id} className='truck-container'>
          <h4>{truck.name}</h4>
          <img scr={truck.imageUrl} alt="truck"/>
          <p>Cuisine: {truck.cuisine}</p>
          <p>Description: {truck.description}</p>
          <p>Location: {truck.current_location}, {truck.city}</p>
          <p>Hours: {truck.hours}</p>
          <button 
            onClick={() => editTruck(truck)}
          >
            Edit
          </button>

          <button 
            onClick={e => {
            e.preventDefault();
            deleteTruck(truck);
          }}>
            Delete
          </button>
        </div>
      ))}

      {editing ? (
        <form onSubmit={saveEdit}>
          <legend>Edit Truck</legend>
          <label>
            Name:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, name: e.target.value })
              }
              value={truckToEdit.name}
            />
          </label>

          <label>
            Description:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, description: e.target.value })
              }
              value={truckToEdit.description}
            />
          </label>

          <label>
            Cuisine:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, cuisine: e.target.value })
              }
              value={truckToEdit.cuisine}
            />
          </label>

          <label>
            Image URL:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, imageUrl: e.target.value })
              }
              value={truckToEdit.imageUrl}
            />
          </label>

          <label>
            City:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, city: e.target.value })
              }
              value={truckToEdit.city}
            />
          </label>

          <label>
            Hours:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, hours: e.target.value })
              }
              value={truckToEdit.hours}
            />
          </label>

          <label>
            Current Location:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, current_location: e.target.value })
              }
              value={truckToEdit.current_location}
            />
          </label>
          <div>
            <button type="submit">save</button>
            <button onClick={() => {
              setEditing(false);
              setTruckToEdit(initialTruck);
            }}>cancel</button>
          </div>
        </form>
      ) :(
        <form onSubmit={handleSubmit}>
          <legend>Add Truck</legend>
          <label>
            Name:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, name: e.target.value })
              }
              value={truckToEdit.name}
            />
          </label>

          <label>
            Description:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, description: e.target.value })
              }
              value={truckToEdit.description}
            />
          </label>

          <label>
            Cuisine:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, cuisine: e.target.value })
              }
              value={truckToEdit.cuisine}
            />
          </label>

          <label>
            Image URL:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, imageUrl: e.target.value })
              }
              value={truckToEdit.imageUrl}
            />
          </label>

          <label>
            City:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, city: e.target.value })
              }
              value={truckToEdit.city}
            />
          </label>

          <label>
            Hours:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, hours: e.target.value })
              }
              value={truckToEdit.hours}
            />
          </label>

          <label>
            Current Location:
            <input
              onChange={e =>
                setTruckToEdit({ ...truckToEdit, current_location: e.target.value })
              }
              value={truckToEdit.current_location}
            />
          </label>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TruckList;
