import { Box, Stack } from "@mui/material";
import { FC, ReactElement } from "react";
import { Topbar } from "./Topbar";

export const Page: FC<{ children: ReactElement }> = ({ children }) => (
  <>
    <div style={{ height: "100vh" }}>
      <Topbar />
      <Box
        width="130px"
        top={70}
        height="calc(100% - 70px)"
        bgcolor="#f1f1f1"
        position="fixed"
        border-right="1px solid #dbdbdb"
      >
        <Box
          paddingTop="100px"
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Stack gap={1}>
            <Box
              width="100%"
              padding={1}
              fontFamily="Montserrat"
              fontWeight={600}
              style={{
                cursor: "pointer",
              }}
            >
              Applications
            </Box>
            <Box
              width="100%"
              padding={1}
              fontFamily="Montserrat"
              style={{
                cursor: "pointer",
              }}
            >
              Settings
            </Box>
          </Stack>
          <Box
            flex={1}
            display="flex"
            alignItems="end"
            justifyContent="center"
            width="100%"
            paddingBottom="22px"
          >
            Logout
          </Box>
        </Box>
      </Box>
      <div
        style={{
          paddingTop: "70px",
          paddingLeft: "140px",
          height: "calc(100% - 70px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  </>
);
