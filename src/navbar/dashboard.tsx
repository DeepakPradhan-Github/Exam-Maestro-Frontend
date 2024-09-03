// src/Dashboard.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

interface LocationState {
  email: string;
}

const Dashboard: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState; // Cast location.state to LocationState
  const { email } = state || {}; // Retrieve email from state

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
