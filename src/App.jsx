import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import {HiBars3} from "react-icons/hi2";
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

function App() {
  return (
    <div className="container mx-auto px-[16px]">
      <BrowserRouter>
        <Header />
        <div className="flex justify-between">
          <div className="md:w-[320px] md:pr-[42px]">
            <Sidebar />
          </div>
          <div className="w-[100%]">
            <div className="flex items-center justify-between md:hidden">
              <div className="flex items-center gap-x-[12px] ">
                <span className="">
                  <HiBars3 size={16} />
                </span>
                <h1 className="">Apps</h1>
              </div>
              <input
                type="text"
                name=""
                id=""
                className="border-emerald-900 border-2"
              />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
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
              <Route path="/multimedia_design" element={<Multimedia_design />} />
              <Route path="/music" element={<Music />} />
              <Route path="/newsweather" element={<Newsweather />} />
              <Route path="/personal_finance" element={<Personal_finance />} />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
