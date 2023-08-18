const handler = async (req, res) => {
  let ipAddress = req.headers["x-real-ip"];

  const forwardedFor = req.headers["x-forwarded-for"];
  if (!ipAddress && forwardedFor) {
    ipAddress = forwardedFor?.split(",").at(0) ?? "Unknown";
  }

  res.status(200).json(ipAddress);
};

export default handler;
