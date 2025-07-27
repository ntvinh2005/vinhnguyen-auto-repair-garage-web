import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";

const DEFAULT_DURATION = 3000;

export const customMessage = {
  success: (content: string, duration = DEFAULT_DURATION) =>
    toast({
      title: "✅ Success",
      description: content,
      duration,
    }),
  error: (content: string, duration = DEFAULT_DURATION) =>
    toast({
      title: "❌ Error",
      description: content,
      variant: "destructive",
      duration,
    }),
};

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export const isAdmin = (email: string) => {
  const adminList = import.meta.env.VITE_ALLOWED_USERS?.split(",").map((e) =>
    e.trim()
  );
  return adminList?.includes(email);
};
