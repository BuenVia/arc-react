import { useEffect } from "react";

export default function ResourceDownload() {
    


    useEffect(() => {
        setTimeout(function dlDoc() {
            document.getElementById("dlBtn").click();
          }, 1500);
    }, [])

    return (
            <div>
                <h4>Thank you for submitting.</h4>
                <p>Your download should beging shortly. If it doesn't, please right click the button and select 'Save-As'</p>
                <a href="./assets/change_is_inevitable.pdf" download="change_is_inevitable.pdf" id="dlBtn" className="btn btn-light">Download</a>
            </div>
    )
}