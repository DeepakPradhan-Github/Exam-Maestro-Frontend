// src/Signup.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<string>('Male');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setProfileImage(file);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !phone || !age || !profileImage) {
      setError('All fields are required');
      return;
    }

    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('age', String(age));
    formData.append('gender', gender);
    formData.append('profileImage', profileImage);

    try {
      // Replace with your API endpoint
      const response = await fetch('http://your-backend-url/api/signup', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();

      // Pass data to the next page
      navigate('/data', {
        state: {
          name,
          phone,
          age,
          gender,
          profileImage: URL.createObjectURL(profileImage), // Create a URL for the profile image
        },
      });

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone No:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="profileImage">Profile Image:</label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
