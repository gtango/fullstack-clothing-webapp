export default function LoginSuccessPage() {
  
  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center"
      style={{ height: "90vh", background: "#F5EEE4" }}
    >
      <h1>Login Successful!</h1>
      <div className="d-flex flex-wrap flex-column flex-md-row justify-content-between text-center text-uppercase">
        <p className="col-12 text-capitalize">
          welcome, {JSON.parse(localStorage.getItem('user'))?.username}! what to do next is up to you.
        </p>
        <a href="\" className="btn btn-outline-dark my-2" type="button">
          home
        </a>
        <a href="\profile" className="btn btn-outline-dark my-2" type="button">
          profile
        </a>
        <a href="\mens" className="btn btn-outline-dark my-2" type="button">
          mens
        </a>
        <a href="\shoes" className="btn btn-outline-dark my-2" type="button">
          shoes
        </a>
        <a href="\womens" className="btn btn-outline-dark my-2" type="button">
          womens
        </a>
      </div>
    </div>
  );
}
