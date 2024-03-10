import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "components/Header/Header";
import Loader from "components/Loader/Loader";
import HelmetCEO from "components/HelmetCEO/Helmet";
import { LoaderContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <HelmetProvider>
        <HelmetCEO/>
        <Header />
        <main>
          <Suspense
            fallback={
              <LoaderContainer>
                <div>
                  <Loader />
                </div>
              </LoaderContainer>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </HelmetProvider>
    </>
  );
};

export default SharedLayout;
