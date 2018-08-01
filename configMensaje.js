const nodemailer = require('nodemailer');
module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mario.villelalarraza@gmail.com', 
      pass: 'michaeljordan' 
    }
  });
  const mailOptions = {
    from: `”${formulario.nombre} 👻” <${formulario.email}>`,
    to: 'mario.villelalarraza@gmail.com',
    subject: 'Nuevo Comentario en la Página' ,
    html: `
      <strong>Nombre:</strong> ${formulario.nombre} <br/>
      <strong>E-mail:</strong> ${formulario.email} <br/>
      <strong>Mensaje:</strong> ${formulario.mensaje}
      `
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}