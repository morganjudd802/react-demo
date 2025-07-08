import './Layout.scss';
import {NavLink, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={'main-container'}>
            <div className={'header-container'}>
                <span>React Demo</span>
            </div>
            <div className={'layout-container'}>
                <div className={'sidebar-container'}>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="use-state-demo">Hook Example: <code>useState</code></NavLink>
                        <NavLink to="use-effect-demo">Hook Example: <code>useEffect</code></NavLink>
                        <NavLink to="form-demo">Form Example</NavLink>
                        <NavLink to="cart-demo">Cart Example</NavLink>
                    </nav>
                </div>
                <div className={'content-container'}>
                    <div className={'content'}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}