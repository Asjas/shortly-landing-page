module.exports = {
  theme: {
    extend: {
      colors: {
        cyan: "#2ACFCF",
        lightCyan: "#9AE3E3",
        darkvoilet: "#3B3054",
        secondary: {
          red: "#F46262"
        },
        neutral: {
          gray: "#BFBFBF",
          lightgray: "#EFF1F7",
          grayishvoilet: "#9E9AA7",
          verydarkblue: "#35323E",
          verydarkvoilet: "#232127"
        }
      },
      spacing: {
        14: "3.75rem",
        18: "4.5rem",
        36: "9rem",
        70: "17rem",
        90: "26.7rem"
      },
      borderWidth: {
        "3": "3px"
      }
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"]
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1110px",
      xl: "1440px"
    },
    fontSize: {
      micro: ".666rem",
      tiny: ".833rem",
      small: ".888rem",
      base: "1rem",
      lg: "1.11rem",
      xl: "1.22rem",
      "2xl": "1.55rem",
      "3xl": "1.77rem",
      "4xl": "2.33rem",
      "5xl": "4.45rem"
    },
    lineHeight: {
      xl: "1.44rem",
      "2xl": "1.66rem",
      "3xl": "2rem",
      "4xl": "2.66rem",
      "5xl": "5rem"
    }
  },
  variants: {
    boxShadow: ["responsive", "focus", "active", "focus-within"]
  }
};
