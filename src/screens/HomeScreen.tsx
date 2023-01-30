import { useState, useEffect, useRef, useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { MainServices } from "../utils/Services";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TableView from "../components/TableView";
import ResultModal from "../components/ResultModal";

import {
    selectedCharacter,
    selectedPagePosition
} from "../utils/Redux/Actions/MainActions";
import { useDispatch, useSelector } from "react-redux";

import Character from "../utils/interfaces/Character";

const App: React.FC<{}> = (): JSX.Element => {
    const isMounted = useRef(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Services = new MainServices();

    const CharactersPerPage: number = 10;
    const SelectedPageIndex: number = useSelector((state: any) => state.SelectedPagePosition);

    const [Feedback, setFeedback] = useState("");
    const [FeedbackHeading, setFeedbackHeading] = useState("");

    const [Status, setStatus] = useState(false);
    const [Loading, setLoading] = useState(true);

    const [Characters, setCharacters] = useState<any[]>([]);

    const [CurrentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (isMounted.current) {
            if (SelectedPageIndex > 1)
                setCurrentPage(SelectedPageIndex);
        } else {
            getAllChracters();
            isMounted.current = true;
            dispatch(selectedPagePosition(SelectedPageIndex));
        }

    }, [Characters])

    const getAllChracters = () => {
        try {
            Services.GetAllCharacters()
                .then((results: any) => {
                    setLoading(false);

                    if (results.length > 0)
                        setCharacters(results);

                })
                .catch((error: any) => {
                    setLoading(false);
                    setFeedbackHeading("Error");
                    setFeedback("Oops, something went wrong: Details -" + error.message);
                });
        } catch (error: any) {
            setLoading(false);
            setFeedbackHeading("Error");
            setFeedback("Oops, something went wrong: Details -" + error.message);
        }
    }

    const getSelectedRow = (character: Character) => {
        dispatch(selectedCharacter(character));
        navigate("/details");

    }

    const IndexOfLastCharacter = CurrentPage * CharactersPerPage;
    const IndexOfFirstCharacter = IndexOfLastCharacter - CharactersPerPage;
    const CharactersRequired = Characters.slice(IndexOfFirstCharacter, IndexOfLastCharacter);

    const toggleItems = useCallback((type: string) => {
        let newPosition: number;

        switch (type) {
            case "next":
                newPosition = CurrentPage + 1
                break;

            default:
                newPosition = CurrentPage - 1;
                break;
        }

        setCurrentPage(newPosition);
        dispatch(selectedPagePosition(newPosition));

    }, [CurrentPage])

    const closeModal = useCallback(() => {
        setStatus(false);

    }, [Status])

    return <>
        <NavBar />
        <ResultModal status={Status} message={Feedback} heading={FeedbackHeading} closeModal={closeModal} />
        {Loading ?
            <div className="loader" style={{
                width: "30%",
                textAlign: "center",
                margin: "0 auto",
                padding: "20% 0 0 0"
            }}>
                <div className="spinner-border text-primary" role="status">
                </div>
            </div> :

            <div className="main-container" style={{ width: "80%", margin: "0 auto", padding: "2% 0 0 0" }}>
                <h4 className="container-heading">Characters List</h4>
                <TableView
                    toggleItems={toggleItems}
                    getSelectedRow={getSelectedRow}
                    List={CharactersRequired}
                    TotalLength={Characters.length}
                    CharsPosition={CurrentPage} />
            </div>
        }

        <Footer />

    </>
}

export default App;