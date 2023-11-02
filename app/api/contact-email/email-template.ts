export default function EmailTemplate({ email, name, message }: { email:string, name: string, message: string }) {
  return (
    {
        from: process.env.MY_EMAIL,
        to: email,
        bcc: process.env.MY_EMAIL,
        subject: `Kodo - Thank you for contacting us!`,
        html: 
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us Response</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #D1D5DB;
            color: #0E1729;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            background-color: #f4e5ae;
            padding: 10px;
            border-radius: 5px 5px 0 0;
            width: 100%;
            font-size: 16px;
            font-weight: bold;
        }

        .content {
            padding: 20px;
        }

        .message {
            margin-bottom: 20px;
            font-size: 18px;
        }

        .cta-button {
            background-color: #f4e5ae;
            color: #0E1729;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
        }

        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #888;
        }
    </style>
</head>

<body>
    <table class="container" cellpadding="0" cellspacing="0">
        <tr>
            <td>
                <table class="header" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="logo">
                          <img src="https://www.kodo.sg/logo.png" alt="Kodo Logo" width="50" height="50" />
                        </td>
                        <td>Kodo Support</td>
                    </tr>
                </table>
                <table class="content" cellpadding="0" cellspacing="10">
                    <tr>
                        <td class="message">
                            <p>Dear ${name},</p>
                            <p>Here's the message we got from you:</p>
                            <p style="font-family: Courier New">${message}</p>
                            <p>Our team has received your message and will get back to you as soon as possible.</p>
                            <p>In the meantime, don't hesitate to explore our selection of play dough. We're sure you'll discover something fantastic for your little learners.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <a href="https://www.kodo.sg/products/" class="cta-button">Explore Our Products</a>
                        </td>
                    </tr>
                </table>
                <table class="footer" cellpadding="5" cellspacing="0">
                    <tr>
                        <td>
                            <p>If you have any more questions, feel free to reply to this email or contact us at 
                              <a href="mailto:hello@kodo.sg">hello@kodo.sg</a>.
                            </p>
                            <p>Best regards,<br> Kodo Team</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
`
    }
    );
}    