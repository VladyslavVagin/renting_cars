import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from "../redux/auth/selectors";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const isLoading = useSelector(selectIsLoading);
    const user = useSelector(selectUser);
  
    return {
      isLoggedIn,
      isRefreshing,
      isLoading,
      user,
    };
  };