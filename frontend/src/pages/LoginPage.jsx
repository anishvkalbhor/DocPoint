import React, { useState, useEffect } from 'react'
import { FiMail, FiLock } from 'react-icons/fi'
import { FaUserMd, FaUserCog, FaUserInjured } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import OtpCard from "@/components/OtpCard"


export default function LoginPage() {
  const [showOtpCard, setShowOtpCard] = useState(false);
  const [adminHasEnteredOtp, setAdminHasEnteredOtp] = useState(false);
  const [selectedTab, setSelectedTab] = useState('patient');

  useEffect(() => {
    const hasEnteredOtp = localStorage.getItem('adminEnteredOtp');
    if (hasEnteredOtp === 'true') {
      setAdminHasEnteredOtp(true);
    }
  }, []);

  const handleTabChange = (value) => {
    setSelectedTab(value);
    if (value === 'admin') {
      setShowOtpCard(!adminHasEnteredOtp);
    } else {
      setShowOtpCard(false);
    }
  };

  return (
    <div className="flex h-screen max-h-screen bg-white">
      
      <div className="flex w-full max-w-7xl mx-auto px-6">
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-1/2 pr-12 flex flex-col justify-center"
        >
          <h1 className="text-4xl font-bold text-[#8891e2] mb-6">Welcome Back!</h1>
          <p className="text-xl text-gray-600 mb-10">We're excited to see you again. Login to access your personalized healthcare experience.</p>
          <Card className="w-full shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-[#8891e2] text-2xl">Login</CardTitle>
              <CardDescription className="text-base">Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <form>
                <div className="space-y-6">
                  <div className="relative">
                    <Label htmlFor="email" className="mb-2 block">Email</Label>
                    <div className="relative">
                      <FiMail className="absolute top-3 left-3 text-gray-400" />
                      <Input id="email" type="email" placeholder="Email" className="pl-10 py-2" />
                    </div>
                  </div>
                  <div className="relative">
                    <Label htmlFor="password" className="mb-2 block">Password</Label>
                    <div className="relative">
                      <FiLock className="absolute top-3 left-3 text-gray-400" />
                      <Input id="password" type="password" placeholder="Password" className="pl-10 py-2" />
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col space-y-6 pt-2">
              <Button className="w-full bg-[#8891e2] hover:bg-[#7a82d9] py-2 text-lg">Log in</Button>
              <Tabs defaultValue="patient" className="w-full" onValueChange={handleTabChange}>
                <TabsList className="grid w-full grid-cols-3 gap-2">
                  <TabsTrigger value="patient" className="py-2">
                    <FaUserInjured className="mr-2" />
                    Patient
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="py-2">
                    <FaUserCog className="mr-2" />
                    Admin
                  </TabsTrigger>
                  <TabsTrigger value="doctor" className="py-2">
                    <FaUserMd className="mr-2" />
                    Doctor
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="admin">
                  {showOtpCard && <OtpCard />}
                </TabsContent>
              </Tabs>
              <p className="text-sm text-gray-600 pt-2">
                Don't have an account? <a href="/signup" className="text-[#8891e2] hover:underline">Sign up</a>
              </p>
            </CardFooter>
          </Card>
        </motion.section>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-1/2 h-screen flex items-center justify-center ml-12"
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