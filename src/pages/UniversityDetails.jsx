const UniversityDetails = (props) => {
    return (
        <div className="universityDetails_container">
            <div className="universityDetails_container_box">
                <h3>College Name - {props.selectedOption.name}</h3>
                <h3>College Website - <a href={props.selectedOption.web_pages[0]} target="_blank">{props.selectedOption.web_pages[0]}</a></h3>
                <h3>College Country - {props.selectedOption.country}</h3>
            </div>
        </div>
    )
}

export default UniversityDetails;