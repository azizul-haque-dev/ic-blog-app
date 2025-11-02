import LoginComponent from "@/app/Components/auth/login/LoginComponent";
import LoginForm from "@/app/Components/auth/login/LoginForm";
import { isUser } from "@/services/verify.accessToken";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  
  
  //  Check authentication
  const authResult = await isUser();
  
 

  //  Only redirect if actually authenticated
  if (authResult?.success && authResult?.user) {
    
    
    if (authResult.user.role === "admin") {
      redirect("/admin");
    } else {
      redirect("/user");
    }
  }

 
  
  return (
    <LoginComponent>
      <LoginForm />
    </LoginComponent>
  );
}
