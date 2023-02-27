import React from "react";
import {AppsCard, AppsHeading, PageHeading, TopAppsCard} from "../components";

const Get_started = () => {
  return (
    <div className="w-[100%]">
      <div className="">
        <PageHeading
          title="Get Started"
          description="Unleash your new device’s potential with these powerful apps. Ready to get started?"
        />
      </div>
      <div className="my-[50px]">
        <AppsHeading title="Top Apps" />
        <div className="">
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
        </div>
      </div>
      <div className="">
        <AppsHeading title="Featured Apps" />
        <div className="flex justify-center items-center flex-wrap gap-[15px]">
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
        </div>
      </div>
    </div>
  );
};

export default Get_started;
