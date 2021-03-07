import React, { Component } from "react";
import img from "C:/Users/Home/projects/portfolio/portfoilo-website/src/assets/moses.jpg";

const ConText = React.createContext();

export class Provider extends Component {
    state = {
        projects: [
            {
                id: 1,
                title: "project 1",
                excerpt: "this project is about.....",
                imageUrl: { img },
            },
            {
                id: 2,
                title: "project 2",
                excerpt: "this project is about.....",
                imageUrl: { img },
            },
            {
                id: 3,
                title: "project 3",
                excerpt: "this project is about.....",
                imageUrl: { img },
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
                imageURL: "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png",
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