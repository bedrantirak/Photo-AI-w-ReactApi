
import React,{useState} from 'react';
import axios from "axios";
import './App.css';

function App() {
  const[image,setImage] = useState("")

  const handleChange = ()=>{
   // https://api.generated.photos/api/v1/faces?api_key=YOUR_API_KEY  , you should get your api key from generated photo and paste the link.
    axios.get("https://api.generated.photos/api/v1/faces?api_key=YOUR_API_KEY&order_by=random").then(res =>{
      const uri = res.data.faces[0].urls[4][512]
      uri && setImage(uri)
    }).catch(err =>{

    })
  }

  return (
    <div className="App">
    <h1>AI Photo Generator</h1>
    {image && <img src={image} alt="AI Face" />}
    <button type="button" onClick={handleChange}>
      New Image
    </button>
    </div>
  );
}

export default App;
