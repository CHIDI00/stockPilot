import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wzkoagyqyzdofqreoqgb.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6a29hZ3lxeXpkb2ZxcmVvcWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyOTY2NDAsImV4cCI6MjAzODg3MjY0MH0.LbSgrh3YfmQMQp5wNxksmOdJ8lx6MxHx_zPOTGpPJAY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
