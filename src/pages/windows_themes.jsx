import React from "react";
import { AppsHeading, PageHeading, TopAppsCard } from "../components";

const Windows_themes = () => {
  return (
    <div className="w-[100%]">
      <div className="">
        <PageHeading
          title="Themes"
          description="Personalise your Windows desktop with a wide variety of new, great looking themes from the Microsoft Store"
        />
      </div>
      <div className="my-[50px]">
        <AppsHeading title="Featured themes from Microsoft" />
        <div className="">
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
          <TopAppsCard />
        </div>
      </div>
    </div>
  );
};

export default Windows_themes;
