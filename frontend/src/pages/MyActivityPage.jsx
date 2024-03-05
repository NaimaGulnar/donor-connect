import CongratulationMsg from "../components/my-activity-page-components/achievements-1/CongratulationMsg"

function MyActivityPage() {
    return (
        <div className="my-activity-page-container">
            <h1 className="my-activity-heading">MY ACTIVITY</h1>
            <div className="achievements-container">
                <h2 className="achievements-heading">ACHIEVEMENTS</h2>
                <CongratulationMsg />
            </div>
        </div>
    )
}

export default MyActivityPage
