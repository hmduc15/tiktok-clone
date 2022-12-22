import Header from "./Header/LayoutsHeader";
import SideBar from "./Sidebar/Sidebar";

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="Content" style={{ paddingTop: 60 }}>
                <div className="Body-container">
                    <SideBar />
                    <div className="Vid-Content">{children}</div>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;