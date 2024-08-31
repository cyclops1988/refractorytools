import { useState } from "react";
import FormHeatTransfer from "./FormHeatTransfer";
import Results from "./Results";

export default function HeatTransfer() {
    const [formData, setFormData] = useState({});
    const [qValue, setQValue] = useState(null); 
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    async function getFormData(newData) {
        try {
            // Reset previous error and set loading to true
            setErrorMessage(null);
            setLoading(true);

            // Update form data state
            setFormData((prevState) => ({ ...prevState, ...newData }));

            // Send POST request to the back-end with the new form data
            const response = await fetch("https://refractorytools-40f20b753e0f.herokuapp.com/heattransfer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData), // Use newData directly
            });

            // Check if response is not okay
            if (!response.ok) {
                throw new Error("Failed to fetch data from the server");
            }

            // Parse the response data
            const data = await response.json();
            console.log("Success:", data);

            // Set the result (qValue) state with the response data
            setQValue(data);
        } catch (error) {
            // Set error message state if an error occurs
            setErrorMessage("An error occurred while calculating heat transfer.");
            console.error("Error:", error);
        } finally {
            // Set loading to false once the process is complete
            setLoading(false);
        }
    }

    return (
        <>
            {/* Form Component */}
            <FormHeatTransfer getFormData={getFormData} />

            {/* Loading Indicator */}
            {loading && <div>Loading...</div>}

            {/* Results Component */}
            {qValue && <Results qvalue={qValue} />}

            {/* Error Message */}
            {errorMessage && <div className="error">{errorMessage}</div>}
        </>
    );
}
