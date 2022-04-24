import './style.css';
function Input({
    text,
    id,
    placeholder}) {
    return(
        <form>
            <label>{text}
                 <input type="text" id={id} placeholder={placeholder}/>
            </label>
        </form>
    );
}
export default Input;