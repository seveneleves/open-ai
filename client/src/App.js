import * as React from "react";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import "./App.css";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    axios
      .post("http://localhost:3001/generateImage", { prompt: prompt })
      .then((res) => {
        setImageUrl(res.data.imageUrl);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <Container>
        <header>
          <h1>OpenAI Image Generator</h1>
          <p>Enter a prompt in the input below and click on "Generate".</p>
        </header>
        <main>
          <div className="mt-1 d-flex justify-content-start align-items-center">
            <Form>
              <Form.Group className="me-2">
                <Form.Control
                  type="text"
                  name="prompt"
                  value={prompt}
                  placeholder="white siamese cat"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
            <Button
              variant="primary"
              type="submit"
              disabled={isLoading}
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
            </Button>
          </div>
          <div className="mt-3">
            <img src={imageUrl} />
          </div>
        </main>
      </Container>
    </>
  );
}

export default App;
