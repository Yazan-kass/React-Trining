import './style.css'
function Icon(
    {icon,
    alt,
    })
{
    return(
        <img src={icon} alt={alt} />
    );
}
export default Icon;