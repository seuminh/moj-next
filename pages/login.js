import Login from "@/components/Login";

const login = () => {
  return (
    <div style={{ width: 300, margin: "auto", marginTop: "100px" }}>
      <Login></Login>
    </div>
  );
};
login.authCondition = "WithoutAuth";

export default login;
