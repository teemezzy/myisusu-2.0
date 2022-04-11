module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#95953F",
        logoColor: "#3F3F95",
        googleColor: "#ADAD96",
        colorWhite: "#FFFFFF",
      },
      fontSize: {
        introH1Mobile: ["28px", { lineHeight: "42px" }],
        introH1Desktop: ["48px", { lineHeight: "72px" }],
        introPMobile: ["14px", { lineHeight: "21px" }],
        introPDesktop: ["18px", { lineHeight: "27px" }],
        googleMobile: ["12px", { lineHeight: "18px" }],
        googleDesktop: ["16px", { lineHeight: "24px" }],

        // Start Contributing In These Few Steps
        contriMobile: ["24px", { lineHeight: "36px" }],
        contriDesktop: ["34px", { lineHeight: "51px" }],

        // Sign up for free
        signMobile: ["26px", { lineHeight: "39px" }],
        contriDesktop: ["44px", { lineHeight: "66px" }],
        phoneMobile: ["13px", { lineHeight: "20px" }],
        phoneMobileTwo: ["20px", { lineHeight: "30px" }],
      },
      backgroundColor: {
        bgWhite: "#FFFFFF",
        bgDarkWhite: "#F5F5F7",
        goldHover: "#bdbd87",
        bgcreate: "#F2F9FF",
        bgcreateone: "#f7f7f7",
        bgactivate: "#C6DBCC",
        bgjoin: "#DDC9B9",
        bgjoinone: "#FFEFE0",
        bgstart: "#B1BAD4",
        bgstartone: "#BDE2FA",
        bgcontribute: "#95953F"
      },
      screens: {
        xm: "481px",
      },
      width: {
        image: "572px"
      }
    },
  },
  plugins: [],
};
