import React from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { BLOG__DETAIL__ROUTER, HOME_ROUTE } from "../constants/url";

const Home = lazy(() => import("../pages/home"));
const BlogDetail = lazy(() => import("../pages/blog-detail"));
const RouterConfig = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={BLOG__DETAIL__ROUTER} element={<BlogDetail />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
