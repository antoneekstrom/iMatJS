import { useQueryParams } from "raviger";

/**
 * 
 * @returns 
 */
export default function useTags() {
   const [{ tags }] = useQueryParams()
   return tags ? (tags as string).split(',') : [];
}