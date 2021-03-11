import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { connect } from "react-redux";

import { allFlattenRoutes as routes } from "./index";

const loading = () => <div></div>;
const mainLayout = Loadable({
  loader: () => import("../layouts/MainLayout"),
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  },
  loading,
});

function Routes(props) {
  const Layout = mainLayout;
  return (
    <BrowserRouter>
      <Layout {...props}>
        <Switch>
          {routes.map((route, index) => {
            return !route.children ? (
              <route.route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              ></route.route>
            ) : null;
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(Routes);
