import './App.css';

import React from "react";

import Home from "./components/home";
import TimelinePage from "./components/timeline-page";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Layout from "./components/layout";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path="/index.html" element={<Navigate to="/" />} />
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/timeline" element={<TimelinePage />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
