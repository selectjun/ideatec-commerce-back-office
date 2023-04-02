import { useNavigate } from "react-router-dom";

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/main");
        }}
      >
        메인으로
      </button>
    </>
  );
};

export default Login;
