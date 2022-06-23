import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getHouse} from "../../redux/actions";
import CharacterCard from "../CharacterCard/CharacterCard";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
       dispatch(getHouse(props.match.params.houseId))
    }, []);

    const house = useSelector(state => state.house);

    return (
        <div>
            <h3>{house && house.name}</h3>
            <p>{house && house.words}</p>
            {house && house.characters?.map(character =>
                <CharacterCard
                    key={character.id}
                    id={character.id}
                    fullName={character.fullName}
                    title={character.title}
                    family={character.family}
                    imageUrl={character.imageUrl}
                />
            )}
        </div>
    );
};

export default HouseDetail;
