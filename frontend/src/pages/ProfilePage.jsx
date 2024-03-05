function ProfilePage() {
    return (
        <div className="profile-page-container">
            <h1 className="profile-page-heading">
                My Profile
            </h1>
            <div className="profile-container">
                <div className="profile-img">
                    {/* Your Profile Photo */}
                </div>
                <div className="profile-details-container">
                    Your profile details
                </div>
                <button className="edit-profile-btn">
                    Edit your Profile
                </button>
            </div>
        </div>
    )
}

export default ProfilePage
