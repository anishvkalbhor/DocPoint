import React, { useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    contact: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    previousMedications: 'Ibuprofen, Paracetamol',
    dateOfBirth: '1990-01-01',
    occupation: 'Software Engineer',
    insuranceProvider: 'ABC Insurance',
    insurancePolicyNumber: 'POLICY123456',
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
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-600 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-purple-700">Your Profile</h2>

        <div className="flex flex-col items-center mt-6">
          <img
            src={user.image}
            alt="User"
            className="rounded-full w-32 h-32 object-cover border-4 border-purple-500"
          />
          {isEditing && (
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-2"
              accept="image/*"
            />
          )}
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block font-bold text-purple-600">Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full p-2 border border-l-violet-400 rounded mt-1"
              />
            ) : (
              <p className="text-gray-700">{user.name}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-purple-700">Email:</label>
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

          <div>
            <label className="block font-semibold text-purple-700">Phone:</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
            ) : (
              <p className="text-gray-700">{user.phone}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-purple-700">Address:</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
            ) : (
              <p className="text-gray-700">{user.address}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-purple-700">Previous Medications:</label>
            {isEditing ? (
              <textarea
                name="previousMedications"
                value={user.previousMedications}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                rows="2"
              />
            ) : (
              <p className="text-gray-700">{user.previousMedications || 'N/A'}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-purple-700">Date of Birth:</label>
            <p className="text-gray-700">{user.dateOfBirth}</p>
          </div>

          <div>
            <label className="block font-semibold text-purple-700">Occupation:</label>
            <p className="text-gray-700">{user.occupation}</p>
          </div>

          <div>
            <label className="block font-semibold text-purple-700">Insurance Provider:</label>
            <p className="text-gray-700">{user.insuranceProvider}</p>
          </div>

          <div>
            <label className="block font-semibold text-purple-700">Insurance Policy Number:</label>
            <p className="text-gray-700">{user.insurancePolicyNumber}</p>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={toggleEdit}
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition duration-300"
          >
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
