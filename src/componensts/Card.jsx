import Button from "./Button/Button.jsx";
export function Card() {
  return (
    <>
      <div className="card-container col">
        <div className="card">
          <div className="card-img-container">
            <img
              src="src/assets/img/img-prova.jpg"
              className="card-img-top img-fluid"
              alt=""
            />
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold">TITOLO DEL POST</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              veniam at placeat autem qui, quas ab repellendus vel modi tempore
              reprehenderit, temporibus tempora? Nostrum, esse aut eius atque
              tenetur sapiente.
            </p>
            <Button />
          </div>
        </div>
      </div>
      ;
    </>
  );
}
