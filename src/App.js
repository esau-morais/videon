import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Pages
import Splash from './pages/splash';
import Home from './pages/home';
import Room from './pages/room';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 2500)

  return (
    <Router>
      {
        isLoading ? (
          <Route exact path="/" component={Splash} />
        )
          : (
            <Route exact path="/" component={Home} />
          )
      }
      <Route path="/room/:id" component={Room} />
    </Router>
  );
}

export default App;
