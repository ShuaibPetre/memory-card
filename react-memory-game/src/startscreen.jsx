/* eslint-disable react/prop-types */
export default function StartScreen(props) {
    return (
        <div className="startscreendiv" onChange={props.onChange}>
            <div className="starttitle">Choose your difficulty:</div>
            <div className="diffbtns">
                <div className="easybtn">
                    <input type="radio" value="Easy" name="difficulty" /> Easy
                </div>
                <div className="mediumbtn">
                    <input
                        type="radio"
                        value="Medium"
                        name="difficulty"
                        defaultChecked
                    />{' '}
                    Medium
                </div>
                <div className="hardbtn">
                    <input type="radio" value="Hard" name="difficulty" /> Hard
                </div>
            </div>
            <button className="startbtn" onClick={props.onClick}>
                Start Game
            </button>
        </div>
    )
}
