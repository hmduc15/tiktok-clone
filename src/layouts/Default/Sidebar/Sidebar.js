import classNames from 'classnames/bind';


import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles);
function SideBar() {
    return (
        <div className={cx("sidenav-container")}>
            <div className={cx("scroll-container")}>
                <div className={cx("wrapper")}>
                    <div className={cx("main-nav")}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;