import React from 'react';

export default function Header({ children }){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
    // { #001--
    //  <h1>{props.title}</h1>
    // --#001 }
}