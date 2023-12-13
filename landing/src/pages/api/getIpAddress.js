import requestIp from "request-ip";

export default function handler(req, res) {
  const detectedIp = requestIp.getClientIp(req);
  // console.log(req.headers["user-agent"]);
  const uaString = req.headers["user-agent"];

  res.status(200).json(detectedIp);
}
