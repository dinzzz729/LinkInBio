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
const profileImagePath = "";

export const linksData = {
  logo: "Lnk",
  profileImage: resolveProfileImagePath(profileImagePath),
  name: "Zuperdinzzz",
  designation: "Gamer",
  links: [
    {
      linkText: "Youtube",
      linkUrl: "#",
      linkBtn: "Outline",
    },
    {
      linkText: "Instagram",
      linkUrl: "#",
      linkBtn: "Outline",
    },
    {
      linkText: "Tiktok",
      linkUrl: "#",
      linkBtn: "Outline",
    },
    {
      linkText: "Discord",
      linkUrl: "#",
      linkBtn: "Filled",
    },
  ],
};
