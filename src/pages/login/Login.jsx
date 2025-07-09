import React, { useEffect } from 'react'
import LoginLeftPanel from './LoginLeftPanel'
import LoginForm  from './LoginForm'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearAuthStateMessage } from '../../redux/slices/authSlice';
import { showToast } from '../../utils/showToast';
import Loader from '../../components/loaders/Loader';
const Login = () => {
     const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated, loginMessage, loading, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    
     if(isAuthenticated){
      navigate("/")
     }
    if (loginMessage && isAuthenticated && user.role === "admin") {
      dispatch(clearAuthStateMessage());
      showToast("Login successful!", "success");
      navigate("/welcome");
    }
  }, [isAuthenticated, navigate, loginMessage, dispatch, user]);

  useEffect(() => {
    if (error) {
      // Auto clear error after 5 seconds
      const timer = setTimeout(() => {
        dispatch(clearAuthStateMessage());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);
 return (
  <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
    {loading ? (
      <Loader />
    ) : (
      <>
        <LoginLeftPanel />
        <LoginForm />
      </>
    )}
  </div>
);
}

export default Login
