import axios from "axios";

export const GET = async () => {
  await axios.get("http://127.0.0.1:3000/api");
  return Response.json({ message: "ok" });
};
