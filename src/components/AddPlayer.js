import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addNewPlayer} from '../actions/playerAction';

class AddPlayer extends Component {

    constructor(){
        super();
        this.state = {
            ready: false,
            playerName: ''
        };
    }

    addNewPlayer(){
        if (this.state.playerName === '') return;

        this.props.addNewPlayer(this.state.playerName);
        this.setState({
            playerName: '',
            ready: false
        });
    }

    changePlayerName(event){
        if (event.target.value === '') {
            this.cancel();
            return;
        }

        this.setState({
            playerName: event.target.value,
            ready: true
        });
    }

    cancel(){
        this.setState({
            playerName: '',
            ready: false
        });
    }

    render(){
        return (<div className="add-player-container">
            <input
                type="text"
                placeholder="Add Player"
                value={this.state.playerName}
                onChange={this.changePlayerName.bind(this)}
            />
            <button
                className="btn"
                onClick={this.addNewPlayer.bind(this)}
                disabled={!this.state.ready}>Save
            </button>
            <button
                className="btn"
                onClick={this.cancel.bind(this)}
                disabled={!this.state.ready}>Cancel
            </button>
        </div>);
    }
}

AddPlayer.propTypes = {
    addNewPlayer: PropTypes.func.isRequired
};

export default connect(null, {addNewPlayer})(AddPlayer);
