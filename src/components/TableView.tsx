import React, {memo} from "react";
import Character from "../utils/interfaces/Character";

import Pagination from "./Pagination";

const TableView: React.FC<{
    List: Character[],
    getSelectedRow: any,
    CharsPosition: number,
    toggleItems: any,
    TotalLength: number
}> = ({ List,
    getSelectedRow,
    CharsPosition,
    toggleItems,
    TotalLength }): JSX.Element => {
        return <>
            <div className="table-container" style={{ width: "100%", overflowX: "auto", overflowY: "hidden", padding:"20px 0 0 0" }}>
                <table className="table table-striped">
                    <thead style={{ backgroundColor: "#333333", color: "#ffffff" }}>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Origin</th>
                            <th scope="col">Species</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {List.map((character: any) => {
                            return <tr style={{ cursor: "pointer" }} onClick={() => getSelectedRow(character)} key={character.id}>
                                <th scope="row">{character.id}</th>
                                <td>{character.name}</td>
                                <td>{character.origin}</td>
                                <td>{character.species}</td>
                                <td>{character.gender}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination toggleItems={toggleItems} TotalLength={TotalLength} CharsPosition={CharsPosition} />
        </>
    }

export default memo(TableView);
