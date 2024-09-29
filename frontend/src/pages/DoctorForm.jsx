import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    GenderOptions,
    IdentificationTypes,
    PatientFormDefaultValues,
} from "@/constants";
import { SelectItem } from "@/components/ui/select";
import { FaUser, FaEnvelope, FaBriefcase, FaAddressCard, FaShieldAlt, FaFileAlt, FaHandshake, FaCalendarAlt, FaVenusMars, FaAllergies, FaPills, FaUserFriends, FaHistory } from 'react-icons/fa';
import { MdLocationOn, MdContactPhone, MdLocalHospital } from 'react-icons/md';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import FileUploader from "@/components/FileUploader";
import {  collection, addDoc, doc, getFirestore} from 'firebase/firestore';
import { getStorage , ref, uploadBytes, getDownloadURL  } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';  
import { AuthProvider } from '@/contexts/authContext'
import { getAuth } from "firebase/auth";


const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

const DoctorContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const uploadFile = async (file) => {
    if (!file) return null; // If there's no file, return null
    const storageRef = ref(storage, `identificationDocuments/${uuidv4()}-${file.name}`);  // Generate a unique path
    await uploadBytes(storageRef, file);  // Upload the file to Firebase Storage
    const downloadURL = await getDownloadURL(storageRef);  // Get the file's download URL
    return downloadURL;
  };

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

  function onSubmit(values) {
    setIsLoading(true);
    console.log("Form submission started");
    
    const requiredFields = [
      'name', 'email', 'photo', 'registrationNo', 'yearOfRegistration',
      'registrationProof', 'medicalCouncil', 'address', 'mobileNo'
    ];

    const emptyFields = requiredFields.filter(field => !values[field]);

    if (emptyFields.length > 0) {
      console.log("Empty fields detected:", emptyFields);
      toast.error(`Please fill in all required fields: ${emptyFields.join(', ')}`);
      setIsLoading(false);
      return;
    }

    console.log("Form values:", values);

    // Simulating an API call
    setTimeout(() => {
      try {
        // Simulating a successful submission
        console.log("Form submitted successfully");
        setIsLoading(false);
        toast.success("Registration successful!");
        navigate('/');
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again.");
        setIsLoading(false);
      }
    }, 2000);
  }

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 50}, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="max-w-4xl mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-white shadow-2xl rounded-3xl p-8 sm:p-12"
          >
            <section className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-violet-800">Doctor Registration</h1>
              <p className="text-xl text-violet-600">Please provide your professional details</p>
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
                <SelectItem value="ICMR">Indian Council of Medical Research (ICMR)</SelectItem>
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
                icon={<FaAddressCard className="text-violet-500" />}
              >
                {years.map(year => (
                  <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                ))}
              </CustomFormField>
              <CustomFormField
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="registrationProof"
                label="Proof of Registration"
                renderSkeleton={(field) => (
                  <FormControl>
                    <FileUploader files={field.value} onChange={field.onChange} />
                  </FormControl>
                )}
                icon={<FaFileAlt className="text-violet-500" />}
              />
              <CustomFormField
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="photo"
                label="Profile Photo"
                renderSkeleton={(field) => (
                  <FormControl>
                    <FileUploader files={field.value} onChange={field.onChange} />
                  </FormControl>
                )}
                icon={<FaFileAlt className="text-violet-500" />}
              />
            </section>

            <SubmitButton isLoading={isLoading} className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xl py-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Register</SubmitButton>
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