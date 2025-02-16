
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const { toast } = useToast();

  const handleSignIn = () => {
    if (!phoneNumber) {
      toast({
        title: "Phone number required",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would integrate with your actual verification service
    toast({
      title: "Verification code sent",
      description: "Please check your phone for the code",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-sm p-8 space-y-6 border border-gray-100">
          <h1 className="text-2xl font-medium text-center text-gray-900">
            Phone Verification
          </h1>
          
          <div className="space-y-4">
            <div className="phone-input-container">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="US"
                value={phoneNumber}
                onChange={setPhoneNumber}
                className="w-full p-4 rounded-2xl border border-gray-200 focus:border-blue-500 outline-none transition-all duration-200"
              />
            </div>
            
            <button
              onClick={handleSignIn}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-2xl transition-all duration-200 transform hover:scale-[0.99] active:scale-[0.97]"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
