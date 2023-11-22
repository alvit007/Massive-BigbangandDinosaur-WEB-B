import React from "react";
import Button_settings from "./component/Button_settings";
import Change_pass from "./Change_pass";
import Help from "./Help";
import About_us from "./About_us";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Setting = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/setting" element={<Button_settings />} />
    <Route path="/change_pass" element={<Change_pass />} />
    <Route path="/help" element={<Help />} />
    <Route path="/about_us" element={<About_us />} />
    </Routes>
    </BrowserRouter>
  );
};
export default Setting;
