import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "@/components/ui/button";
import { decryptKey, encryptKey } from "../../lib/utils";
import { useNavigate } from "react-router-dom";

const OtpCard = () => {
  const [open, setOpen] = useState(true);
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const encryptedKey =
    typeof window !== "undefined"
      ? window.localStorage.getItem("accessKey")
      : null;

  useEffect(() => {
    const accessKey = encryptedKey && decryptKey(encryptedKey);
    if (accessKey === import.meta.env.VITE_ADMIN_PASSKEY) {
      setOpen(false);
      navigate("/admin");
    } else {
      setOpen(true);
    }
  }, [encryptedKey, navigate]);

  const closeModal = () => {
    setOpen(false);
    navigate("/login");
  };

  const validatePasskey = (e) => {
    e.preventDefault();
    if (passkey === import.meta.env.VITE_ADMIN_PASSKEY) {
      const encryptedKey = encryptKey(passkey);
      localStorage.setItem("accessKey", encryptedKey);
      setOpen(false);
      navigate("/admin");
    } else {
      setError("Invalid passkey. Please try again.");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="shad-alert-dialog max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-between">
            <span className="text-2xl font-bold">Admin Access</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className="hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Button>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-gray-600 mt-2">
            Enter the 6-digit passkey to access the Admin page
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="my-8">
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPasskey(value)}
          >
            <InputOTPGroup className="shad-otp gap-3 justify-center">
              {[...Array(6)].map((_, index) => (
                <InputOTPSlot key={index} className="shad-otp-slot w-14 h-14 text-xl font-semibold border-2 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-200" index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {error && (
            <p className="shad-error text-14-regular mt-4 text-center text-red-500">
              {error}
            </p>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={validatePasskey}
            className="shad-primary-btn w-full py-3 text-lg font-semibold rounded-lg transition-all duration-200 hover:bg-opacity-90 hover:shadow-md"
          >
            Verify Passkey
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OtpCard;