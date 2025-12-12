"use client";
import { useState } from "react";
import HeaderSection from "@/components/ar-components/dashbord/setings/HeaderSection";
import ProfileSection from "@/components/ar-components/dashbord/setings/ProfileSection";
import PasswordSection from "@/components/ar-components/dashbord/setings/PasswordSection";

export default function SettingsPage() {
  const [userData, setUserData] = useState({
    firstName: "محمد",
    lastName: "أحمد",
    email: "mohamed.ahmed@example.com",
    currentPassword: "",
    newPassword: "",
  });

  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log("Updated data:", userData);
    alert("تم حفظ التغييرات بنجاح");
  };

  return (
    <div className="overflow-x-hidden h-[75dvh]  w-[100%] overflow-y-auto">
      <div className="h-[75dvh] w-[100%]">
        <div className="w-[100%] h-[75dvh] mx-auto px-4 py-8">
          <HeaderSection />
          <ProfileSection
            lang="ar"
            userData={userData}
            handleSubmitData={handleSubmit}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            handleImageUpload={handleImageUpload}
          />

          {/* <ProfileSection
            lang="en"
            userData={userData}
            handleSubmitData={handleSubmit}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            handleImageUpload={handleImageUpload}
          /> */}

          <PasswordSection
            userData={userData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
