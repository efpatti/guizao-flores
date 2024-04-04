import { useColorModeValue } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

const bgColor = "transparent";
const controlColor = "#2D4B1C";
const focusColor = "#2D4B1C";
const greenYellow = "greenyellow";

const defaultClasses = ({ radius = "1px", controlRadius = "1px" }) => {
  const checkedColor = useColorModeValue(controlColor, greenYellow);
  const checkedFocusColor = useColorModeValue(focusColor, greenYellow);

  return {
    h: "40px",
    px: "12px",
    w: "fit-content",
    _checked: {
      bg: bgColor,
      h: "40px",
      px: "12px",
      borderRadius: radius,
      color: checkedColor,
    },
    "span[class*='checkbox__control']:not([data-disabled])": {
      borderColor: "gray",
      borderRadius: controlRadius,
      _checked: {
        bg: checkedColor,
        borderColor: checkedColor,
      },
      _focus: {
        boxShadow: `0 0 0 2px ${checkedFocusColor}`,
        _checked: {
          boxShadow: `0 0 0 2px ${checkedFocusColor}`,
        },
      },
      _after: {
        transitionProperty: "all",
        transitionDuration: "normal",
        content: `""`,
        position: "absolute",
        width: "0px",
        height: "0px",
        bg: `transparent`,
        borderRadius: radius,
        zIndex: -1,
      },
    },
    _hover: {
      "span[class*='checkbox__control']:not([data-disabled])": {
        _after: {
          width: "40px",
          height: "40px",
          bg: bgColor,
          borderColor: controlColor,
        },
      },
    },
  };
};

export const CheckboxStyled = ({
  children,
  spacing = "1rem",
  rounded,
  roundedFull,
  ...props
}) => {
  let classes = defaultClasses({});

  if (roundedFull) {
    classes = defaultClasses({ radius: "99px", controlRadius: "99px" });
  }

  if (rounded) {
    classes = defaultClasses({ radius: "8px", controlRadius: "2px" });
  }

  return (
    <Checkbox spacing={spacing} sx={classes} {...props}>
      {children}
    </Checkbox>
  );
};
