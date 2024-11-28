import Button from "./Button/Button.jsx";
export default function Main() {
  return (
    <>
      <main>
        <section className="card-main">
          <div className="container">
            <div className="card-container col-12">
              <div className="card">
                <div className="card-img-container">
                  <img src="..." className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-semibold">TITOLO DEL POST</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, veniam at placeat autem qui, quas ab repellendus vel
                    modi tempore reprehenderit, temporibus tempora? Nostrum,
                    esse aut eius atque tenetur sapiente.
                  </p>
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
