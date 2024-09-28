import React, { useState, useEffect } from 'react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { FaUserMd, FaUserCog, FaUserInjured } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import OtpCard from "@/components/OtpCard"
// import { signUp, signIn, signInWithGoogle, signOutUser, resetPassword, updatePasswordUser, verifyEmail } from "@/firebase/auth"
import { AuthProvider, useAuth } from '@/contexts/authContext'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";

// Initialize Firestore and Firebase Auth
const firestore = getFirestore();
const auth = getAuth();

function LoginPageContent() {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [showOtpCard, setShowOtpCard] = useState(false);
  const [adminHasEnteredOtp, setAdminHasEnteredOtp] = useState(false);
  const [selectedTab, setSelectedTab] = useState('patient');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userRole, setUserRole] = useState('patient');
  const navigate = useNavigate();

  useEffect(() => {
    const hasEnteredOtp = localStorage.getItem('adminEnteredOtp');
    if (hasEnteredOtp === 'true') {
      setAdminHasEnteredOtp(true);
    }
  }, []);

  const handleTabChange = (value) => {
    setSelectedTab(value);
    setUserRole(value);
    if (value === 'admin') {
      setShowOtpCard(!adminHasEnteredOtp);
    } else {
      setShowOtpCard(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      if (isLogin) {
        // Log in user with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserRole(userData.role);
          toast.success('Logged in successfully!');
          navigate('/'); // Navigate to home if user already exists
        } else {
          toast.success('Logged in successfully!');
          navigate(userRole === 'patient' ? '/registerform' : '/doctorform');
        }
  
      } else {
        // Sign up new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Add new user to Firestore
        await setDoc(doc(firestore, "users", user.uid), {
          name: name,
          email: user.email,
          role: userRole,
          createdAt: new Date(),
        });
  
        toast.success('Signed up successfully!');
        navigate(userRole === 'patient' ? '/registerform' : '/doctorform');
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Authentication failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
  
    try {
      // Sign in user with Google
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
  
      const userDoc = await getDoc(doc(firestore, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserRole(userData.role);
        toast.success('Logged in with Google successfully!');
        navigate('/'); // Navigate to home if user already exists
      } else {
        // Add new Google user to Firestore
        await setDoc(doc(firestore, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          role: userRole,
          createdAt: new Date(),
        });
  
        toast.success('Logged in with Google successfully!');
        navigate(userRole === 'patient' ? '/registerform' : '/doctorform');
      }
  
    } catch (error) {
      console.error("Error signing in with Google:", error);
      toast.error(`Google sign-in failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleResetPassword = async () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent. Please check your inbox.');
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error(`Password reset failed: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white overflow-hidden">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-0">
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 lg:pr-12 flex flex-col justify-center mb-4 lg:mb-0 overflow-y-auto"
        >
          <h1 className="text-xl lg:text-2xl font-bold text-[#8891e2] mb-2">{isLogin ? "Welcome Back!" : "Create an Account"}</h1>
          <p className="text-sm lg:text-base text-gray-600 mb-4">{isLogin ? "We're excited to see you again. Login to access your personalized healthcare experience." : "Join us to start your personalized healthcare journey."}</p>
          <Card className="w-full shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-[#8891e2] text-base lg:text-lg">{isLogin ? "Login" : "Sign Up"}</CardTitle>
              <CardDescription className="text-xs">{isLogin ? "Enter your credentials to access your account" : "Create your account to get started"}</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <form onSubmit={handleSubmit}>
                <div className="space-y-3">
                  {!isLogin && (
                    <div className="relative">
                      <Label htmlFor="name" className="mb-1 block text-sm">Name</Label>
                      <div className="relative">
                        <FiUser className="absolute top-2 left-2 text-gray-400" />
                        <Input id="name" type="text" placeholder="Full Name" className="pl-8 py-1 text-sm" value={name} onChange={(e) => setName(e.target.value)} required />
                      </div>
                    </div>
                  )}
                  <div className="relative">
                    <Label htmlFor="email" className="mb-1 block text-sm">Email</Label>
                    <div className="relative">
                      <FiMail className="absolute top-2 left-2 text-gray-400" />
                      <Input id="email" type="email" placeholder="Email" className="pl-8 py-1 text-sm" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                  </div>
                  <div className="relative">
                    <Label htmlFor="password" className="mb-1 block text-sm">Password</Label>
                    <div className="relative">
                      <FiLock className="absolute top-2 left-2 text-gray-400" />
                      <Input id="password" type="password" placeholder="Password" className="pl-8 py-1 text-sm" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                  </div>
                  {isLogin && (
                    <div className="text-right">
                      <a href="#" onClick={handleResetPassword} className="text-xs text-[#8891e2] hover:underline">Forgot Password?</a>
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col space-y-4 pt-2">
              <Button 
                className="w-full h-10 bg-[#8891e2] hover:bg-[#7a82d9] py-2 text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-md"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : (isLogin ? "Log in" : "Sign up")}
              </Button>
              <div className="flex items-center justify-center w-full">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-2 text-xs text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <Button 
                className="w-full h-10 bg-white hover:bg-gray-100 py-2 text-sm text-black font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-md border border-gray-300"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
              >
                <FcGoogle className="mr-2" />
                Continue with Google
              </Button>
              <Tabs defaultValue="patient" className="w-full" onValueChange={handleTabChange}>
                <TabsList className="grid w-full grid-cols-3 gap-3 bg-gray-100 p-2 rounded-lg h-18">
                  <TabsTrigger value="patient" className="py-2 text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-[#8891e2] data-[state=active]:shadow-md rounded-md hover:bg-gray-200">
                    <FaUserInjured className="mr-2 text-lg" />
                    Patient
                  </TabsTrigger>
                  <TabsTrigger value="doctor" className="py-2 text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-[#8891e2] data-[state=active]:shadow-md rounded-md hover:bg-gray-200">
                    <FaUserMd className="mr-2 text-lg" />
                    Doctor
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="py-2 text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-[#8891e2] data-[state=active]:shadow-md rounded-md hover:bg-gray-200">
                    <FaUserCog className="mr-2 text-lg" />
                    Admin
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="admin" className="mt-6">
                  {showOtpCard && <OtpCard className="bg-white shadow-lg rounded-lg p-6" />}
                </TabsContent>
              </Tabs>
            </CardFooter>
            <div className="bg-gray-100 p-6 -mt-4 rounded-b-lg">
              <p className="text-sm text-gray-700">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <a href="#" onClick={toggleAuthMode} className="text-[#8891e2] hover:underline font-semibold ml-2">
                  {isLogin ? "Sign up" : "Log in"}
                </a>
              </p>
            </div>
          </Card>
        </motion.section>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 h-48 lg:h-screen hidden lg:flex items-center justify-center lg:ml-12 mt-4 lg:mt-0"
          >
            <img
              src={
                selectedTab === 'patient'
                  ? "/patient-img.png"
                  : selectedTab === 'admin'
                  ? "/admin-img.png"
                  : "/doctor-img.png"
              }
              alt={`${selectedTab} Login`}
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <AuthProvider>
      <LoginPageContent />
    </AuthProvider>
  );
}