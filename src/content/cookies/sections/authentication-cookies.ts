export const authenticationCookiesSection = {
  id: "authentication-cookies",
  title: "5. Authentication Cookies",
  type: "subsections" as const,

  subsections: [
    {
      title: "Purpose",
      items: [
        "Aapki authenticated login session maintain karna.",
        "Hamare servers ko aapke authenticated requests recognize karne dena.",
        "Account-specific features ka access protect karna.",
      ],
    },
    {
      title: "Security",
      items: [
        "Authentication cookies mein session ya authentication identifier ho sakta hai.",
        "Authentication credentials dusre users ke saath share nahi kiye jaane chahiye.",
        "Jahan technically supported ho, authentication cookies HttpOnly, Secure, aur SameSite jaise security attributes use kar sakti hain.",
      ],
    },
  ],
};