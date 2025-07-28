import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request, getClientAddress }) => {
  const clientIP = getClientAddress();
  const timestamp = new Date().toISOString();
  
  // Get additional IP info from headers if available
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  return json({
    message: 'pong',
    ip: clientIP,
    forwardedFor: forwardedFor || null,
    realIP: realIP || null,
    timestamp,
    userAgent: request.headers.get('user-agent') || null
  });
};
