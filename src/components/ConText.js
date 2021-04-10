import React, { Component } from "react";

const ConText = React.createContext();

export class Provider extends Component {
    state = {
        projects: [
            {
                id: 1,
                title: "E-Commerce",
                excerpt: "E-Commerce website with sign-in, sign-out and payment options",
                tools: "ReactJS, Sass, Redux, React-Router, Firebase, Stripe, Heroku",
                imageUrl: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png",
                link: "https://crwn-shop-10.herokuapp.com/",
            },
            {
                id: 2,
                title: "F.R.I.E.N.D.S",
                excerpt: "An ordinary website of friends cast",
                tools: "ReactJS, CSS",
                link: "https://moses877891.github.io/F.R.I.E.N.D.S/",
                imageUrl: "https://thumbs.dreamstime.com/b/friends-logo-friends-logo-white-background-vector-format-aviable-ai-132621611.jpg",
            },
            {
                id: 3,
                title: "My Portfolio",
                excerpt: "My Official website",
                tools: "ReactJS, CSS, React-Router, MySQL",
                link: "https://moses877891.github.io/MAS_portfolio/",
                imageUrl: "https://seekvectorlogo.com/wp-content/uploads/2019/05/portfolio-plus-banking-software-vector-logo.png",
            },
        ],
        skills: [
            {
                id: 1,
                name: "HTML5",
                imageURL: "http://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 2,
                name: "CSS3",
                imageURL: "https://img2.pngio.com/css-3-logo-png-picture-364523-css-3-logo-png-css-logo-png-1600_1600.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 3,
                name: "JavaScript",
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 4,
                name: "Bootstrap4",
                imageURL: "https://miro.medium.com/max/1024/0*HHrmGxvASDOUhNc-.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 5,
                name: "React",
                imageURL: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 6,
                name: "Mysql",
                imageURL: "https://www.pinclipart.com/picdir/big/9-92644_database-clipart-raw-data-azure-sql-server-png.png",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 7,
                name: "Python",
                imageURL: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png",
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id: 8,
                name: "Flask",
                imageURL: "https://www.clipartkey.com/mpngs/m/145-1450071_flask-python-logo-transparent.png",
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id: 9,
                name: "Git",
                imageURL: "https://cdn.iconscout.com/icon/free/png-256/git-1-226092.png",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 10,
                name: "Firebase",
                imageURL: "https://www.gstatic.com/devrel-devsite/prod/v29e01f19390dbba02efae7ad88cec6396f66d6ad0ae093a58267d05c04c6557e/firebase/images/touchicon-180.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 10,
                name: "Redux",
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
                starsTotal: 3,
                starsActive: 3,
            },
        ],
    };

    render() {
        return (
            <ConText.Provider value={this.state}>
                {this.props.children}
            </ConText.Provider>
        );
    }
}

export const Consumer = ConText.Consumer;