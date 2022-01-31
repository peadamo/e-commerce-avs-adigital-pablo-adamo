import { React, Fragment } from "react";

const ChildrenComponent = ({ children, otherProp }) => {
    return (
        <Fragment>
            <h1>{otherProp}</h1>
            {children}
        </Fragment>
    )
};

export default ChildrenComponent;
