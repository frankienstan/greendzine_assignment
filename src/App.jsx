import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Employees from "./Employees";
import Navigation from "./Navigation";
import Login from "./Login"; // Your Login component

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleLogin = () => {
    setLoggedIn(true);
    setCurrentPage("dashboard"); // Redirect to Dashboard after successful login
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentPage("login"); // Redirect to Login page after logout
  };

  let pageToShow;

  if (loggedIn) {
    if (currentPage === "dashboard") {
      pageToShow = <Dashboard />;
    } else if (currentPage === "employees") {
      pageToShow = <Employees />;
    }
  } else {
    pageToShow = <Login onLogin={handleLogin} />;
  }

  return (
    <div className="canvas">
      {pageToShow}
      <Navigation
        onPageChange={setCurrentPage}
        onLogout={handleLogout}
        loggedIn={loggedIn}
      />
    </div>
  );
};

export default App;
