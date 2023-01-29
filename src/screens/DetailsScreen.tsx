import React, { useState, useCallback } from "react";

import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import ItemsList from "../components/ItemsList";

import NavBar from "../components/NavBar";
import Character from "../utils/interfaces/Character";

import { CardStyle } from "../utils/styles/CardStyle";

const DetailsScreen: React.FC<{}> = (): JSX.Element => {
    const SelectedCharacter: Character = useSelector((state: any) => state.SelectedCharacter);

    const [DisplayImage, setDisplayImage] = useState<boolean>(false);
    const [DisplayAlias, setDisplayAlias] = useState<boolean>(false);
    const [DisplayAbilities, setDisplayAbilities] = useState<boolean>(false);

    const toggleItem = (type: string) => {
        switch (type) {
            case "image":
                setDisplayImage(!DisplayImage);
                break;
            case "alias":
                setDisplayAlias(!DisplayAlias);
                break;
            default:
                setDisplayAbilities(!DisplayAbilities);
                break;
        }
    }

    return <>
        <NavBar />
        <div className="main-container" style={{ width: "80%", margin: "0 auto", padding: "2% 0 0 0" }}>
            <h4 className="container-heading">Selected Character Details</h4>
            {Object.keys(SelectedCharacter).length > 0 ?
                <div className="details-container" style={{
                    margin: "2% 0 0 0",
                    backgroundColor: "whitesmoke",
                    padding: 10,
                    width: "40%",
                    boxShadow: "2px 2px 2px #aaaaaa",
                    borderRadius: 10
                }}>
                    <div className="details-header">
                        <h4>{SelectedCharacter.name}</h4>
                    </div>
                    <div className="details-body">
                        <p><span style={CardStyle.bodySpan}>Status</span>: {SelectedCharacter.status}</p>
                        <p><span style={CardStyle.bodySpan}>Species</span>: {SelectedCharacter.species}</p>
                        <p><span style={CardStyle.bodySpan}>Gender</span>: {SelectedCharacter.gender}</p>
                        <p><span style={CardStyle.bodySpan}>Hair</span>: {SelectedCharacter.hair}</p>
                        <p onClick={() => toggleItem("alias")}><span style={CardStyle.bodySpan}>Alias</span>: <span style={{ cursor: "pointer", color: "red", fontSize: 13, textDecoration: "underline" }}>View Alias ({SelectedCharacter.alias.length})</span></p>
                        <p><span style={CardStyle.bodySpan}>Origin</span>: {SelectedCharacter.origin}</p>
                        <p onClick={() => toggleItem("abilities")}><span style={CardStyle.bodySpan}>Abilities</span>: <span style={{ cursor: "pointer", color: "red", fontSize: 13, textDecoration: "underline" }}>View Abilities ({SelectedCharacter.abilities.length})</span></p>
                        <p onClick={() => toggleItem("image")}><span style={CardStyle.bodySpan}>Image</span>: <span style={{ cursor: "pointer", color: "red", fontSize: 13, textDecoration: "underline" }}>View Image</span></p>
                    </div>
                </div> :
                "No data available"
            }

            <div className="list-container" style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 0 0 0"
            }}>
                <div className="alias" style={{
                    display: DisplayAlias && SelectedCharacter.alias.length > 0 ? "grid" : "none",
                    padding: "10px 0 0 0"
                }}>
                    <ItemsList List={SelectedCharacter.alias} Label={"Alias"} />
                </div>
                <div className="abilities" style={{
                    padding: "10px 0 0 0",
                    display: DisplayAbilities && SelectedCharacter.abilities.length > 0 ? "grid" : "none"
                }}>
                    <ItemsList List={SelectedCharacter.abilities} Label={"Abilities"} />
                </div>
            </div>
            <div className="image-view" style={{ display: DisplayImage ? "grid" : "none", margin: "20px 0 0 0" }}>
                <label style={CardStyle.listLabel}>Image</label>
                {SelectedCharacter.img_url ?
                    <img src={SelectedCharacter.img_url} alt="character image" />
                    : ""
                }
            </div>
        </div>
        <Footer />
    </>
}

export default DetailsScreen;
