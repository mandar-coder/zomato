import React from 'react'

function HomeLayout({
    children
}) {
    return (
        <div>
         <h1>Navigation</h1> 
         {children} 
        </div>
    );
}

export default HomeLayout;
