import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

export default function Login() {
  const navigate = useNavigate();
  const allowedUsers = import.meta.env.VITE_ALLOWED_USERS?.split(",") || [];

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (!allowedUsers.includes(result.user.email)) {
      alert("Unauthorized");
      await auth.signOut();
      return;
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user && allowedUsers.includes(user.email)) {
        navigate("/admin/blog/create", { replace: true });
      }
    });
    return unsub;
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <button
        onClick={loginWithGoogle}
        className="flex items-center space-x-3 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-200"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 533.5 544.3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.4h146.9c-6.3 34.5-25.5 63.7-54.2 83.2v68.9h87.4c51.2-47.1 81.4-116.4 81.4-197.1z"
            fill="#4285F4"
          />
          <path
            d="M272 544.3c73.6 0 135.4-24.5 180.6-66.4l-87.4-68.9c-24.3 16.3-55.3 25.9-93.2 25.9-71.6 0-132.3-48.3-153.9-113.2H27.5v71.1c45.1 88.8 136.8 151.5 244.5 151.5z"
            fill="#34A853"
          />
          <path
            d="M118.1 321.7c-10.2-30-10.2-62.3 0-92.3V158.3H27.5c-40.6 81.4-40.6 176.3 0 257.7l90.6-70.9z"
            fill="#FBBC05"
          />
          <path
            d="M272 107.6c39.9-.6 78.2 13.9 107.7 40.6l80.3-80.3C407.4 24.1 341.2-1.1 272 0 164.3 0 72.6 62.7 27.5 151.5l90.6 70.9C139.7 156 200.4 107.6 272 107.6z"
            fill="#EA4335"
          />
        </svg>

        <span className="text-sm font-medium">Login with Google</span>
      </button>
    </div>
  );
}
