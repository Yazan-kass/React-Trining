import './style.css'
function Link({
    href,
    text}) {
    return(
        <a href={href}>{text}</a>
    );
}
export default Link;