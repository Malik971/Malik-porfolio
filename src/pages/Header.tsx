import photoMalik from "../assets/img_Malik.jpg";

function Header() {
  return (
    <header>
      <div className="">
        <div className="ademir">
          <img src={photoMalik} className="rounded-lg shadow-xl" alt="img" />
          <h1 className="text-xl font-extrabold">
            Bienvenue dans mon portfolio
          </h1>
        </div>
      </div>
    </header>
  );
}

export { Header };
