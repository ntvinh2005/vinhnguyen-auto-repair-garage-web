import { User } from "lucide-react";

const avatarColors = [
  "bg-yellow-200 text-yellow-700",
  "bg-red-100 text-red-700",
  "bg-orange-100 text-orange-600",
  "bg-green-100 text-green-600",
  "bg-sky-100 text-sky-600",
  "bg-purple-100 text-purple-700",
];

export default function DefaultAvatar({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  const color = avatarColors[index % avatarColors.length];
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-yellow-200 shadow ${color}`}
    >
      <User className="w-6 h-6" />
    </div>
  );
}
