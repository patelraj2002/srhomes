// src/app/api/auth/signout/route.js
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully'
  });

  // Clear the session cookie
  response.cookies.delete('session');

  return response;
}