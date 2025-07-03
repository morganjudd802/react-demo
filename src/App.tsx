import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/Layout.tsx";
import {Home} from "./components/home/Home.tsx";
import {UseEffectDemo} from "./components/use-effect-demo/UseEffectDemo.tsx";
import {UseStateDemo} from "./components/use-state-demo/UseStateDemo.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="use-state-demo" element={<UseStateDemo />} />
                    <Route path="use-effect-demo" element={<UseEffectDemo />} />

                    {/* 404 route */}
                    {/* <Route path="*" element={<NotFound />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
