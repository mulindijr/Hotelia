import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";

const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <Outlet />
    </>
  );
};

export default Layout;