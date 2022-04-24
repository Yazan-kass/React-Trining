import './style.css'
function SearchBox(params) {
    return(
        <div className="Box">
            <form action="">
                <img src="./search.png" alt="searsh" /> 
                <input type="text" placeholder='Search for anything'/>
            </form>
        </div>
    );
}
export default SearchBox;