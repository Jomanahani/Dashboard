import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import Steps from "../Components/Steps";
import Back from "../Components/Back";
import { Layout, Main, Spinner } from "../global/style";

const Home = lazy(() => import("../Pages/Home"));
const UnitInformation = lazy(() => import("../Pages/UnitInformation"));
const Location = lazy(() => import("../Pages/Location"));
const Calendar = lazy(() => import("../Pages/Calendar"));

export const PATHS = {
  HOME: "/",
  UNITINFORMATION: "/unitInformation",
  LOCATION: "/location",
  CALENDAR:"/calendar"
};

export default function Router() {
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
            <Route path={PATHS.UNITINFORMATION} element={<UnitInformation />} />
            <Route path={PATHS.LOCATION} element={<Location />} />
            <Route path={PATHS.CALENDAR} element={<Calendar />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        </Main>
      </Layout>
    </>
  );
}
