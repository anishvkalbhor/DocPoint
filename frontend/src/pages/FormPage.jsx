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



const PatientContent = () => {
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
      ...PatientFormDefaultValues,
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values) {
    setIsLoading(true);
    console.log("Form submission started");

    
  
    const requiredFields = [
      'name', 'email', 'phone', 'date', 'gender', 'address', 'occupation',
      'emergencyContactName', 'emergencyContactNumber', 'identificationType',
      'identificationNumber', 'identificationDocument'
    ];
  
    const emptyFields = requiredFields.filter(field => !values[field]);
  
    if (emptyFields.length > 0) {
      console.log("Empty fields detected:", emptyFields);
      toast.error(`Please fill in all required fields: ${emptyFields.join(', ')}`);
      setIsLoading(false);
      return;
    }
  
    console.log("Form values:", values);
  
    const { name, email, phone, date, gender, address, occupation, emergencyContactName, emergencyContactNumber, identificationType, identificationNumber, identificationDocument} = values;
  
    // Store patient details in Firestore
    const savePatient = async () => {
        try {
          const identificationDocumentUrl = await uploadFile(identificationDocument[0]);
      
          const user = auth.currentUser; // Get the user object from the auth context
          if (!user) {
            throw new Error("User is not authenticated");
          }
      
          const userId = user.uid; // Get the user ID from the user object

          // The following line is where the error occurs if userId is not valid
          const userRef = doc(db, "users", userId); // Reference to the specific user document
          const patientsRef = collection(userRef, "patients"); // Reference to the patients subcollection
      
          await addDoc(patientsRef, {
            name: name,
            email: email,
            phone: phone,
            dateOfBirth: date,
            gender: gender,
            address: address,
            occupation: occupation,
            emergencyContact: {
              name: emergencyContactName,
              phone: emergencyContactNumber,
            },
            identification: {
              type: identificationType,
              number: identificationNumber,
              documentUrl: identificationDocumentUrl,  // Save the file URL in Firestore
            },
          });
    
          // Show success message
          toast.success("Patient registered successfully!");
          navigate("/");
          setIsLoading(false);
        }
        catch (error) {
          console.error("Error saving patient data:", error);
          toast.error("An error occurred while saving the patient data.");
        } finally {
          setIsLoading(false);
        };
        };
        savePatient();
      };
      

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
              <h1 className="text-5xl font-bold text-violet-800">Welcome 👋</h1>
              <p className="text-xl text-violet-600">Let us know more about yourself</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center text-violet-700 border-b pb-3">
                <FaUser className="w-8 h-8 mr-3 text-violet-500" />
                Personal Information
              </h2>
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="name"
                label="Full name"
                value ='{}'
                placeholder="Alister Fernandes"
                icon={<FaUser className="text-violet-500" />}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="alister@gmail.com"
                  icon={<FaEnvelope className="text-violet-500" />}
                />
                <CustomFormField
                  fieldType={FormFieldType.PHONE_INPUT}
                  control={form.control}
                  name="phone"
                  label="Phone number"
                  placeholder="{+91} 123-4567-890"
                  icon={<MdContactPhone className="text-violet-500" />}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CustomFormField
                  fieldType={FormFieldType.DATE_PICKER}
                  control={form.control}
                  name="date"
                  label="Date of Birth"
                  icon={<FaCalendarAlt className="text-violet-500" />}
                />
                <CustomFormField
                  fieldType={FormFieldType.SKELETON}
                  control={form.control}
                  name="gender"
                  label="Gender"
                  renderSkeleton={(field) => (
                    <FormControl>
                      <RadioGroup
                        className="flex h-11 gap-6 justify-start"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        {GenderOptions.map((option) => (
                          <div key={option} className="radio-group flex items-center">
                            <RadioGroupItem value={option} id={option} className="text-violet-500" />
                            <Label htmlFor={option} className="cursor-pointer ml-2 text-violet-700">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  )}
                  icon={<FaVenusMars className="text-violet-500" />}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="address"
                  label="Address"
                  placeholder="IC Colony, Borivali"
                  icon={<MdLocationOn className="text-violet-500" />}
                />
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="occupation"
                  label="Occupation"
                  placeholder="Software Engineer"
                  icon={<FaBriefcase className="text-violet-500" />}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="emergencyContactName"
                  label="Emergency Contact Name"
                  placeholder="Guardian's Name"
                  icon={<FaUser className="text-violet-500" />}
                />
                <CustomFormField
                  fieldType={FormFieldType.PHONE_INPUT}
                  control={form.control}
                  name="emergencyContactNumber"
                  label="Emergency Contact number"
                  placeholder="{+91} 123-4567-890"
                  icon={<MdContactPhone className="text-violet-500" />}
                />
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center text-violet-700 border-b pb-3">
                <MdLocalHospital className="w-8 h-8 mr-3 text-violet-500" />
                Medical Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="insuranceProvider"
                  label="Insurance Provider"
                  placeholder="LIC"
                  icon={<FaShieldAlt className="text-violet-500" />}
                />
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="insurancePolicyNumber"
                  label="Insurance Policy Number"
                  placeholder="ABC123456789"
                  icon={<FaFileAlt className="text-violet-500" />}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CustomFormField
                  fieldType={FormFieldType.TEXTAREA}
                  control={form.control}
                  name="allergies"
                  label="Allergies (if any)"
                  placeholder="Peanuts, Penicillin, Pollen"
                  icon={<FaAllergies className="text-violet-500" />}
                />
                <CustomFormField
                  fieldType={FormFieldType.TEXTAREA}
                  control={form.control}
                  name="currentMedication"
                  label="Current Medication (if any)"
                  placeholder="Ibuprofen 200mg, Paracetamol 500mg"
                  icon={<FaPills className="text-violet-500" />}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CustomFormField
                  fieldType={FormFieldType.TEXTAREA}
                  control={form.control}
                  name="familyMedicalHistory"
                  label="Family Medical History"
                  placeholder="Mother had insomnia, Father had heart disease"
                  icon={<FaUserFriends className="text-violet-500" />}
                />
                <CustomFormField
                  fieldType={FormFieldType.TEXTAREA}
                  control={form.control}
                  name="pastMedicalHistory"
                  label="Past Medical History"
                  placeholder="Appendectomy, Tonsillectomy"
                  icon={<FaHistory className="text-violet-500" />}
                />
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center text-violet-700 border-b pb-3">
                <FaAddressCard className="w-8 h-8 mr-3 text-violet-500" />
                Identification and Verification
              </h2>
              <CustomFormField
                fieldType={FormFieldType.SELECT}
                control={form.control}
                name="identificationType"
                label="Identification Type"
                placeholder="Select an Identification Type"
                icon={<FaAddressCard className="text-violet-500" />}
              >
                {IdentificationTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </CustomFormField>
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="identificationNumber"
                label="Identification Number"
                placeholder="123456789"
                icon={<FaAddressCard className="text-violet-500" />}
              />
              <CustomFormField
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="identificationDocument"
                label="Scanned copy of identification document"
                renderSkeleton={(field) => (
                  <FormControl>
                    <FileUploader files={field.value} onChange={field.onChange} />
                  </FormControl>
                )}
                icon={<FaFileAlt className="text-violet-500" />}
              />
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center text-violet-700 border-b pb-3">
                <FaHandshake className="w-8 h-8 mr-3 text-violet-500" />
                Consent and Privacy
              </h2>
              <CustomFormField
                fieldType={FormFieldType.CHECKBOX}
                control={form.control}
                name="treatmentConsent"
                label="I consent to treatment"
              />
              <CustomFormField
                fieldType={FormFieldType.CHECKBOX}
                control={form.control}
                name="disclosureConsent"
                label="I consent to disclosure of information"
              />
              <CustomFormField
                fieldType={FormFieldType.CHECKBOX}
                control={form.control}
                name="privacyConsent"
                label="I consent to privacy policy"
              />
            </section>

            <SubmitButton isLoading={isLoading} className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xl py-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Get Started</SubmitButton>
          </form>
        </Form>
      </div>
    </div>
  );
};


export default function FormPage() {
  return (
    <AuthProvider>
      <PatientContent />
    </AuthProvider>
  );
}