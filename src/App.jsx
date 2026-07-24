import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";

import Homepage from "./pages/Homepage";
import FoundersNote from "./pages/FoundersNote";
import SchoolAnthem from "./pages/SchoolAnthem";
import Gallery from "./pages/Gallery";
import SecondaryPrograms from "./pages/SecondaryPrograms";
import PrimaryPrograms from "./pages/PrimaryPrograms";
import CrecheNurseryPrograms from "./pages/CrecheNurseryPrograms";
import Tuition from "./pages/Tuition";
import AdmissionProcess from "./pages/AdmissionProcess";
import CoCurricular from "./pages/CoCurricular";
import ContactUs from "./pages/ContactUs.jsx";
import FairAtAGlance from "./pages/FairAtAGlance.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="fair-havens-at-a-glance" element={<FairAtAGlance />} />
          <Route path="founders-note" element={<FoundersNote />} />
          <Route path="school-pledge-and-anthem" element={<SchoolAnthem />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="secondary-programs" element={<SecondaryPrograms />} />
          <Route path="primary-programs" element={<PrimaryPrograms />} />
          <Route
            path="creche-and-nursery-programs"
            element={<CrecheNurseryPrograms />}
          />
          <Route path="tuition" element={<Tuition />} />
          <Route path="admission-process" element={<AdmissionProcess />} />
          <Route
            path="co-curricular-activities-and-clubs"
            element={<CoCurricular />}
          />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
