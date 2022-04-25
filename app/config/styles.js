import { Platform } from "react-native";

import colors from "./colors";

const defaultStyles = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
};

export default defaultStyles;
