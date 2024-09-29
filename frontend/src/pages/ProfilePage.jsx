import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();



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
      ordersSnap.forEach((doc) => {
        orders.push({ id: doc.id, ...doc.data() });
      });
      setOrdersData(orders);
    };

    fetchData();
    fetchOrdersData(); 
  }, [userId]);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 border rounded-lg shadow-md bg-white flex gap-8">
      
      <div className="w-1/3 flex flex-col items-center">
        
      
        <div className="mt-4">
          <label className="block font-semibold text-lg">Name:</label>
          
            <p className="text-gray-700">{u.name}</p>
          
        </div>
        <div className="mt-4">
          <label className="block font-semibold text-lg">Contact:</label>
           
            <p className="text-gray-700">{u.email}</p>

          <ul>
            {d.map((order) => (
              <li key={d.id}>
                {/* Display order details here */}
                <p>{order.address}</p>
                <p>{order.mobileNo}</p>
                <p>{order.medicalCouncil}</p>
                <p>{order.registrationNo}</p>
                <p>{order.yearOfRegistration}</p>
              </li>
            ))}
          </ul>
        
          
        </div>
      </div>
      
    </div>
  );
};


export default ProfilePage;