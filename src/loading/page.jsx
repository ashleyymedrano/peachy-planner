import peach1 from '/src/assets/peach1.png'
import peach2 from "../assets/peach2.png";


function Loading() {
    return (
        <>
            <div className="peach-container">
                <div>
                    <img src={peach1} alt="Peach" height="140" width="180"/>
                </div>
                <div>
                    <img src={peach2} alt="Peach" height="140" width="180"/>
                </div>
                <div>
                    <img src={peach1} alt="Peach" height="140" width="180"/>
                </div>
                <div className="hide-peach">
                    <img src={peach1} alt="Peach" height="140" width="180"/>
                </div>
            </div>
        </>
    )
}

export default Loading;