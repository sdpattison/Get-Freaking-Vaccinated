import {ArrowDownCircle} from 'react-bootstrap-icons';

const MainContent = props =>{
    return(
        <div className="flex-container mt-3 p-2">
            <div className="d-flex justify-content-center">
                <p>Use the drop down menu to select the state you're from to see available COVID vaccine appointments in real time.
                </p>
            </div>
            <div className="d-flex justify-content-center">
                <p>Right now, the API we are using is in its infancy, so there's no reliable way to search by county.  The search results are sorted by cities, and the best shortcut to use if you are in a large State is using 'ctrl f' to search for the cities in your area.
                </p>
            </div>
            <div className="d-flex justify-content-center">
                <p><ArrowDownCircle /></p>
            </div>
            <div className="d-flex justify-content-center">
                <p>Providers Scanned: Walgreens, CVS, Walmart, Kroger, and local pharmacies grocery stores.</p>
            </div>
            <div className="d-flex justify-content-center">
                <p className="fw-bolder">Local hospitals and other clinics are NOT checked, so check your local healthcare providers if our data shows no appointments in your area!</p>
            </div>
        </div>
    );
}

export default MainContent;