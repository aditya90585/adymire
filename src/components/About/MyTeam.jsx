import "./MyTeam.css"



const MyTeam = () => {

    const cards = [
        {
            name: "Yashveer Giri",
            position: "Founder",
            // image: "",
        },
        {
            name: "Rohan Goswami",
            position: "Co-Founder",
            // image: "",
        },
        {
            name: "Abhishek Giri",
            position: "Co-Founder",
            // image: "",
        },
    ];
    return (

        <section className="myteam">
            <h2 className="my-team-title">
                MY Team
                <span></span>
            </h2>

            <div className="my-team-grid">
                {cards.map((item, i) => (
                    <div className="my-team-card" key={i}>
                        <div className="my-team-icon-box">
                            {/* <img src="" alt={item.title} /> */}
                        </div>
                        <div className="my-team-content">
                            <h3>{item.name}</h3>
                            <p>{item.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default MyTeam
