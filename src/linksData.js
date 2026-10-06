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
      linkUrl: "https://youtube.com/@zuperdinzzz",
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
      linkBtn: "Outline",
    },
    /*{
      linkText: "Saweria",
      linkUrl: "https://saweria.co/zuperdinzzz",
      linkBtn: "Outline",
    },
    {
      linkText: "Bio site",
      linkUrl: "https://bio.site/dinzzz729",
      linkBtn: "Outline",
    },*/
  ],
};
