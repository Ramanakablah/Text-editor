import React from 'react'

export default function alert(props) {
    return (
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.message}</strong>
        </div>
    )
}
