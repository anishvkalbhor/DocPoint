import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();



function ProfilePage() {
  const [u, setUserData] = useState([]);
  const [d, setOrdersData] = useState([]);
  const user = auth.currentUser;
  const userId = user.uid;

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    const fetchOrdersData = async () => {
      const ordersRef = collection(db, 'users', userId, 'doctor'); // Path to subcollection
      const ordersSnap = await getDocs(ordersRef);
      const orders=[];
      
      for (const doc of ordersSnap.docs) {
        const orderData = doc.data();
        const photoRef = ref(storage, orderData.photoFile);
        const photoURL = await getDownloadURL(photoRef);
        orders.push({ id: doc.id, ...orderData, photoURL });
      }

      setOrdersData(orders);
    };

    fetchData();
    fetchOrdersData(); 
  }, [userId]);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 border rounded-lg shadow-md bg-white flex gap-8">
      

          <ul>
            {d.map((order) => (
              <li key={d.id}>
              <div className="flex items-center gap-8">
        {/* Profile Image */}
        <div>
          <img
            src={order.photoURL}
            alt="Doctor Profile"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Doctor's Information */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{u.name || 'Doctor Name'}</h2>
          <p className="text-xl text-gray-600">{order.specialization || 'Specialty'}</p>
          <p className="text-sm text-gray-500">{order.experience} years of experience</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-700">Contact Information</h3>
        <div className="mt-2">
          <p className="flex items-center gap-2 text-lg text-gray-600">
            {order.mobileNo || 'Phone Number'}
          </p>
          <p className="text-lg text-gray-600">{u.email || 'Email Address'}</p>
          <p className="text-lg text-gray-600">Clinic: {order.address || 'Clinic Address'}</p>
        </div>
      </div>

      {/* Professional Information */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-700">Professional Information</h3>
        <p className="text-lg text-gray-600">Qualification: {order.qualification || 'Qualification'}</p>
      </div>

      {/* Consultation Details */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-700">Consultation Details</h3>
        <p className="text-lg text-gray-600">Working Hours: {order.workingHours || 'Slots Info'}</p>
        <p className="text-lg text-gray-600">Consultation Fee: ₹{order.consultationFee || '0.00'}</p>
      </div>

              </li>
            ))}
          </ul>
        
      
    </div>
  );
};


export default ProfilePage;