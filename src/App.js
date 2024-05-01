import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [image, setImage] = useState("");

  const handleImageGenerate = async () => {
    try {
      const response = await axios.get('https://source.unsplash.com/random', { responseType: 'blob' });
      const imageUrl = URL.createObjectURL(response.data);
      setImage(imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="card" style={{ width: '38rem', textAlign: 'center' }}>
        {image && <img src={image} className="card-img-top" alt='Background' style={{ width: '100%', height: '500px',boxShadow:'5px 5px 10px red,-5px -5px 10px yellow'}} />}
        <div className="card-body">
          <div className='poll' style={{height:'80px',width:'20px',backgroundColor:'red',position:'absolute',left :'775px'}}></div>
          <button className="btn btn-primary" onClick={handleImageGenerate} style={{position:'absolute',left :'710px',top:'780px'}}>Click to Generate Image</button>
        </div>
      </div>
    </div>
  );
}