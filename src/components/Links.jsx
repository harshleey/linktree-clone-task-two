import { useState } from "react";
import linksData  from "../../linksData";
import Button from "./Button";
import { Link } from 'react-router-dom'

export default function Links() {
    const [links, setLinks] = useState(linksData)

  return (
    <section className="links-section">
        {links.map(link => <Button key={link.id} link={link} />)}
        <Link to="/contact" id="contact" className="button">Contact Me</Link>
    </section>
  )
}
