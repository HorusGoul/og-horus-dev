import { createHandler } from "next-og-image";

const handler = createHandler();

const ogImageHandler = (req, res) => {
  const url = new URL(req.url ?? "/", "https://localhost:3000");
  req.query.path = url.pathname.replace("/", "").split("/");

  return handler(req, res);
};

export default ogImageHandler;
