import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ViewDev from "./pages/ViewDev";
import DevList from "./pages/DevList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Protected from './components/Protected';
import DataService from './services/DataService';

function App() {
  const user = DataService.getData("__pipeline__app__user");
  const token = DataService.getData("__pipeline__app__token");
  const auth =  <Protected loggedIn={user && token}><Layout /></Protected>

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/devs" element={ auth }>
          <Route index element={<DevList />} />
          <Route path="view/:id" element={<ViewDev />} />
        </Route>

        <Route path="/login" element={<Layout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/signup" element={<Layout />}>
          <Route index element={<Signup />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
