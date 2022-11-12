import { FC } from "react";

export const PageTitle: FC<{ children: string }> = ({ children }) => {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "36px",
      }}
    >
      {children}
    </h2>
  );
};
