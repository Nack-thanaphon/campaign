import React from 'react'

const Footer = ({
    name
}: {
    name: string
}) => {
    return (
        <div className="text-center my-4">
            www.tab-on.com/{name}
        </div>
    )
}

export default Footer