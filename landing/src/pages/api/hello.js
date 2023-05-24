function buildFormData(formData, data, parentKey) {
  if (data && typeof data === "object") {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
}

function jsonToFormData(data) {
  const formData = new FormData();

  buildFormData(formData, data);

  return formData;
}

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const data = JSON.parse(req.body);

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("data: ", jsonToFormData(data));

  await fetch("https://app.brainlead.it/3.0.0/web_forms/subscription", {
    method: "POST",
    body: jsonToFormData(data),
  })
    .then((res) => {
      if (res.status != 200) {
        throw new Error("Bad Server Response");
      }
      return res.text();
    })

    // (D) SERVER RESPONSE
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}
