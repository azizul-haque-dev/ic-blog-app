import VerifyEmailComp from "@/app/Components/auth/verifyEmail/VerifyEmailComp";
import VerifyEmailForm from "@/app/Components/auth/verifyEmail/VerifyEmailForm";
import { isUser } from "@/services/verify.accessToken";
import { redirect } from "next/navigation";
import React from "react";

async function VerifyEmailPage({params}) {
  const getUser = await isUser();
  if (getUser.success) {
    if (getUser?.user.role === "user") {
      redirect("/user");
    } else {
      redirect("admin");
    }
  }
    const { token } = await params;
  return (
    <>
      <VerifyEmailComp>
        <VerifyEmailForm token={token} />
      </VerifyEmailComp>
    </>
  );
}

export default VerifyEmailPage;
