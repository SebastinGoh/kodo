export default function EmailTemplate({ email, name, message }: { email:string, name: string, message: string }) {
  return (
    {
        from: process.env.MY_EMAIL,
        to: email,
        bcc: process.env.MY_EMAIL,
        subject: `Kodo - Thank you for contacting us!`,
        html: 
        `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Contact Us Reply</title>
          <style>
            /* Define your styles here */
            body {
              font-family: Arial, sans-serif;
              background-color: #D1D5DB;
              margin: 0;
              padding: 0;
            }
        
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: none;
              display: flex;
              flex-direction: column;
              gap: 30px;
            }
        
            .header {
              background-color: none;
              color: #0E1729;
              padding: 20px;
              display: flex;
              gap: 15px;
              align-items: center;
            }
        
            .header p {
              font-size: 24px;
              margin: 0;
            }
        
            .content {
              padding: 10px 50px;
              display: flex;
              flex-direction: column;
              gap: 2px;
              align-items: center;
              justify-content: center;
              background-color: #ffffff;
              font-size: 16px;
              text-align: center;
            }
    
            .content-title {
              font-size: 30px;
            }
        
            .cta-button {
              display: inline-block;
              background-color: #ff5722;
              color: #ffffff;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
            }
    
            .button {
              text-decoration: none;
              background-color: #f4e5ae;
              border-radius: 25px;
              font-weight: bold;
              width: 12em;
              height: 1.5rem;
              padding: 0.5rem;
              :hover {
                background-color: #f999a4;
              }
            }
        
            .footer {
              background-color: none;
              padding: 10px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="logo.png" alt="Kodo Logo" width="50" height="50" />
              <p>Kodo Support</p>
            </div>
            <div class="content">
              <p class="content-title">We got your message</p>
              <p>Dear ${name},</p>
              <p>Thanks for dropping us a line and we're delighted to assist you!</p>
            </div>
            <div class="content">
              <p class="content-title">Here's your message</p>
              <p class="message">${message}</p>
              <p class="message">Our team is working diligently to address your request. You can anticipate a reply from us soon.</p>
              <p class="message">In the meantime, don't hesitate to explore our selection of play dough. We're sure you'll discover something fantastic for your little learners.</p>
              <p class="message">Best regards,</p>
              <p class="message">The Kodo Team</p>
              <a class="button" href="www.kodo.sg/products/">Explore Products</a>
            </div>
            <div class="footer">
              &copy; 2023 Kodo LLP | <a href="mailto:hello@kodo.sg">hello@kodo.sg</a>
            </div>
          </div>
        </body>
        </html>
`
    }
    );
}    