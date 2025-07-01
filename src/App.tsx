import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/Layout.tsx";
import {Home} from "./components/home/Home.tsx";
import {UseStateDemo} from "./components/use-state-demo/UseStateDemo.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="state-demo" element={<UseStateDemo />} />

                    {/* 404 route */}
                    {/* <Route path="*" element={<NotFound />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
