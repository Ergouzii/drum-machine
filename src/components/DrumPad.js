import React from 'react';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.play = this.play.bind(this)
    }

    // this is active when DrumPad is just mounted
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.keyCode === this.props.keyCode) {
            this.play()
        }
    };

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
        this.props.handleDisplay(this.props.id)
    };

    render() {
        return (
            <div>
                <div
                    className={'drum-pad'}
                    id={this.props.id}
                    onClick={this.play}>
                    <audio
                        ref={ref => this.audio = ref} // this smart way of referencing audio element
                                                      // is from Ben Brooke https://www.youtube.com/watch?v=QXX4aI9DOVE
                        src={this.props.url}
                        className={'clip'}
                        id={this.props.id} />
                    {this.props.keyTrigger}
                </div>
            </div>
        );
    }
}

export default DrumPad;
