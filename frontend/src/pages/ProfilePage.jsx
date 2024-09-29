import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

const ProfilePage = () => {
  const [doctorData, setDoctorData] = useState(null); // Doctor data state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchDoctorData = async () => {
      const user = auth.currentUser;

      if (user) {
        const userId = user.uid;
        try {
          const docRef = doc(db, 'doctors', userId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setDoctorData(docSnap.data());
          } else {
            setError('No doctor data found!');
          }
        } catch (err) {
          setError('Error fetching doctor data!');
        }
      } else {
        setError('User is not authenticated!');
      }
      setLoading(false);
    };

    fetchDoctorData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 border rounded-lg shadow-md bg-white">
      <div className="flex items-center gap-8">
        {/* Profile Image */}
        <div>
          <img
            src={doctorData.profileImage || 'https://via.placeholder.com/150'}
            alt="Doctor Profile"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Doctor's Information */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{doctorData.name || 'Doctor Name'}</h2>
          <p className="text-xl text-gray-600">{doctorData.specialty || 'Specialty'}</p>
          <p className="text-sm text-gray-500">{doctorData.yearsOfExperience} years of experience</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-700">Contact Information</h3>
        <div className="mt-2">
          <p className="flex items-center gap-2 text-lg text-gray-600">
            {doctorData.phone || 'Phone Number'}
          </p>
          <p className="text-lg text-gray-600">{doctorData.email || 'Email Address'}</p>
          <p className="text-lg text-gray-600">Clinic: {doctorData.clinicAddress || 'Clinic Address'}</p>
        </div>
      </div>

      {/* Professional Information */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-700">Professional Information</h3>
        <p className="text-lg text-gray-600">Qualification: {doctorData.qualification || 'Qualification'}</p>
        <p className="text-lg text-gray-600">Current Clinic: {doctorData.currentClinic || 'Clinic Name'}</p>
      </div>

      {/* Consultation Details */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-700">Consultation Details</h3>
        <p className="text-lg text-gray-600">Available Slots: {doctorData.availableSlots || 'Slots Info'}</p>
        <p className="text-lg text-gray-600">Consultation Fee: ₹{doctorData.consultationFee || '0.00'}</p>
        <p className="text-lg text-gray-600">Consultation Type: {doctorData.consultationType || 'Online/Offline'}</p>
      </div>
    </div>
  );
};

export default ProfilePage;