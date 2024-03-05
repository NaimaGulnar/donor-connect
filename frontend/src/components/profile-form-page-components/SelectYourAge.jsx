import { useState } from 'react'

// this component will be imported in the component "ProfilePageForm.jsx"
export default function SelectYourAge() {

    // state to store the selected age
    const [selectedAge, setSelectedAge] = useState("");

    // generate an array of ages from 18 to 65
    let ageArray = [];
    for (let i = 18; i <= 65; i++) {
        ageArray.push(i);
    }

    // function to handle changes in the selected age
    function handleChange(e) {
        // update the selected age state when the dropdown value changes
        setSelectedAge(e.target.value)
    }

    return (
        // created a dropdown to select age
        <select className="age" onChange={handleChange} value={selectedAge}>
            {/* default option prompting the user to select an age */}
            <option value="" disabled>Select your age</option>
            {/* map over ageArray to generate options for each age */}
            {ageArray.map((age, index) => (
                <option key={index} value={age}>{age}</option>
            ))}
        </select>
    )
}
