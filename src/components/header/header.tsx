function header() {
  return (
    <header>
      <div className="title">
        <h1>
          Clouds{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#fff"
            className="bi bi-clouds-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z" />
            <path d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z" />
          </svg>
        </h1>
      </div>
      <nav>
        <ul>
          <li>Property</li>
          <li>Service</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default header;