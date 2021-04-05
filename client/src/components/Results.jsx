import { useContext } from "react";
import MyContext from "../MyContext";

const Results = props =>{
    const {sortedResults} = useContext(MyContext);

    return(
        <div className="flex-container p-2">
            <div className="d-flex flex-column" style={{height:"75vh", overflowY:"auto"}}>
            <table className="table table-light table-hover">
                <thead>
                    <tr>
                        <th>Provider Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedResults 
                    ? 
                    sortedResults.map((r,i)=>{
                        return (
                            <tr key={i}>
                                <td>{r.properties.provider_brand_name}</td>
                                {
                                r.properties.address !== null
                                ? <td>{r.properties.address}, {r.properties.city}</td>
                                : <td>{r.properties.city}</td>
                                }
                                <td>{<a href={r.properties.url}>Book Appointment</a>}</td>
                            </tr>
                        );
                    })
                    :
                    ""
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Results;