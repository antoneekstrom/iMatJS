import { usePath } from 'raviger';

export default function useMatchPath() {
   const currentPath = usePath();

   return { isMatch, isExactMatch };

   function isMatch(path: string) {
      return normalize(currentPath).startsWith(normalize(path));
   }
   
   function isExactMatch(path: string) {
      return normalize(currentPath) === normalize(path);
   }
}

function normalize(path: string) {
   return normalizeSeparators(removeTrailingSeparator(path));
}

function normalizeSeparators(path: string) {
   return path.replace(/[\/\\]/, '/');
}

function removeTrailingSeparator(path: string): string {
   return /[\/\\]$/.test(path) ? path.slice(0, -1) : path;
}
