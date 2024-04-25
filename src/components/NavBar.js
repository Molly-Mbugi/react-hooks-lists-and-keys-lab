import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>    {links.map(link =>(
    <projectitem link ={link.usename}name={student.name}id={student.id}tm={student.tm}></projectitem>
  ))}
</nav>;
}

export default NavBar;
