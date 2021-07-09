export function generateId() {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export function getWebsiteSpecificZIndex(){
  return window.location.hostname.startsWith("www.google.") ? 0 : -1;
}
