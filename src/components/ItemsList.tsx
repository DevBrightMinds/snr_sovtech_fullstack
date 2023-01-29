import React from "react";

import { CardStyle } from "../utils/styles/CardStyle";

const ItemsList: React.FC<{ List: any[], Label: string }> = ({ List, Label }): JSX.Element => {
    return <>
        <label style={CardStyle.listLabel}>{Label}:</label>
        <select name="alias" id="alias" multiple>
            {List.map((item: string, index: number) => {
                return <option key={index} value={item}>{item}</option>
            })}
        </select>
    </>
}
export default ItemsList;