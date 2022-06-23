import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createHouse} from "../../redux/actions";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {

    const [house, setHouse] = React.useState({
        name: '',
        region: '',
        words: ''
    });

    const handleInputChange = e => {
        setHouse({
            ...house,
            [e.target.name]: e.target.value
        });
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createHouse(house));
        history.push('/');
    }

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={e=> handleSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <input type="text"
                           name="name"
                           value={house.name}
                           onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Region: </label>
                    <input type="text"
                           name="region"
                           value={house.region}
                           onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Words: </label>
                    <input type="text"
                           name="words"
                           value={house.words}
                           onChange={handleInputChange}
                    />
                </div>

                <br/>
                <button type="submit" disabled={
                    (!house.name) ||
                    (!house.region) ||
                    (!house.words) }
                >Create</button>
            </form>
        </div>
    );
};

export default CreateHouse;
