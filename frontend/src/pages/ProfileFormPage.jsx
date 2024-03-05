import ProfilePageForm from "../components/profile-form-page-components/ProfilePageForm"
import ProfilePageLeftSideComponent from "../components/profile-form-page-components/ProfilePageLeftSideComponent"

export default function ProfileFormPage() {
    return (
        <div className="profile-form-page-container">
            <ProfilePageLeftSideComponent />
            <ProfilePageForm />
        </div>
    )
}
