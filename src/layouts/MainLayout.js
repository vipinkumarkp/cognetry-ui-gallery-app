// @flow
import React, { Suspense } from "react";
import { connect } from "react-redux";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import TopBar from "../components/Common/TopBar";

// loading
const emptyLoading = () => <div></div>;
const loading = () => <div className="text-center"></div>;

function MainLayout(props) {
  const children = props.children || null;
  return (
    <div className="app">
      <div id="wrapper">
        <Suspense fallback={emptyLoading()}>
          <TopBar {...props} />
        </Suspense>

        <div className="content-page">
          <div className="content">
            <Suspense fallback={loading()}>{children}</Suspense>
          </div>

          <Suspense fallback={emptyLoading()}>
            {<BottomNavigation></BottomNavigation>}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
  };
};
export default connect(mapStateToProps, {})(MainLayout);
