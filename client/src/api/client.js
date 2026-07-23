const API_URL = import.meta.env.VITE_API_URL || '';

export async function fetchProjects() {
  if (!API_URL) throw new Error('No API URL configured');
  const res = await fetch(`${API_URL}/projects`);
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export async function sendContactMessage(payload) {
  if (!API_URL) throw new Error('No API URL configured');
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || 'Failed to send message');
  }
  return res.json();
}
