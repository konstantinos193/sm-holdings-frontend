import { API_BASE_URL } from './config';

export async function serverFetch<T>(
  endpoint: string,
  options: RequestInit & { next?: { revalidate?: number | false; tags?: string[] } } = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(url, {
    cache: 'no-store',
    ...options,
    headers,
    signal: options.signal ?? AbortSignal.timeout(5000),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: response.statusText,
      statusCode: response.status,
    }));
    throw new Error(error.message || 'Request failed');
  }

  return await response.json();
}

