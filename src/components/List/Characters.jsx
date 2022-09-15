import Button from "../Button/Button";
import Input from "../input/Input";
import CardCharacter from "./CardCharacter";


const Characters = ({ characters }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="d-flex justify-content-around">
                        <h1 className="fw-bold text-uppercase">Rick and Morty</h1>
                        <Input />
                    </div>
                    <div>
                        {characters?.results?.map(character => (
                            <CardCharacter character={character} key={character.id} />
                        ))}
                    </div>
                    <Button text="<<" />
                    <Button text="Prev" />
                    <Button text="Next" />
                    <Button text=">>" />

                </div>
            </div>
        </div>
    );
}

export default Characters;