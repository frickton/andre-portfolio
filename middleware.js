export const config = {
  matcher: ['/cases/aqx.html', '/cases/cofrinhos.html', '/cases/pix-experiments.html'],
};

export default function middleware(request) {
  const expected = process.env.CASE_PASSWORD;
  const auth = request.headers.get('authorization');

  if (expected && auth && auth.startsWith('Basic ')) {
    const decoded = atob(auth.slice(6));
    const password = decoded.slice(decoded.indexOf(':') + 1);
    if (password === expected) {
      return;
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Case Studies"',
    },
  });
}
