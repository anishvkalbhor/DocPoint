import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@radix-ui/react-label";
import { FaUserMd, FaUser, FaEnvelope, FaAddressCard } from 'react-icons/fa';
import { MdLocationOn, MdContactPhone } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import axios from 'axios'; // Import Axios for making API requests

const db = getFirestore();

const DoctorContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      photo: null,
      registrationNo: "",
      yearOfRegistration: "",
      registrationProof: null,
      medicalCouncil: "",
      address: "",
      mobileNo: "",
    },
  });

  // Function to geocode address using OpenStreetMap
  const geocodeAddress = async (address) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: address,
          format: "json",
          limit: 1,
        },
      });
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { latitude: lat, longitude: lon };
      } else {
        throw new Error("No results found for the address");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      throw new Error("Failed to geocode address");
    }
  };

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      // Geocode the address to get latitude and longitude
      const { latitude, longitude } = await geocodeAddress(values.address);
      console.log("Geocoded location:", latitude, longitude);

      // Save the doctor details along with latitude and longitude
      await addDoc(collection(db, "doctors"), {
        name: values.name,
        email: values.email,
        mobileNo: values.mobileNo,
        address: values.address,
        registrationNo: values.registrationNo,
        yearOfRegistration: values.yearOfRegistration,
        medicalCouncil: values.medicalCouncil,
        location: {
          lat: latitude,
          lon: longitude,
        },
      });

      toast.success("Doctor registered successfully!");
      navigate('/');
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Failed to register doctor. Please try again.");
    }

    setIsLoading(false);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="max-w-4xl mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-white shadow-2xl rounded-3xl p-8 sm:p-12"
          >
            <section className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-violet-800">Doctor Registration</h1>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center text-violet-700 border-b pb-3">
                <FaUserMd className="w-8 h-8 mr-3 text-violet-500" />
                Doctor Information
              </h2>
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="name"
                label="Full Name"
                placeholder="Dr. John Doe"
                icon={<FaUser className="text-violet-500" />}
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                label="Email"
                placeholder="doctor@example.com"
                icon={<FaEnvelope className="text-violet-500" />}
              />
              <CustomFormField
                fieldType={FormFieldType.PHONE_INPUT}
                control={form.control}
                name="mobileNo"
                label="Mobile Number"
                placeholder="{+91} 123-4567-890"
                icon={<MdContactPhone className="text-violet-500" />}
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="address"
                label="Address"
                placeholder="123 Medical Street, City, State, ZIP"
                icon={<MdLocationOn className="text-violet-500" />}
              />
              <CustomFormField
                fieldType={FormFieldType.SELECT}
                control={form.control}
                name="medicalCouncil"
                label="Medical Council"
                placeholder="Select Medical Council"
                icon={<FaUserMd className="text-violet-500" />}
              >
                <SelectItem value="MCI">Medical Council of India (MCI)</SelectItem>
                <SelectItem value="AIIMS">All India Institute of Medical Sciences (AIIMS)</SelectItem>
              </CustomFormField>
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="registrationNo"
                label="Registration Number"
                placeholder="12345678"
                icon={<FaAddressCard className="text-violet-500" />}
              />
              <CustomFormField
                fieldType={FormFieldType.SELECT}
                control={form.control}
                name="yearOfRegistration"
                label="Year of Registration"
                placeholder="Select Year"
              >
                {years.map(year => (
                  <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                ))}
              </CustomFormField>
            </section>

            <SubmitButton isLoading={isLoading} className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xl py-4 rounded-xl">
              Register
            </SubmitButton>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default function DoctorForm(){
  return (
    <AuthProvider>
      <DoctorContent />
    </AuthProvider>
  );
}
