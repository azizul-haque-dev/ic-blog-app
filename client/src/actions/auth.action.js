"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');

   

    // Call backend API
    const response = await fetch(`${process.env.NEXT_APP_SERVER}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      cache: 'no-store'
    });

    const data = await response.json();
   

    if (!response.ok || !data?.success) {
      console.error('❌ [SERVER ACTION] Login failed:', data.message);
      return { 
        success: false, 
        message: data?.message || 'Login failed' 
      };
    }

    //  Set cookie on Next.js SERVER
    const cookieStore = await cookies();
    const isProduction = process.env.NODE_ENV === 'production';
    
    cookieStore.set('accessToken', data.accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      path: '/',
      maxAge: 24 * 60 * 60
    });

   

    //  Add small delay to ensure cookie is written
    await new Promise(resolve => setTimeout(resolve, 100));

    //  Redirect based on role
    const redirectPath = data.user?.role === "admin" ? "/admin" : "/user";
 
    
    redirect(redirectPath);

  } catch (error) {
    //  Handle redirect error separately
    if (error.message === 'NEXT_REDIRECT') {
     
      throw error; // Re-throw to let Next.js handle it
    }
    
    console.error('❌ [SERVER ACTION] Login error:', error.message);
    return { 
      success: false, 
      message: error.message || 'An error occurred' 
    };
  }
}
