import React from "react";

const ResultModal: React.FC<{
    closeModal: any,
    message: string,
    heading: string,
    status: boolean
}> = ({ closeModal,
    message,
    heading,
    status }): JSX.Element => {
        return <>
            <div className="modal-container" style={{
                backgroundColor: "whitesmoke",
                position: "absolute",
                left: "50%",
                width: "30%",
                display: status ? "block" : "none",
                transform: "translate(-50%, 30%)",
                zIndex: 999
            }}>
                <div className="modal-header" style={{ padding: 10, backgroundColor: "#333333", color: "#ffffff" }}>
                    <h4>{heading}</h4>
                </div>
                <div className="modal-body">
                    <p style={{ padding: 10 }}>{message}</p>
                </div>
                <div className="modal-footer" style={{ padding: 10 }}>
                    <button className="btn btn-danger" onClick={closeModal}>Close</button>
                </div>
            </div>
            <div className="backdrop" style={{
                backgroundColor: "#f5f5f55c",
                position: "fixed",
                height: "100%",
                width: "100%",
                zIndex: 998,
                display: status ? "block" : "none",
                top: 0
            }}></div>
        </>
    }

export default ResultModal;