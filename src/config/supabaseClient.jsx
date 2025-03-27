import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gejngbboclldmailezqg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdlam5nYmJvY2xsZG1haWxlenFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwMjIzMTUsImV4cCI6MjA1NzU5ODMxNX0.2AWR3N_tJN3ZpCZ41dQo-jSk4GF2TK13OcQs7eYpov0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
