"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaUserTie,
  FaUsers,
  FaClipboardList,
  FaBalanceScale,
  FaPhoneAlt,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";

export default function AdministrationPage() {
  const { t, language } = useLanguage();

  const electedMembers = [
    // Head Officials
    {
      id: 1,
      MarathiName: "सौ. दिपाली दिलीप पाटील",
      EnglishName: "Mrs. Dipali Dilip Patil",
      positionKey: "Sarpanch / सरपंच ",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9823518888",
      phoneDevnagari: "+९१-९८२३५१८८८८",
      email: "",
    },
    {
      id: 2,
      MarathiName: "श्री. प्रकाश महादेव पाटील",
      EnglishName: "Mr. Prakash Mahadev Patil",
      positionKey: "Up Sarpanch / उपसरपंच ",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9823518888",
      phoneDevnagari: "+९१-९८२३५१८८८८",
      email: "",
    },
    {
      id: 3,
      MarathiName: "श्री. राजेंद्र शिवाजी जाधव",
      EnglishName: "Mr. Rajendra Shivaji Jadhav",
      positionKey: "Gramsevak / ग्रामसेवक",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9423862488",
      phoneDevnagari: "+९१-९४२३८६२४८८",
      email: "rajendrajadhav1234@gmail.com",
    },

    // Ward Members
    {
      id: 4,
      MarathiName: "श्री. प्रतापराव मानसिंग थोरात",
      EnglishName: "Mr. Prataprao Manasing Thorat",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9271868931",
      phoneDevnagari: "+९१-९२७१८६८९३१",
      email: "",
    },
    {
      id: 5,
      MarathiName: "श्री. डॉ. अविनाश आनंदराव पाटील",
      EnglishName: "Dr. Avinash Anandrao Patil",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9860553411",
      phoneDevnagari: "+९१-९८६०५५३४११",
      email: "",
    },
    {
      id: 6,
      MarathiName: "श्री. दिपक बाबुराव शिंगटे",
      EnglishName: "Mr. Deepak Baburao Shingate",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9561004023",
      phoneDevnagari: "+९१-९५६१००४०२३",
      email: "",
    },
    {
      id: 7,
      MarathiName: "श्री. सागर बळवंत जाधव",
      EnglishName: "Mr. Sagar Balwant Jadhav",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9096445914",
      phoneDevnagari: "+९१-९०९६४४५९१४",
      email: "",
    },
    {
      id: 8,
      MarathiName: "सौ. अस्मिता विनायक पाटील",
      EnglishName: "Mrs. Asmita Vinayak Patil",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9322834177",
      phoneDevnagari: "+९१-९३२२८३४१७७",
      email: "",
    },
    {
      id: 9,
      MarathiName: "श्री. राहुल कृष्णात नांगरे",
      EnglishName: "Mr. Rahul Krushnat Nangare",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9096332726",
      phoneDevnagari: "+९१-९०९६३३२७२६",
      email: "",
    },
    {
      id: 10,
      MarathiName: "सौ. सुनंदा जालिंदर पाटील",
      EnglishName: "Mrs. Sunanda Jalindar Patil",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9561702149",
      phoneDevnagari: "+९१-९५६१७०२१४९",
      email: "",
    },
    {
      id: 11,
      MarathiName: "श्री. प्रकाश लक्ष्मण खैरमोडे",
      EnglishName: "Mr. Prakash Laxman Khairmode",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9359773371",
      phoneDevnagari: "+९१-९३५९७७३३७१",
      email: "",
    },
    {
      id: 12,
      MarathiName: "सौ. आशा सुनील कुलकर्णी",
      EnglishName: "Mrs. Asha Sunil Kulkarni",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9960518727",
      phoneDevnagari: "+९१-९९६०५१८७२७",
      email: "",
    },
    {
      id: 13,
      MarathiName: "सौ. राजश्री प्रकाश एटम",
      EnglishName: "Mrs. Rajshree Prakash Etam",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9822129509",
      phoneDevnagari: "+९१-९८२२१२९५०९",
      email: "",
    },
    {
      id: 14,
      MarathiName: "सौ. सविता प्रवीण सुतार",
      EnglishName: "Mrs. Savita Pravin Sutar",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9604141745",
      phoneDevnagari: "+९१-९६०४१४१७४५",
      email: "",
    },
    {
      id: 15,
      MarathiName: "सौ. जयश्री अरुण पडळकर",
      EnglishName: "Mrs. Jayshree Arun Padalkar",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-7218353373",
      phoneDevnagari: "+९१-७२१८३५३३७३",
      email: "",
    },
    {
      id: 16,
      MarathiName: "सौ. अश्विनी दिपक पाटील",
      EnglishName: "Mrs. Ashwini Deepak Patil",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9923094076",
      phoneDevnagari: "+९१-९९२३०९४०७६",
      email: "",
    },
    {
      id: 17,
      MarathiName: "सौ. जयश्री रामचंद्र घारे",
      EnglishName: "Mrs. Jayshree Ramchandra Ghare",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-8329221856",
      phoneDevnagari: "+९१-८३२९२२१८५६",
      email: "",
    },
    {
      id: 18,
      MarathiName: "कु. स्विटी प्रभाकर पाटील",
      EnglishName: "Ms. Sweety Prabhakar Patil",
      positionKey: " Member /  सदस्य",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-7499887484",
      phoneDevnagari: "+९१-७४९९८८७४८४",
      email: "",
    },
  ];

  // const administrativeStaff = [
  //   {
  //     id: 7,
  //     MarathiName: "संतोष भिमराव पाटील",
  //     EnglishName: "Santosh Bhimrao Patil",
  //     position: "पोलीस पाटील /Police Patil",
  //     image: "/images/official3.jpg",
  //     phone: "+91-9270001001",
  //     phoneDevnagari: "+९१-९२७०००१००१",
  //   },
  //   {
  //     id: 8,
  //     MarathiName: "संतोष जयवंत जगताप ",
  //     EnglishName: "Santosh Jaywant Jagtap",
  //     position:
  //       "तंटामुक्ती अध्यक्ष / President, Dispute-Free Village Committee",
  //     image: "/images/official3.jpg",
  //     phone: "+91-9689845978",
  //     phoneDevnagari: "+९१-९६८९८४५९७८",
  //   },
  // ];

  const committees = [
    {
      nameKey: "admin.standingCommittee",
      icon: FaClipboardList,
      members: 5,
      responsibilityKey: "admin.standingResp",
    },
    {
      nameKey: "admin.financeCommittee",
      icon: FaBalanceScale,
      members: 4,
      responsibilityKey: "admin.financeResp",
    },
    {
      nameKey: "admin.developmentCommittee",
      icon: FaUsers,
      members: 6,
      responsibilityKey: "admin.developmentResp",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.about.administration")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("admin.subtitle")}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaUserTie className="text-4xl sm:text-5xl text-government-orange mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("admin.aboutAdministration")}
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            {t("admin.adminText1")}
          </p>
        </section>

        {/* Elected Members */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.electedReps")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electedMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-government-blue to-government-green p-4 text-white text-center">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src={"/images/Seal_of_Maharashtra.svg.png"}
                      alt={"member.name"}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <FaUserCircle />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {member.positionKey}
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-government-blue mb-2">
                    {language === "mr"
                      ? member.MarathiName
                      : member.EnglishName}
                  </h4>
                  {/* <p className="text-gray-600 text-sm mb-4">{member.ward}</p> */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaPhoneAlt className="text-government-orange" />
                      <span>
                        {language === "en"
                          ? member.phone
                          : member.phoneDevnagari}
                      </span>
                    </div>
                    {/* <div className="flex items-center gap-2 text-sm text-gray-700"> */}
                    {/* <FaEnvelope className="text-government-orange" /> */}
                    {/* <span className="break-all">{member.email}</span> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Administrative Staff */}
        {/* <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.adminStaff")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {administrativeStaff.map((staff, index) => (
              <div
                key={index}
                className="border-l-4 border-government-orange pl-4 py-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-bold text-government-blue mb-2">
                  {language === "en" ? staff.EnglishName : staff.MarathiName}
                </h3>
                <p className="text-government-orange font-semibold mb-1">
                  {staff.position}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {t(`${staff.position}`)}
                </p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaPhoneAlt className="text-government-orange text-xs" />
                    <span>
                      {language === "en" ? staff.phone : staff.phoneDevnagari}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    {/* <FaEnvelope className="text-government-orange text-xs" /> */}
        {/* <span className="break-all">{staff.email}</span> */}
        {/* </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Committees */}
        {/* <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.panchayatCommittees")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {committees.map((committee, index) => {
              const Icon = committee.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="text-4xl text-government-orange mb-4" />
                  <h3 className="text-xl font-bold text-government-blue mb-3">
                    {t(committee.nameKey)}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="text-sm">
                      <span className="font-semibold">
                        {t("admin.members")}:
                      </span>{" "}
                      {committee.members}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">
                        {t("admin.responsibility")}:
                      </span>
                      <br />
                      {t(committee.responsibilityKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* Governance Structure */}
        {/* <section className="bg-[#4A7FA7] text-white rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t("admin.governanceStructure")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("admin.electedBody")}
              </h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>
                  • {t("admin.sarpanch")} - {t("admin.electedHead")}
                </li>
                <li>
                  • {t("admin.upSarpanch")} - {t("admin.deputyHead")}
                </li>
                <li>
                  • {t("admin.wardMember")} - {t("admin.wardMembers16")}
                </li>
                <li>
                  • {t("admin.standingCommittee")} -{" "}
                  {t("admin.standingCommitteeMembers")}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{t("admin.functions")}</h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• {t("admin.function1")}</li>
                <li>• {t("admin.function2")}</li>
                <li>• {t("admin.function3")}</li>
                <li>• {t("admin.function4")}</li>
              </ul>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
