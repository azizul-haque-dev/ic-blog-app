import LoginComponent from "@/app/Components/auth/login/LoginComponent";
import LoginForm from "@/app/Components/auth/login/LoginForm";
import { isUser } from "@/services/verify.accessToken";

async function LoginPage() {
  await isUser();

  return (
    <>
      <LoginComponent>
        <LoginForm />
      </LoginComponent>
    </>
  );
}

export default LoginPage;
