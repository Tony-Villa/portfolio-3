import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request, getClientAddress }) => {
  const clientIP = getClientAddress();
  const timestamp = new Date().toISOString();
  
  // Get additional IP info from headers if available
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const userAgent = request.headers.get('user-agent');
  
  // Log the connection details
  console.log(`[${timestamp}] Ping request from IP: ${clientIP}`);
  console.log(`  - Forwarded For: ${forwardedFor || 'N/A'}`);
  console.log(`  - Real IP: ${realIP || 'N/A'}`);
  console.log(`  - User Agent: ${userAgent || 'N/A'}`);
  
  return json({
    message: 'pong'
  });
};
