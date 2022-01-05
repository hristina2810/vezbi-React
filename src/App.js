import React from 'react';
import { Clothes } from './Clothes';
import { ModernClothes } from './ModernClothes'

export function App () {
  return(
    <div id="app">
      <h2>Welcome to my page</h2>
    <p><h7><b><u>Available clothes</u></b></h7></p>
    <ModernClothes availability={true}/>
    
    
</div>
  )
}

export default App;