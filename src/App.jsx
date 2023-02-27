import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

{
  /*all pages import here */
}

import {
  Home,
  Get_started,
  Productivity,
  Windows_themes,
  Photo_video,
  Business,
  Developer_tools,
  Education,
  Entertainment,
  Helth_fitness,
  Kids_family,
  Lifestyle,
  Multimedia_design,
  Music,
  Newsweather,
  Personal_finance,
  Personalisation,
  Security,
  Shopping,
  Social,
  Sports,
  Travel,
  Utilities_tools,
} from "./pages";

{
  /* components import here */
}

import {Header, Sidebar, Heading} from "./components";

function App() {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const handleSidebarMenu = () => {
    setIsSideMenu((isSideMenu) => !isSideMenu);
  };
  return (
    <div className="relative">
      <BrowserRouter>
        <Header />
        <div className="container mx-auto px-[16px]">
          <div className="lg:flex lg:justify-center  pt-[40px]">
            <div
              className={`lg:min-w-[320px] lg:pr-[42px] max-lg:fixed max-lg:top-[64px] max-lg:z-10 ease-in-out duration-500 max-lg:w-[320px] max-lg:h-full max-lg:bg-white ${
                isSideMenu ? "left-0" : "-left-[100%] "
              }`}
            >
              <Sidebar handleSidebarMenu={handleSidebarMenu} />
            </div>
            <div className="max-w-[500px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[640px] xl:max-w-[814px] 2xl:max-w-[996px]">
              <div className="lg:hidden pb-[14px]">
                <Heading handleSidebarMenu={handleSidebarMenu} />
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/get_started" element={<Get_started />} />
                <Route path="/get_started" element={<Get_started />} />
                <Route path="/productivity" element={<Productivity />} />
                <Route path="/windows_themes" element={<Windows_themes />} />
                <Route path="/photo_video" element={<Photo_video />} />

                {/*categories */}

                <Route path="/business" element={<Business />} />
                <Route path="/developer_tools" element={<Developer_tools />} />
                <Route path="/education" element={<Education />} />
                <Route path="/entertainment" element={<Entertainment />} />
                <Route path="/helth_fitness" element={<Helth_fitness />} />
                <Route path="/kids_family" element={<Kids_family />} />
                <Route path="/lifestyle" element={<Lifestyle />} />
                <Route
                  path="/multimedia_design"
                  element={<Multimedia_design />}
                />
                <Route path="/music" element={<Music />} />
                <Route path="/newsweather" element={<Newsweather />} />
                <Route
                  path="/personal_finance"
                  element={<Personal_finance />}
                />
                <Route path="/personalisation" element={<Personalisation />} />
                <Route path="/security" element={<Security />} />
                <Route path="/shopping" element={<Shopping />} />
                <Route path="/social" element={<Social />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/utilities_tools" element={<Utilities_tools />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
