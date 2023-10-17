const nodemailer = require("nodemailer");
const fs = require("fs");

// Define the sendEmail function
async function sendEmail(recipientEmail) {
  try {
    // Create a transporter with your Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "mphochuene42@gmail.com", // Replace with your Gmail email
        pass: "nsfgxijrwbaegfnb", // Replace with your Gmail password or app-specific password
      },
    });

    const mailOptions = {
      from: "mphochuene42@gmail.com", // Corrected email address
      to: recipientEmail,
      subject: "Login confirmation",
      text: "This is a test email sent from Nodemailer to confirm your login!",
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${recipientEmail}:`, info.response);
  } catch (error) {
    console.error("Error sending email to", recipientEmail, ":", error);
  }
}

// Read the JSON file containing employee data
const data = JSON.parse(fs.readFileSync("./db.json")); // Replace "data.json" with the path to your JSON file
const employees = data.employees;

// Extract email addresses from the employees
const emailAddresses = employees.map((employee) => employee.Email);

// Use async/await to send emails in a loop
async function sendEmails() {
  try {
    for (const recipient of emailAddresses) {
      // Pass the email address to the sendEmail function
      await sendEmail(recipient);
      console.log(`Email sent to ${recipient}`);
    }
  } catch (error) {
    console.error("Error sending emails:", error);
  }
}

// Call the sendEmails function to start sending emails
sendEmails();

module.exports = { sendEmail };
