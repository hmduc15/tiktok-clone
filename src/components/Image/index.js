import { forwardRef } from "react";

const Image = forwardRef(({ ...props }, ref) => {
    if (!props.src) {
        props.src = "https://img.freepik.com/free-icon/user_318-790139.jpg?w=2000";
    }
    return <img ref={ref} {...props} alt="" />
})

export default Image; 