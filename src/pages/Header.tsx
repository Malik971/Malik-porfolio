import photoMalik from "../assets/photo_malik.jpg";

function Header() {
  return (
    <header>
      <div className="">
        <div className="ademir">
          <img src={photoMalik} alt="img" />
        </div>
        <h5>Hello I'm</h5>
        <h1>Malik Ibo</h1>
        <h5 className="text-light">Concepteur developpeur d'Application</h5>

        <a href="#contact" className="scroll__down">
          <span className="scroll__down-text">défiler vers le bas</span>
        </a>
      </div>
    </header>
  );
}

export { Header };
