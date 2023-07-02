import React from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  backgroundColor: "#f5f5fd",
  secondBackground: "#ffffff",
  borderColor: "#9BA4B5",
  navBackground: "rgba(245, 241, 241, 0.3)",
  headerColor: "#181818",
  textColor: "#212A3E",
  mainColor: "#212A3E",  
  secondColor: "#9BA4B5",
  gradientColor: "linear-gradient(45deg, #394867, #212A3E)",
  boxShadow: "8px 8px 18px #d4d4d4, -8px -8px 18px #ffffff",
  keyword: "#B31312",
  className: "#78b3da",
};

const darkTheme = {
  backgroundColor: "#1A1A1A",
  secondBackground: "#121212",
  borderColor: "#0D0D0D",
  navBackground: "rgba(13, 13, 13, 0.7)",
  headerColor: "#F9F9F9",
  textColor: "#A6A6A6",
  mainColor: "#FFD700", // Gold
  secondColor: "#121212", // Goldenrod
  gradientColor: "linear-gradient(45deg, #FFD700, #DAA520)",
  boxShadow: "8px 8px 18px rgba(0, 0, 0, 0.5), -8px -8px 18px #0D0D0D",
  keyword: "#EE82EE", // Violet
  className: "#FF1493", // Deep Pink
};

function Theme({ children, theme }) {
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
