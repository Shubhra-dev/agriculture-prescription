import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zfytjzzcknmauaorlosh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmeXRqenpja25tYXVhb3Jsb3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxODM2ODMsImV4cCI6MjAyNDc1OTY4M30.FDpMoIbJ0bz0coWNDW-4mTl_e0rIwDhsMrqVzbPNvEM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
