import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { StateProvider } from './components/StateProvider';
import reducer,{initailState} from './components/reducer'
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initailState={initailState} reducer={reducer}>
      <App />
  </StateProvider>
     
 
);


 
