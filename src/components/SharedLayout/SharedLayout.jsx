import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import Loader from "components/Loader/Loader";
import { LoaderContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
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
    </>
  );
};

export default SharedLayout;
