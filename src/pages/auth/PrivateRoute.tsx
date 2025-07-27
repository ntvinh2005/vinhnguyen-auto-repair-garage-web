import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  const allowedUsers = import.meta.env.VITE_ALLOWED_USERS?.split(",") || [];

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user && allowedUsers.includes(user.email)) {
        setIsAllowed(true);

        if (location.pathname === "/admin/login") {
          navigate("/admin/blog/create", { replace: true });
        }
      } else {
        navigate("/admin/login", { replace: true });
      }
      setLoading(false);
    });

    return () => unsub();
  }, [navigate, location]);

  if (loading) return <p>Loading...</p>;
  return isAllowed ? children : null;
}
