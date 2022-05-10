import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadInventory() {
  let data1, data2, data3;
  const manufacturersResponse = await fetch('http://localhost:8100/api/manufacturers');
  const modelsResponse = await fetch('http://localhost:8100/api/models');
  const autosResponse = await fetch('http://localhost:8100/api/automobiles');

  if(manufacturersResponse.ok) {
    data1 = await manufacturersResponse.json();
    console.log("data1", data1);
  } else {
    console.error("data1", manufacturersResponse);
  }
  if(modelsResponse.ok) {
    data2 = await modelsResponse.json();
    console.log("data2", data2);
  } else {
    console.error("data2", modelsResponse);
  }
  if(autosResponse.ok) {
    data3 = await autosResponse.json();
    console.log("data3", data3);
  } else {
    console.error("data3", autosResponse);
  }
  root.render(
    <React.StrictMode>
      <App manufacturers={data1.manufacturers} models={data2.models} automobiles={data3.autos}/>
    </React.StrictMode>
  );
}

loadInventory();



// async function loadInventory() {
//   const response = await fetch('http://localhost:8100/api/manufacturers/');
//   response = await fetch('http://localhost:8100/api/models/');
//   if(response.ok) {
//     const data = await response.json();

//     root.render(
//       <React.StrictMode>
//         <App manufacturers={data.manufacturers} models={[]}/>
//       </React.StrictMode>
//     );
//   } else {
//     console.error(response);
//   }
// }
// loadInventory();

// async function loadModels() {
//   const response = await fetch('http://localhost:8100/api/models/');
//   if(response.ok) {
//     const data = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App manufacturers={[]} models={data.models} />
//       </React.StrictMode>
//     );
//   } else {
//     console.error(response);
//   }
// }
// loadModels();