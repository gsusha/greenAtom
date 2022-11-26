import * as React from "react"
import {ReactNode} from "react"
import * as PropTypes from 'prop-types'

interface Props {
    children?: ReactNode
}

function UserLayout({children}: Props) {
    return (
        <div style={{'padding': '25px'}}>
            {children}
        </div>
    );
}

export default UserLayout;