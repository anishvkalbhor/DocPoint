import React, { useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    contact: 'john.doe@example.com',
    address: '123 Main St, City, Country',
    dob: '1990-01-01',
    occupation: 'Software Engineer',
    insuranceProvider: 'ABC Health Insurance',
    insurancePolicyNumber: '123456789',
    previousMedications: 'Ibuprofen, Paracetamol',
    image: 'https://via.placeholder.com/150',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({ ...prevUser, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 border rounded-lg shadow-md bg-white flex gap-8">
      {/* Left Section */}
      <div className="w-1/3 flex flex-col items-center">
        <img src={user.image} alt="User" className="rounded-full w-40 h-40 object-cover" />
        {isEditing && (
          <input type="file" onChange={handleImageChange} className="mt-2" />
        )}
        <div className="mt-4">
          <label className="block font-semibold text-lg">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            />
          ) : (
            <p className="text-gray-700">{user.name}</p>
          )}
        </div>
        <div className="mt-4">
          <label className="block font-semibold text-lg">Contact:</label>
          {isEditing ? (
            <input
              type="text"
              name="contact"
              value={user.contact}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            />
          ) : (
            <p className="text-gray-700">{user.contact}</p>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/3">
        <div className="mb-4">
          <label className="block font-semibold text-lg">Address:</label>
          <p className="text-gray-700">{user.address}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-lg">Date of Birth:</label>
          <p className="text-gray-700">{user.dob}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-lg">Occupation:</label>
          <p className="text-gray-700">{user.occupation}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-lg">Insurance Provider:</label>
          <p className="text-gray-700">{user.insuranceProvider}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-lg">Insurance Policy Number:</label>
          <p className="text-gray-700">{user.insurancePolicyNumber}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-lg">Previous Medications:</label>
          <p className="text-gray-700">{user.previousMedications}</p>
        </div>
      </div>

      {/* Edit Button */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={toggleEdit}
          className="bg-violet-600 text-white p-2 rounded hover:bg-violet-700 transition duration-300"
        >
          {isEditing ? 'Save' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
