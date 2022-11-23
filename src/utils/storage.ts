export function saveItem(key: string, value: []) {
  localStorage.setItem(key, JSON.stringify(value));
}
  
export function getItem(key: string) {
  const got = localStorage.getItem(key);
  return got ? JSON.parse(got) : [];
}
  