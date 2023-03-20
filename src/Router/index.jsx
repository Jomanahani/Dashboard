import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import Steps from "../Components/Steps";
import Back from "../Components/Back";

import { Layout, Main, Spinner } from "../global/style";

import { useCategoryContext } from "../Context/CartContext";

const Home = lazy(() => import("../Pages/Home"));
const UnitInformation = lazy(() => import("../Pages/UnitInformation"));
const Location = lazy(() => import("../Pages/Location"));
const Calendar = lazy(() => import("../Pages/Calendar"));
const Details = lazy(() => import("../Pages/Details"));
const Complete = lazy(() => import("../Pages/Complete"));
const AllCategories = lazy(() => import("../Pages/AllCategories"));

export const PATHS = {
  HOME: "/",
  UNITINFORMATION: "/unitInformation",
  LOCATION: "/location",
  CALENDAR: "/calendar",
  DETAILS: "/details",
  COMPLETE: "/complete",
  ALLCATEGORIES: "/allCategories",
};

export default function Router() {
  const {
    state: { categories },
  } = useCategoryContext();
  return (
    <>
      <Layout>
        <NavBar />
        <SideBar />
        <Steps />
        <Main>
          <Back />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route index element={<Home />} />
              <Route
                path={PATHS.UNITINFORMATION}
                element={<UnitInformation />}
              />
              <Route path={PATHS.LOCATION + "/:id"} element={<Location />} />
              <Route path={PATHS.CALENDAR + "/:id"} element={<Calendar />} />
              <Route path={PATHS.DETAILS + "/:id"} element={<Details />} />
              <Route path={PATHS.COMPLETE + "/:id"} element={<Complete />} />
              <Route path={PATHS.ALLCATEGORIES} element={<AllCategories />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Main>
      </Layout>
    </>
  );
}
