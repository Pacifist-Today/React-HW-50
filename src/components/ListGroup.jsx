import React from "react";

function ListGroup (props) {
        const { children } = props
        return (
            <ul className="list-group">
                {React.Children.map(children, (child) => {
                    return <li className="list-group-item">{child}</li>
                })}
            </ul>
        )
}

export default ListGroup