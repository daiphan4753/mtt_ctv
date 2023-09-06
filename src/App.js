import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import Home from "./screens/Home";
import Sales from "./screens/Sales";
import Notification from "./screens/Notifications";
import Setting from "./screens/Setting";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";

export default function App() {
  const [value, setValue] = useState('/home');
  const nav = useNavigate();
  return (
    <div className="app">
      <Routes>
        <Route path="/setting" element={<Setting />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/sales" element={<Sales />} />
        <Route index element={<Home />} />
        <Route path="/home" element={<Home/>}/>
        {/* <Route path="*" element={<NoPage/>}/> */}
      </Routes>
      <Paper
        sx={{ position: "absolute", bottom: 0, width: "100%"}}
        elevation={3}
      >
        <BottomNavigation
          showLabels={true}
          value={value}
          onChange={(e, value) => setValue(value)}
        >
          <BottomNavigationAction
            value="/home"
            icon={<HomeIcon />}
            onClick={() => nav("/home")}
          />
          <BottomNavigationAction
            value="/sales"
            icon={<ViewInArRoundedIcon />}
            onClick={() => nav("/sales")}
          />
          <BottomNavigationAction
            value="/notification"
            icon={<NotificationsActiveIcon />}
            onClick={() => nav("/notification")}
          />
          <BottomNavigationAction
            value="/setting"
            icon={<DensitySmallIcon />}
            onClick={() => nav("/setting")}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}
