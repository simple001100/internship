import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { useDispatch, useSelector } from "react-redux";
import { MARKET_ROUTE } from "../utils/consts";
import { checkIsAuth } from "../redux/store/client/loginReducer";
import { getAdvertising } from "../redux/store/categories/categoryReducer";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertising());
    if (localStorage.getItem('token')) {
      dispatch(checkIsAuth());
    }
  }, []);

  const isAuth = useSelector(state => state.loginReducer.isAuth);

  return (
    <Switch>
      {isAuth ?
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        )) :
        publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      <Redirect to={MARKET_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
