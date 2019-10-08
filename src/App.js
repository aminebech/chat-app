import React from 'react';
import Contact from './components/Contact'


const App = () => {
  return (
    <div className="App">

      <Contact 
        name="Danny Hill" 
        avatar="https://randomuser.me/api/portraits/men/61.jpg" 
        online="true" 
      />

      <Contact 
        name="James Hamilton" 
        avatar="https://randomuser.me/api/portraits/men/97.jpg" 
        online="false" 
      />

      <Contact 
        name="Sherri Neal" 
        avatar="https://randomuser.me/api/portraits/women/81.jpg" 
        online="true" 
      />

    </div>
  )
}

export default App;
