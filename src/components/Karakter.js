import "./Karakter.css"

import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

import styled from 'styled-components'

function Karakter(props) {
    const {character} = props;

    const [isOpen, setIsOpen] = useState("0");
    function toggle()
    {
        setIsOpen((isOpen === "1") ? "0" : "1");
    }

    const Ul = styled.ul`
        padding-left: 0;
        li {
            text-align: left;
        }
    `
    
    let charEntries = Object.entries(character);
    
    charEntries = charEntries.filter((entry) => {
        return entry[0] === "name" || entry[0] === "height" || entry[0] === "mass" ||
        entry[0] === "hair_color" || entry[0] === "skin_color" || entry[0] === "eye_color" ||
        entry[0] === "birth_year" || entry[0] === "gender";
    })

    charEntries = charEntries.map((entry) => {
        

        let newX = entry[0].replace("_", " ");

        newX = newX.split(" ").map((word) => {
            return word[0].toUpperCase() + word.slice(1);
        })

        return [newX.join(" "), entry[1]];
    });

    return (
    <div>
      <Accordion open={isOpen} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader className="hoverGray" targetId="1">{character.name}</AccordionHeader>
          <AccordionBody accordionId="1">
            <Ul>
                 { charEntries.map((entry) => ( (entry[0] !== "Name") &&
                <li key={entry[0] + entry[1]}>{entry[0]}: {entry[1]}</li>))}
            </Ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
    );
}

export default Karakter;