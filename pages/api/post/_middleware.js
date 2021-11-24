import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export default function middleware(req) {
  // Token
  const token = req.headers.get('x-auth-token');
  // Invalid Token
  if (!token) {
    return new Response('Unauthorized!', {
      status: 401,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded.user;
    console.log(req.user);
    return NextResponse.next();
  } catch (err) {
    return new Response(err.message, {
      status: 500,
    });
  }
}
