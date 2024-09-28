export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male",
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Aadhar Card",
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Passport",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "../assets/doctor1.png",
    name: "Shyam Sunder Bhansali",
  },
  {
    image: "../assets/doctor2.png",
    name: "Seema Rao",
  },
  {
    image: "../assets/doctor3.png",
    name: "Ashok Seth",
  },
  {
    image: "../assets/doctor4.png",
    name: "Naresh Trehan",
  },
  {
    image: "../assets/doctor5.png",
    name: "Randeep Guleria",
  },
  {
    image: "../assets/doctor6.png",
    name: "P. Raghu Ram",
  },
  {
    image: "../assets/doctor7.png",
    name: "Shailaja Desai ",
  },
  {
    image: "../assets/doctor8.png",
    name: "Sushila Kataria",
  },
  {
    image: "../assets/doctor9.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "../../public/check.svg",
  pending: "../../public/pending.svg",
  cancelled: "../../public/cancelled.svg",
};