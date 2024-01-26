import React from 'react'
import { Nav } from 'react-bootstrap'

type Props = {
    name: string,
    setActiveTab: () => void,
}

const SidebarButton = (props: Props) => {
    return (
        <Nav.Link
            className="profile-edit-nav-btn profile-sidebar-text bi bi-person"
            onClick={props.setActiveTab}>
            {props.name}
        </Nav.Link>)
}

export default SidebarButton