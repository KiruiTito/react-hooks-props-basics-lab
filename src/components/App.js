import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

const user = {
  name: "Your Name",
  city: "Your City",
  bio: "I am a web developer.",
  image: "https://via.placeholder.com/150",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername"
}

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} image={user.image} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
