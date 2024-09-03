// src/Data.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Data.css';

interface LocationState {
  name: string;
  phone: string;
  age: number;
  gender: string;
  profileImage: string;
}

const Data: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState; // Cast location.state to LocationState
  const { name, phone, age, gender, profileImage } = state || {};

  return (
    <div className="data-container">
      <h2>User Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone No</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Profile Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>
              <img src={profileImage} alt="Profile" style={{ width: '100px', height: '100px' }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Data;
