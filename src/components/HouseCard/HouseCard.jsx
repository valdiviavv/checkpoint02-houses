import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {deleteHouse} from "../../redux/actions";

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX , JUNTO A MAP_DISPATCH_TO_PROPS! <3
export class HouseCard extends Component {

    handleClick(e, id) {
        e.preventDefault();
        this.props.deleteHouse(id);
    }

    render() {
        const {id, region, name, words} = this.props;

        return (
            <div>
                <h3>{name}</h3>
                <p>Region: {region}</p>
                <p>Words: {words}</p>
                <Link to={`/houses/${id}`}>
                    {name}
                </Link>{" "}
                <button onClick={e => this.handleClick(e, id)}>x</button>
            </div>
        );
    };
}

export const mapDispatchToProps = {deleteHouse};

export default connect(null, mapDispatchToProps)(HouseCard);
