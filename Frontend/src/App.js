import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import DashHome from './Dashboard/DashHome';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        {user ? <DashHomeRouter user={user} /> : <Navbar />}
        <Routes>
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

function DashHomeRouter({ user }) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/" />} />
      <Route path="/user/*" element={<DashHome user={user} />} />
    </Routes>
  );
}

export default App;
