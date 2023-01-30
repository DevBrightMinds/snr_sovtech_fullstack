import React, { memo } from "react";

const Pagination: React.FC<{
    CharsPosition: number,
    TotalLength: number,
    toggleItems: any
}> = ({ CharsPosition,
    TotalLength,
    toggleItems }): JSX.Element => {
        return <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li style={{ cursor: "pointer", pointerEvents: CharsPosition > 1 ? "auto" : "none" }} className="page-item"><span style={{ color: "#333333" }} className="page-link" onClick={() => toggleItems("prev")}>Prev</span></li>
                    <li style={{ cursor: "pointer", pointerEvents: "none" }} className="page-item"><span className="page-link">{CharsPosition}</span></li>
                    <li style={{ cursor: "pointer", pointerEvents: TotalLength / 10 < CharsPosition ? "none" : "auto" }} className="page-item"><span style={{ color: "#333333" }} className="page-link" onClick={() => toggleItems("next")}>Next</span></li>
                </ul>
            </nav>
        </>
    }

export default memo(Pagination);