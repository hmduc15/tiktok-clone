import classNames from "classnames/bind";
import { useState, useRef } from "react"

import styles from '../Popper.module.scss';
import Header from "./Header";
import MenuItems from './MenuItems'
import Wrapper from "../Wrapper";
import Tippy from "@tippyjs/react";

const cx = classNames.bind(styles);


function MenuPopper({ children, items, MainMenu, SubMenu }) {
    const [menu, setMenu] = useState([{ data: items }])
    const current = menu[menu.length - 1]
    const divRef = useRef();

    const render = () => {
        return (
            <div ref={divRef} className={cx('menu-body')}>
                {
                    current.data.map((item, index) => {
                        const isSubmenu = !!item.submenu;
                        return <MenuItems key={index} data={item}
                            onClick={() => {
                                divRef.current.classList.add(cx("scroll"))
                                if (isSubmenu) {
                                    setMenu(prev => [...prev, item.submenu]);
                                }
                            }}
                        />
                    })
                }
            </div>

        )
    }

    return (
        <Tippy
            interactive
            trigger="mouseenter"
            animation={false}
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("wrapper")} tabIndex="-1" {...attrs} >
                    {menu.length > 1 && <Header title="Language" onBack={() => {
                        divRef.current.classList.remove(cx("scroll"))
                        setMenu([{ data: items }])
                    }} />}
                    {render()}
                </div>
            )
            }
            onHide={() => setMenu(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>

    );
}

export default MenuPopper;