import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, btnLoad, upload, login, follow = false, following, onClick, children, menuItem }) {

    console.log(to);
    let Comp = 'button';
    const props = {
        onClick,
    }
    const classes = cx("wrapper", {
        upload,
        follow,
        login,
        menuItem,
        btnLoad
    });

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props} >
            {children}
        </Comp>
    );
}

Button.propTyeps = {
    to: PropTypes.string,
    href: PropTypes.string,
    btnLoad: PropTypes.string,
    upload: PropTypes.string,
    login: PropTypes.string,
    follow: PropTypes.string,
    following: PropTypes.string,
    onClick: PropTypes.string,
    children: PropTypes.node.isRequired,
    menuItem: PropTypes.string
}

export default Button;