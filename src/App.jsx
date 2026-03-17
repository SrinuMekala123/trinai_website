// src/App.jsx
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ============ MAIN PAGES ============
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Main from "./pages/Main";
import Categories from "./pages/Categories";
import Cameraproductsdetails from "./pages/Cameraproductdetails";
import Viewproducts from "./pages/Viewproducts";
import Products from "./pages/Products";
import Details from "./components/Extra";
import MyCarousel from "./pages/Other";
import FluidTabs from "./Practice/Lucidtab";
import FileUpload from "./pages/image";
import Smartbus from "./pages/Smartbus";
import Vms from "./components/Vms";
import Securitysolutions from "./components/Securitysolutions";
import SecurityDetail from "./components/SecurityDetail";
import ScenarioDetails from "./pages/ScenarioDetails";
import Privacy_policy from "./components/privacy_policy";

// ============ SECURITY SOLUTIONS ============
import Motiondetection from "./security-solutions/Motion-detection";
import FacialRecognition from "./security-solutions/FacialRecognition";
import RemoteMonitoring from "./security-solutions/RemoteMonitoring";
import Crowd_monitoring from "./security-solutions/Crowd_monitoring";
import Lpr from "./security-solutions/Lpr";
import Pid from "./security-solutions/Pid";
import BAC from "./security-solutions/BAC";
import RFID_based from "./security-solutions/RFID_based";
import Public_event_security from "./security-solutions/Public_event_security";
import QMS from "./security-solutions/QMS";
import People_counting from "./security-solutions/People_counting";
import ATM_services from "./security-solutions/ATM_services";
import Warehouse_surveilance from "./security-solutions/Warehouse_surveilance";
import High_value_tracking from "./security-solutions/High_value_tracking";
import Server_room_monitoring from "./security-solutions/Server_room_monitoring";
import PPE_detection from "./security-solutions/PPE_detection";
import FIre_smoke_detection from "./security-solutions/FIre&smoke_detection";
import Real_time_hazard from "./security-solutions/Real_time_hazard";
import Automated_emergency_response from "./security-solutions/Automated_emergency_response";
import Crossline_detection from "./security-solutions/Crossline_detection";

// ============ ADMIN PAGES ============
import Dashboard from "./admin/Home";
import Login from "./admin/Login";
import AMain from "./admin/Main";
import Users from "./admin/Users";
import Stock from "./admin/Stock";
import AProducts from "./admin/Products";
import Acameras from "./admin/Acameras";
import Nvr from "./admin/Nvr";
import Poe from "./admin/Poe";
import Server from "./admin/Server";

// ============ UTILITY: Redirect old query-param URLs ============
const OldUrlRedirect = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("query");

  if (id) {
    // Redirect to products page with fallback category
    return <Navigate to={`/products/bullet-cameras/${id}`} replace />;
  }
  return <Navigate to="/products" replace />;
};

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* ============ MAIN LAYOUT ROUTES ============ */}
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="about" element={<About />} />

          {/* ✅ PRODUCTS - Category & Dynamic Product Routes */}
          <Route path="products" element={<Products />} />

          {/* Category pages: /products/bullet-cameras */}
          <Route path="products/:category" element={<Categories />} />

          {/* ✅ NEW: Clean product detail route with category + product name + ID */}
          {/* Format: /products/bullet-cameras/8mp-hd-bullet-camera/20 */}
          <Route
            path="products/:category/:product/:id"
            element={<Cameraproductsdetails />}
          />

          {/* ✅ Fallback: Old query-param redirect */}
          <Route path="cemaradetails" element={<OldUrlRedirect />} />

          {/* Other existing routes */}
          <Route path="viewproducts" element={<Viewproducts />} />
          <Route path="extra" element={<Details />} />
          <Route path="carousel" element={<MyCarousel />} />
          <Route path="fluid" element={<FluidTabs />} />
          <Route path="image" element={<FileUpload />} />
          <Route path="privacy-policy" element={<Privacy_policy />} />
          <Route path="smartbus" element={<Smartbus />} />
          <Route path="vms" element={<Vms />} />

          {/* Security Solutions */}
          <Route
            path="security/motion-detection"
            element={<Motiondetection />}
          />
          <Route
            path="security/facial-recognition"
            element={<FacialRecognition />}
          />
          <Route
            path="security/remote-monitoring"
            element={<RemoteMonitoring />}
          />
          <Route
            path="security/crowd-monitoring"
            element={<Crowd_monitoring />}
          />
          <Route path="security/lpr" element={<Lpr />} />
          <Route path="security/pid" element={<Pid />} />
          <Route path="security/bac" element={<BAC />} />
          <Route path="security/rfid-entry" element={<RFID_based />} />
          <Route
            path="security/public-event-security"
            element={<Public_event_security />}
          />
          <Route path="security/qms" element={<QMS />} />
          <Route
            path="security/people-counting"
            element={<People_counting />}
          />
          <Route path="security/atm-security" element={<ATM_services />} />
          <Route
            path="security/warehouse-surveillance"
            element={<Warehouse_surveilance />}
          />
          <Route
            path="security/asset-tracking"
            element={<High_value_tracking />}
          />
          <Route
            path="security/server-monitoring"
            element={<Server_room_monitoring />}
          />
          <Route path="security/ppe-detection" element={<PPE_detection />} />
          <Route
            path="security/fire-smoke"
            element={<FIre_smoke_detection />}
          />
          <Route
            path="security/real-time-hazard"
            element={<Real_time_hazard />}
          />
          <Route
            path="security/emergency-response"
            element={<Automated_emergency_response />}
          />
          <Route
            path="security/crossline-detection"
            element={<Crossline_detection />}
          />

          {/* Scenario Details */}
          <Route path="solutions/:id" element={<ScenarioDetails />} />
        </Route>

        {/* ============ ADMIN ROUTES (Separate Layout) ============ */}
        <Route path="dashboard/login" element={<Login />} />

        <Route path="dashboard/home" element={<Dashboard />}>
          <Route index element={<AMain />} />
          <Route path="users" element={<Users />} />
          <Route path="stock" element={<Stock />} />
          <Route path="products" element={<AProducts />} />
          <Route path="cameras" element={<Acameras />} />
          <Route path="nvr" element={<Nvr />} />
          <Route path="poe" element={<Poe />} />
          <Route path="server" element={<Server />} />
        </Route>

        {/* ============ 404 CATCH-ALL ============ */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-gray-600 mb-6">Page not found</p>
                <Navigate to="/" replace />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
