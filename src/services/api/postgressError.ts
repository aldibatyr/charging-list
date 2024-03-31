import { PostgrestError } from "@supabase/supabase-js"

export const generatePostgressError = (error: PostgrestError) => {
  switch (error.code) {
    case "42P01":
      return "Table does not exist"
    case "23505":
      return "Unique constraint violation"
    case "23514":
      return "Check constraint violation"
    case "42501":
      return "Insufficient privileges"
    case "42601":
      return "Syntax error"
    default:
      return "Unknown error"
  }
}
