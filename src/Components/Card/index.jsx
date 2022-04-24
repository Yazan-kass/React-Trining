import './style.css'
function Card(params) {
    return(
        <div className="Contener">
            <div className="LeftSide">
                <img className='MinimizedPicture' src="./imge.jpg" alt="emage" />
                <img className='Play' src="./play-button.png" alt="play" />
            </div>
            <div className="RightSide">
                <div className="Head">JavaScript: The Advanced Concepts (2022 Update)</div>
                <a href="https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13760034#overview">7. Exercise: Javascript Engine</a>
                <span>Lecture .<span className="Insed">7m left</span></span>
            </div>
            <div className="Bar">
                <div className='BarComplet'></div>
            </div>
        </div>
    );
}
export default Card;