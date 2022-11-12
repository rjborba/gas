import { Box } from "@mui/material";
import { FC, ReactNode, useEffect } from "react";

export const Dialog: FC<{
  isOpen: boolean;
  onClose: () => any;
  children: ReactNode;
}> = ({ isOpen, onClose = () => {}, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <Box
      bgcolor="#0000009e"
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      zIndex={1200}
      onClick={() => onClose()}
    >
      <Box
        position="relative"
        width={"100%"}
        height={"100%"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          bgcolor="white"
          //   minHeight={200}
          //   minWidth={300}
          overflow="hidden"
          borderRadius={2}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
