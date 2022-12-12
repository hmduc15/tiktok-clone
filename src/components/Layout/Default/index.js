import Header from "./Header";
import SideBar from "./Sidebar";

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="Container">
                <SideBar />
                <div className="Vid-Content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;