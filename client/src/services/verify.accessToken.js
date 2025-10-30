export async function isUser() {
  try {
    const res = await fetch(`${process.env.NEXT_APP_URL}/api/session`, {
      method: "GET",
      credentials: "include",
      cache: "no-store"
    });
    const user = await res.json();
    return { success: true, user };
  } catch (error) {
    console.log("jwt verification faild in client");
    return {
      success: false,
      message: "jwt verification faild in client"
    };
  }
}
