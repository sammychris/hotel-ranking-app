export function saveItem(key: string, value: []) {
  sessionStorage.setItem(key, JSON.stringify(value));
}
  
export function getItem(key: string) {
  const got = sessionStorage.getItem(key);
  return got ? JSON.parse(got) : [];
}
  