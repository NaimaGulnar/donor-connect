import { useState } from "react"

// this component will be imported in the component "ProfilePageForm.jsx"
export default function SelectBloodGroup() {

    // state to store the selected blood group
    const [selectedBloodGroup, setSelectedBloodGroup] = useState("");

    // an array of all possible blood groups
    let bloodGroupArray = ["A+", "A-", "B+", "B-", "O+", "O-"];

    // function to handle changes in the selected blood group
    function handleChange(e) {
        // update the selected blood group state when the dropdown value changes
        setSelectedBloodGroup(e.target.value);
    }

    return (
        // created a dropdown to select blood groups
        <select className="bld-grp" onChange={handleChange} value={selectedBloodGroup}>
            {/* default option prompting the user to select a blood group */}
            <option value="" disabled>
                Select Your Blood Group
            </option>
            {/* map over bloodGroupArray to generate options for each blood group */}
            {bloodGroupArray.map((bldgrp, index) => (
                <option key={index} value={bldgrp}>{bldgrp}</option>
            ))}
        </select>
    )
}
