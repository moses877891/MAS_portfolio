import React from 'react'
import Skill from './Skill';
import { v4 as uuid } from "uuid";
import { Consumer } from "../components/ConText"

function SkillsSection() {
    return (
        <Consumer>
            {(value) => {
                const { skills } = value;
                const finalSkillRow = [];

                for (let i = 0; i < skills.length / 4; i++) {
                    let skillRow = skills.slice(i * 4, (i + 1) * 4);
                    finalSkillRow.push(
                        <div key={uuid()} className="d-flex justify-content-around flex-wrap py-3">{
                            skillRow.map((j) => (
                                <Skill key={uuid()} skill={j} />))
                        }
                        </div>
                    )
                }
                return (
                    <div className="bg-light w-100">
                        <div className="container text-center py-3">
                            <h1 className="font-weight-light">
                                <span className="text-danger">Technology</span> stack
                            </h1>
                            <div className="lead pb-5">
                                My Arsenal
                            </div>
                            {finalSkillRow}
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
}
export default SkillsSection;