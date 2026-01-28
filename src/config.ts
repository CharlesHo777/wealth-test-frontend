function stripTrailingSlashes(url: string) {
  return url.replace(/\/+$/, "");
}

const DEFAULT_API_BASE_URL = "/api";

export const API_BASE_URL = stripTrailingSlashes(
  import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL
);

/** Join API_BASE_URL with a path like "/sessions" */
export function apiUrl(path: string) {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${API_BASE_URL}${path}`;
}
