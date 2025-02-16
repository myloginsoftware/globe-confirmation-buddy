
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-2 sm:px-4">
      <div className="w-full max-w-3xl space-y-6">
        <h1 className="text-2xl font-medium text-center text-gray-900">
          Phone Verification
        </h1>
        
        <div className="space-y-4 w-full">
          <div className="phone-input-container w-full">
            <PhoneInput
              international
              countryCallingCodeEditable={true}
              defaultCountry="US"
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="w-full p-2 rounded-2xl border border-gray-200 focus:border-blue-500 outline-none transition-all duration-200"
            />
          </div>
          
          <button
            onClick={handleSignIn}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-2xl transition-all duration-200 transform hover:scale-[0.99] active:scale-[0.97]"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
