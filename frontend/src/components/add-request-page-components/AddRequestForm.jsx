import SelectBloodGroup from "../profile-form-page-components/SelectBloodGroup"

function AddRequestForm() {
    return (
        <>
            <h1 className="add-request-heading">
                Add Request
            </h1>
            <div className="add-request-form-container">
                <form className="add-request-form">
                    <label>Need Blood in (hours) : </label>
                    <input type="radio" name="hour" value="24"
                    />24
                    <input type="radio" name="hour" value="48" />48
                    <input type="radio" name="hour" value="72" />72
                    <input type="radio" name="hour" value="96" />96
                    <br />
                    <label>Donation Hours : </label>
                    <input type="time" />
                    &nbsp;-&nbsp;
                    <input type="time" />
                    <br />
                    <label>Blood Group : </label>
                    <SelectBloodGroup />
                    <br />
                    <label>No. of units needed (in mL) : </label>
                    <input type="number" />
                    <br />
                    <label>Message to Donor (Reason for blood request) : </label>
                    <br />
                    <textarea type="text" cols={35} rows={5} />
                </form>
                <div className="request-pg-btn-container">
                    <button className="request-btn">Make Request</button>
                    <button className="cancel-request-btn">Cancel Request</button>
                </div>
            </div>
        </>
    )
}

export default AddRequestForm
