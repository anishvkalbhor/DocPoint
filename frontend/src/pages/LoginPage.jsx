import React from 'react'
import { FiMail, FiLock } from 'react-icons/fi'
import { FaUserMd, FaUserCog, FaUserInjured } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import OtpCard from "@/components/OtpCard"
// import PatientForm from "@/components/forms/PatientForm"

export default function LoginPage({ searchParams }) {
//   const isAdmin = searchParams.admin === "true";

  return (
    <div className="flex h-screen max-h-screen bg-white">
      {/* {isAdmin && <OtpCard />} */}
      <div className="flex w-full max-w-7xl">
        <section className="w-1/2 pr-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#8891e2] mb-4">Welcome Back!</h1>
          <p className="text-xl text-gray-600 mb-8">We're excited to see you again. Login to access your personalized healthcare experience.</p>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-[#8891e2]">Login</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="space-y-4">
                  <div className="relative">
                    <FiMail className="absolute top-3 left-3 text-gray-400" />
                    <Input type="email" placeholder="Email" className="pl-10" />
                  </div>
                  <div className="relative">
                    <FiLock className="absolute top-3 left-3 text-gray-400" />
                    <Input type="password" placeholder="Password" className="pl-10" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
              <Button className="w-full bg-[#8891e2] hover:bg-[#7a82d9]">Log in</Button>
              <div className="flex justify-between w-full">
                <Button variant="outline" className="flex-1 mr-2">
                  <FaUserCog className="mr-2" />
                  Admin
                </Button>
                <Button variant="outline" className="flex-1 mx-2">
                  <FaUserMd className="mr-2" />
                  Doctor
                </Button>
                <Button variant="outline" className="flex-1 ml-2">
                  <FaUserInjured className="mr-2" />
                  Patient
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Don't have an account? <a href="/signup" className="text-[#8891e2] hover:underline">Sign up</a>
              </p>
            </CardFooter>
          </Card>
        </section>
        <img
          src="/assets/images/onboarding-img.png"
          alt="Login"
          className="side-img w-1/2 max-h-screen object-cover rounded-lg"
        />
      </div>
    </div>
  );
}