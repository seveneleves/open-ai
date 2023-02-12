import * as React from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function Image() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [errMessage, setErrMessage] = React.useState("");

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    axios
      .post("http://localhost:3001/generateImage", { prompt: prompt })
      .then((res) => setImageUrl(res.data.imageUrl))
      .catch((err) => setErrMessage(err.response.data.error.message))
      .finally(() => {
        setPrompt("");
        setIsLoading(false);
      });
    setImageUrl("");
    setErrMessage("");
  };

  return (
    <>
      <header className="mb-4 mb-md-5">
        <h1>OpenAI Web App</h1>
        <p className="fs-3">
          Enter a prompt in the input below and click on "Generate".
        </p>
      </header>
      <main>
        <div className="row">
          <div className="input-group mb-3">
            <input
              type="text"
              name="prompt"
              className="form-control"
              placeholder="White siamese cat"
              aria-label="White siamese cat"
              value={prompt}
              disabled={isLoading}
              onChange={handleChange}
            />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isLoading || prompt === ""}
              onClick={!isLoading ? handleSubmit : null}
            >
              {isLoading ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Generate"
              )}
            </button>
          </div>
        </div>
        {errMessage !== "" ? (
          <span className="text-danger">
            Error: {errMessage[0].toLocaleLowerCase() + errMessage.slice(1)}
          </span>
        ) : imageUrl !== "" ? (
          <img alt="Generation result" src={imageUrl} />
        ) : null}
      </main>
    </>
  );
}

export default Image;
