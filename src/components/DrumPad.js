import React from 'react';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.play = this.play.bind(this)
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    };

    render() {
        return (
            <div
                className={'drum-pad'}
                id={this.props.id}
                onClick={this.play}>
                <p>{this.props.keyTrigger}</p>
                <audio
                    ref={ref => this.audio = ref} // this smart way of referencing audio element
                                                  // is from Ben Brooke https://www.youtube.com/watch?v=QXX4aI9DOVE
                    src={this.props.url}
                    className={'clip'}
                    id={this.props.id} />
            </div>
        );
    }
}

export default DrumPad;
