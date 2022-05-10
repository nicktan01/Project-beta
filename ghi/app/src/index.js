import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );



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