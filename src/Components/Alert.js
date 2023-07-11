import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=> {
        var value = word.toLowerCase();
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return (
        props.alert &&  <div className={'alert alert-${props.alert.type} alert-dismissible fade show'} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}
