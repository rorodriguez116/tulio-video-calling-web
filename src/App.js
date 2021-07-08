import React from 'react';
import './App.css';
import VideoChat from './VideoChat';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Welcome to Tulio</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Effortless video calling
        </p>
      </footer>
    </div>
  );
};

export default App;
