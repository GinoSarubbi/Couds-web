import "./card.css";

const Detalles = [
  {
    id: 1,
    title: "Descarga Gratuita",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#646cff"
        className="bi bi-cloud-download"
        viewBox="0 0 16 16"
      >
        <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
        <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
      </svg>
    ),
    description:
    "Tus datos están seguros con nosotros.",
  },
  {
    id: 2,
    title: "Sube tu archivo",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#646cff"
        className="bi bi-cloud-plus"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
        />
        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
      </svg>
    ),
    description:
    "Sube tu archivo y descarga tu archivo en segundos."
  },
  {
    id: 3,
    title: "Tus datos Ofline",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#646cff"
        className="bi bi-cloud-slash"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M3.112 5.112a3.125 3.125 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11l-1-1H3.781C2.231 12 1 10.785 1 9.318c0-1.365 1.064-2.513 2.46-2.666l.446-.05v-.447c0-.075.006-.152.018-.231l-.812-.812zm2.55-1.45-.725-.725A5.512 5.512 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711l-.733-.733C14.498 11.378 15 10.626 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3c-.875 0-1.678.26-2.339.661z"
        />
        <path d="m13.646 14.354-12-12 .708-.708 12 12-.707.707z" />
      </svg>
    ),
    description:
    "Tus datos sin internet, en cualquier momento."
  },
  {
    id: 4,
    title: "Descarga tu archivo",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#646cff"
        className="bi bi-cloud-check"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
        />
        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
      </svg>
    ),
    description:
    "Descarga tu archivo en cualquier momento."
  },
];


export default function Card() {
    return (
      <div className="card-container">
        {Detalles.map((detalle) => (
          <div key={detalle.id} className="card">
            <div className="card-header">{detalle.icon}</div>
            <div className="card-body">
              <h5 className="card-title">{detalle.title}</h5>
              <p>{detalle.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }