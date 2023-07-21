import nodemailer from "nodemailer";

export default function handler(req, res) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.MAILER_USER,
      to: process.env.MAILER_TO,
      subject: `Contatto da Landing Offerta.ScuoladiMassaggioTao.it || DA REGISTRARE su BL!!! ${req.body.nome} ${req.body.cognome}`,
      text: `nome: ${req.body.nome}\ncognome: ${req.body.cognome}\nemail:${req.body.email}\ntelefono:${req.body.telefono}\n`,
      html: `<div>nome: ${req.body.nome}<br />cognome: ${req.body.cognome}<br />email:${req.body.email}<br/>telefono:${req.body.telefono}</div><p>Sent from:
    ${req.body.email}</p>`,
    };

    transporter.sendMail(mailData, (err, data) => {
      if (err) {
        console.log(err);
        return res.send("error" + JSON.stringify(err));
      } else {
        console.log("mail send");
        return res.status(200).end();
      }
    });
  }
  res.status(200).end();
}
