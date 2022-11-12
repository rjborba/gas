import { FC, ReactNode } from "react";

export const Card: FC<{
  children: ReactNode;
  width?: string;
  height?: string;
}> = ({ children, width = "790px", height = "auto" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 70px - 30px)",
        overflow: "auto",
        height,
        width,
        backgroundColor: "white",
        boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        padding: "36px 36px",
      }}
    >
      {children}
    </div>
  );
};
