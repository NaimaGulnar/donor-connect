import SelectBloodGroup from "./SelectBloodGroup";
import SelectYourAge from "./SelectYourAge";

export default function ProfilePageForm() {
    return (
        <div className="profile-page-form-container">
            <h1 className="profile-form-heading">Profile Details</h1>
            <form className="profile-form">

                <label>Name :</label>
                <br />
                <input type="text" name="name" placeholder="Enter your name" />
                <br />

                <label>Age : </label>
                <SelectYourAge />
                <br />

                <label>Gender :
                    <input className="gender" type="radio" name="gender" value="male" /> <span className="male">Male</span>
                    <input className="gender" type="radio" name="gender" value="female" /> <span className="female">Female</span>
                </label>
                <br />

                <label>Blood Group : </label>
                <SelectBloodGroup />
                <br />

                <label>Country :</label>
                <input type="text" name="country" placeholder="Enter your country name" />
                <br />

                <label>State :</label>
                <input type="text" name="state" placeholder="Enter your state name" />
                <br />

                <label>City :</label>
                <input type="text" name="city" placeholder="Enter your city name" />
                <br />

                <label>Contact no. :</label>
                <input type="tel" name="contact" placeholder="Enter your contact number" />
                <br />

                <label>Email :</label>
                <input type="email" name="email" placeholder="Enter your email id" />
                <br />

                <button type="submit" className="profile-form-done-btn">Done</button>
            </form>
        </div>
    )
}
