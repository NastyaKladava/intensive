import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { showModal } from "../../toolkitStore/actions";
import { isLogInSelector } from "../../toolkitStore/selectors";

export const RequireAuth = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = useSelector(isLogInSelector);

  if (!isLoggedIn) {
    dispatch(showModal(true));
    return <Navigate to="/modal" state={{ from: location }} />;
  }

  return children;
};
