import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {changePlayerName} from '../actions/playerAction';
import {addScore}  from '../actions/scoreAction';

import PlayerListItem from './PlayerListItem';
import playerSelector from './../selectors/playerSelector';

class PlayerList extends Component {

    constructor() {
        super();
        this.state = {
            editingItem: -1,
            editingPlayerName: ''
        }
    }

    incrementPoint(playerIndex, point) {
        this.props.addScore(playerIndex, point);
    }


    isEditing(player) {
        return this.state.editingItem === player.index;
    }

    editPlayerName(player) {
        this.setState({
            editingItem: player.index,
            editingPlayerName: player.name
        });
    }

    cancelEdit() {
        this.setState({
            editingItem: -1,
            editingPlayerName: ''
        });
    }

    changePlayerName(event) {
        this.setState({
            editingPlayerName: event.target.value
        });
    }

    savePlayerName() {
        if (this.state.editingPlayerName === '') {
            this.cancelEdit();
            return;
        }
        this.props.changePlayerName(
            this.state.editingItem,
            this.state.editingPlayerName);
        this.cancelEdit();
    }

    getEditingProcesses() {
        return {
            editingName: this.state.editingPlayerName,
            isEditing: this.isEditing.bind(this),
            editName: this.editPlayerName.bind(this),
            changeName: this.changePlayerName.bind(this),
            saveName: this.savePlayerName.bind(this),
            cancel: this.cancelEdit.bind(this)
        }
    }

    render() {

        if (this.props.playerList.length === 0)
            return <span className="alert">Start the game by adding players</span>;

        return (
            <div>
                <ul>
                    {
                        this.props.playerList.map(((player, index) =>
                            <PlayerListItem
                                {...player}
                                key={index}
                                increment={this.incrementPoint.bind(this)}
                                edit={this.getEditingProcesses.bind(this)()}
                            />
                        ))
                    }
                </ul>
                <div className="total-pt-container">Total: {this.props.totalPoint}</div>
            </div>
        );
    }
}


PlayerList.propTypes = {
    addScore: PropTypes.func.isRequired,
    changePlayerName: PropTypes.func.isRequired
};

const mapStateToProps = state => playerSelector(state);

export default connect(mapStateToProps, {changePlayerName, addScore})(PlayerList);