import React, { useContext } from 'react';
import { AppContext } from '../../App';

const Add = () => {
  const { url } = useContext(AppContext);

  const handleSubmit = async () => {
    const response = await fetch(`${url}/your-api-endpoint`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ /* your form data */ })
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h2>Add Page</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Add;
