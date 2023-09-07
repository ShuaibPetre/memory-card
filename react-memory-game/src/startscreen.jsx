/* eslint-disable react/prop-types */
export default function StartScreen(props) {

    return (
        <div className="startscreendiv" onChange={props.onChange}>
            <div className="starttitle">Choose your difficulty:</div>
            <div className="diffbtns">
                <input type="radio" value="Easy" name="difficulty" /> Easy
                <input type="radio" value="Medium" name="difficulty" defaultChecked /> Medium
                <input type="radio" value="Hard" name="difficulty" /> Hard
            </div>
            <button className="Startbtn" onClick={props.onClick}>Start Game</button>
        </div>
    )
}
