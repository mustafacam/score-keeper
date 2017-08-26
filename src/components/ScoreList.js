import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {removeScore} from '../actions/scoreAction';

import ScoreListItem from './ScoreListItem';
import scoreSelector from './../selectors/scoreSelector';

class ScoreList extends Component {

    removeScore(scoreIndex) {
        this.props.removeScore(scoreIndex);
    }

    render() {

        if (this.props.scoreList.length === 0)
            return <span className="alert">No players have scored yet</span>;

        return (
            <ul className="score-list">
                {
                    this.props.scoreList.map(((scoreItem, index) =>
                        <ScoreListItem
                            {...scoreItem}
                            key={index}
                            removeScore={this.removeScore.bind(this, index)}
                        />
                    ))
                }
            </ul>
        );
    }
}

ScoreList.propTypes = {
    removeScore: PropTypes.func.isRequired
};

const mapStateToProps = state => scoreSelector(state);

export default connect(mapStateToProps, {removeScore})(ScoreList);