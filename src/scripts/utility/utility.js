import { v4 } from 'uuid';
export function generateID() {
  return v4().split('-').at(-1);
}
