export const Topbar = () => {
  return (
    <div
      style={{
        zIndex: "999",
        display: "flex",
        position: "fixed",
        alignItems: "center",
        height: 70,
        paddingLeft: 40,
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img src="Gasbit.png" width={40} height={40}></img>
      <p
        style={{
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: 28,
          paddingLeft: 12,
        }}
      >
        GasBit
      </p>
    </div>
  );
};
