import { Link } from "react-router-dom";
import "./Home.css";

export default function Completion() {
  return (
    <>
      <header className="mb-4 mb-md-5">
        <h1>OpenAI Web App</h1>
        <p className="fs-3">
          Play around with the OpenAI API using the provided services below:
        </p>
      </header>
      <div className="d-flex flex-column flex-md-row service-container">
        <Link
          to={"/text-completion"}
          className="col col-md-5 p-4 me-md-4 mb-3 mb-md-0 rounded service"
        >
          <div className="d-flex align-items-center">
            <div className="col-10">
              <p className="fs-4 fw-bold mb-1">Text Completion</p>
              <p className="mb-0 pe-2">
                Complete parts of a text given a prompt. The AI will match the
                context of the prompt.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-right col-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </Link>
        <Link
          to={"/image-generation"}
          className="col col-md-5 p-4 mb-3 mb-md-0 rounded service"
        >
          <div className="d-flex align-items-center">
            <div className="col-10">
              <p className="fs-4 fw-bold mb-1">Image Generation</p>
              <p className="mb-0 pe-2">
                Generate an image given a prompt. Be as specific as you want!
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-right col-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
}
