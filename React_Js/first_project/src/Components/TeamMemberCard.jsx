import React from "react";

function MemberCard({ name, role, image }) {
    console.log(name, role, image)
    return (
        <>
            <p>
                <div>
                    image: <img src={image} alt="image not loaded" /> <br />
                    name : {name} <br />
                    role : {role}
                </div>
            </p>

        </>
    )
}

export default MemberCard;