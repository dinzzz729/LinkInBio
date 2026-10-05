import { resolveProfileImagePath } from "./utility/ResolveProfileImagePath";

// Customizable data, provide hex codes of the colors
export const styleData = {
  AppBackgroundColor: "",
  LogoColor: "",
  ProfileImageBorderRadius: "",
  NameColor: "",
  DesignationColor: "",
  OutlineButtonStyle: {
    buttonBackgroundColor: "",
    buttonTextColor: "",
    buttonBorderColor: "",
  },
  FilledButtonStyle: {
    buttonBackgroundColor: "",
    buttonTextColor: "",
  },
};

// Can be a URL, a full file name with extension, or just a file name without extension
const profileImagePath = "c0d7b4d6e5a7674b1b2761d49ca9c052";

export const linksData = {
  logo: "About me",
  profileImage: resolveProfileImagePath(profileImagePath),
  name: "Zuperdinzzz",
  designation: "Halo prend 🤝",
  links: [
    {
      linkText: "Youtube",
      linkUrl: "https://youtube.com/@wongdagul",
      linkBtn: "Filled",
    },
    {
      linkText: "Instagram",
      linkUrl: "https://www.instagram.com/zuperdinzzz.3",
      linkBtn: "Filled",
    },
    {
      linkText: "Tiktok",
      linkUrl: "https://www.tiktok.com/@zuperdinzzz.3",
      linkBtn: "Filled",
    },
    {
      linkText: "Discord",
      linkUrl: "#",
      linkBtn: "Filled",
    },
    {
      linkText: "Saweria",
      linkUrl: "https://saweria.co/zuperdinzzz",
      linkBtn: "Outline",
    },
  ],
};
