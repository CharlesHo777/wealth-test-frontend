// src/api/http.ts
import { apiUrl } from "../config";

export class ApiError extends Error {
  status: number;
  url: string;
  details?: unknown;

  constructor(message: string, opts: { status: number; url: string; details?: unknown }) {
    super(message);
    this.name = "ApiError";
    this.status = opts.status;
    this.url = opts.url;
    this.details = opts.details;
  }
}

async function readErrorBody(res: Response): Promise<unknown> {
  const contentType = res.headers.get("content-type") ?? "";
  try {
    if (contentType.includes("application/json")) return await res.json();
    const text = await res.text();
    return text || undefined;
  } catch {
    return undefined;
  }
}

/**
 * Safely construct a URL from either an absolute URL (http/https)
 * or a relative path (e.g. /api/...)
 */
function toAbsoluteUrl(urlOrPath: string): URL {
  // Absolute already?
  if (/^https?:\/\//i.test(urlOrPath)) return new URL(urlOrPath);

  // Relative: resolve against current origin (e.g. http://localhost:5173)
  return new URL(urlOrPath, window.location.origin);
}

export async function fetchJSON<T>(
  path: string,
  init: RequestInit & { query?: Record<string, string | number | boolean | undefined> } = {}
): Promise<T> {
  const { query, ...requestInit } = init;

  const url = toAbsoluteUrl(apiUrl(path));
  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v === undefined) continue;
      url.searchParams.set(k, String(v));
    }
  }

  const res = await fetch(url.toString(), {
    ...requestInit,
    headers: {
      Accept: "application/json",
      ...(requestInit.body ? { "Content-Type": "application/json" } : {}),
      ...(requestInit.headers ?? {}),
    },
  });

  if (!res.ok) {
    const details = await readErrorBody(res);
    throw new ApiError(`API request failed: ${res.status} ${res.statusText}`, {
      status: res.status,
      url: url.toString(),
      details,
    });
  }

  return (await res.json()) as T;
}

export async function fetchText(
  path: string,
  init: RequestInit & { query?: Record<string, string | number | boolean | undefined> } = {}
): Promise<string> {
  const { query, ...requestInit } = init;

  const url = toAbsoluteUrl(apiUrl(path));
  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v === undefined) continue;
      url.searchParams.set(k, String(v));
    }
  }

  const res = await fetch(url.toString(), {
    ...requestInit,
    headers: {
      Accept: "text/html, text/plain, */*",
      ...(requestInit.headers ?? {}),
    },
  });

  if (!res.ok) {
    const details = await readErrorBody(res);
    throw new ApiError(`API request failed: ${res.status} ${res.statusText}`, {
      status: res.status,
      url: url.toString(),
      details,
    });
  }

  return await res.text();
}
