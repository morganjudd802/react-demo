import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/layout.component.tsx";
import {Home} from "./components/home/home.component.tsx";
import {StateDemo} from "./components/state-demo/state-demo.component.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="state-demo" element={<StateDemo />} />

                    {/* 404 route */}
                    {/* <Route path="*" element={<NotFound />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
