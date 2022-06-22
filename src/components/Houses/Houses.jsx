import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllHouses} from "../../redux/actions";
import main_image_cp2 from "../../img-cp2/main-image-cp2.jpg"
import {HouseCard} from "../HouseCard/HouseCard";

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS 
// Y MAP_DISPATCH_TO_PROPS!! <3
export class Houses extends Component {

    componentDidMount() {
        this.props.getAllHouses();
    }

    render() {
        return (
            <div>
                <h1>Game of Thrones</h1>
                <img src={main_image_cp2} alt={'main-img'}/>
                <h3>Houses</h3>
                {this.props.houses?.map(house =>
                    <HouseCard
                        key={house.id}
                        id={house.id}
                        region={house.region}
                        name={house.name}
                        words={house.words}
                    />
                )}
            </div>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        houses: state.houses
    }
};

export const mapDispatchToProps = {getAllHouses};

export default connect(mapStateToProps, mapDispatchToProps)(Houses);

