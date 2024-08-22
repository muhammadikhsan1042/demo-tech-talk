import { createRoot } from "react-dom/client";
import Home from "view/Home";

const bootstrap = async () => {
  const container = document.createElement("div");
  container.setAttribute("class", "zee-main-container");

  document.body.appendChild(container);

  const root = createRoot(container);

  root.render(<Home />);
};

bootstrap();
