const nodemailer = require("nodemailer");
const fs = require("fs");
const chokidar = require("chokidar");

// Define the sendEmail function with an additional 'recipientName' parameter
async function sendEmail(recipientName, recipientEmail) {
  try {
    // Create a transporter with your Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "mphochuene42@gmail.com", // Replace with your Gmail email
        pass: "password placeholder", // Replace with your Gmail password or app-specific password
      },
    });

    const mailOptions = {
      from: "mphochuene42@gmail.com", // Corrected email address
      to: recipientEmail,
      subject: "Login confirmation",
      text: `Hello ${recipientName},\n\nThis is a confirm your successful registration to our employee app!`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${recipientEmail}:`, info.response);
  } catch (error) {
    console.error("Error sending email to", recipientEmail, ":", error);
  }
}

// Read the initial JSON data from db.json
const initialData = JSON.parse(fs.readFileSync("db.json")); // Replace with the path to your JSON file
const initialEmails = new Set(
  initialData.employees.map((employee) => employee.Email)
);

// Function to watch changes in db.json and send an email for new emails
function watchDbChanges() {
  const watcher = chokidar.watch("db.json"); // Adjust the path to your db.json file

  watcher.on("change", (path) => {
    console.log(`File ${path} has been changed.`);
    // Read the updated JSON data from db.json
    const data = JSON.parse(fs.readFileSync(path));
    const employees = data.employees;

    // Iterate through employees and check for newly added email addresses
    for (const employee of employees) {
      if (!initialEmails.has(employee.Email)) {
        sendEmail(employee.name, employee.Email);
        console.log(`Email sent to ${employee.name} (${employee.Email})`);
        initialEmails.add(employee.Email);
      }
    }

    // Save the updated data back to db.json
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  });
}

// Start watching for changes in db.json
watchDbChanges();

module.exports = { sendEmail };
