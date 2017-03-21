import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../container/App';

export default function AppRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
};
