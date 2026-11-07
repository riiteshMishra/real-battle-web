export function isActivePath(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) {
    if (pathname !== "/") return false;
    if (typeof window === "undefined") return false;
    return window.location.hash === href.slice(1);
  }
  return pathname === href;
}