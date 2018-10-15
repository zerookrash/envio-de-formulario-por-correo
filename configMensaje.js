const nodemailer = require('nodemailer');
module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mario.villelalarraza@gmail.com', 
      pass: 'michaeljordan' 
    }
  });
  const mailOptions = { from: `”${formulario.nombre}” <${formulario.email}>`, to: "mario.villelalarraza@gmail.com", subject: "Nuevo Comentario en la Página", html: `
      <h1>${formulario.nombre}</h1> <br/>
      <h2>${formulario.email}</h2> <br/>
      <h2><strong>${formulario.asunto}</strong></h2>
      <p> ${formulario.mensaje} </p>
      ` };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}