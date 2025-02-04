import { Link } from "react-router-dom";
import "../custom.scss";

const HomePage = () => {
  return (
    <div className="container-fluid bg-light text-dark">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <h1 className="navbar-brand text-primary fw-bold">LamaPrints</h1>
        <div className="ms-auto">
          <Link to="/shop" className="btn btn-outline-primary me-2">
            Shop
          </Link>
          <Link to="/cart" className="btn btn-primary">
            Cart
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-5 bg-primary text-white">
        <h2 className="display-4 fw-bold">Custom 3D Prints, Made for You</h2>
        <p className="lead">High-quality, unique designs for every need.</p>
        <Link to="/shop" className="btn btn-light btn-lg mt-3">
          Browse Collection
        </Link>
      </header>

      {/* Featured Products */}
      <section className="container py-5">
        <h3 className="text-center mb-4">Featured Prints</h3>
        <div className="row">
          {[1, 2, 3].map((id) => (
            <div key={id} className="col-md-4 mb-4">
              <div className="card shadow-sm text-center">
                <div
                  className="card-img-top bg-secondary"
                  style={{ height: "200px" }}
                ></div>
                <div className="card-body">
                  <h5 className="card-title">Product {id}</h5>
                  <p className="text-muted">$19.99</p>
                  <Link to="/shop" className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2024 LamaPrints. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
