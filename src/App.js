import './App.css';

import React from "react";

import Home from "./components/home";
import TimelinePage from "./components/timeline-page";
import Layout from "./components/layout";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
 		{/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
		<BrowserRouter>
			<Routes>
				<Route path="/index.html" element={<Navigate to="/" />} />
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/timeline" element={<TimelinePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
