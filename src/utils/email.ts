// // src/utils/email.ts
// import nodemailer from 'nodemailer'

// export const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: false,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// })

// interface ContactFormData {
//   name: string
//   email_address: string
//   phone: string
//   message: string
//   createdAt?: string
// }

// export async function sendContactNotification(data: ContactFormData) {
//   const emailHtml = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             line-height: 1.6;
//             color: #333;
//           }
//           .container {
//             max-width: 600px;
//             margin: 0 auto;
//             padding: 20px;
//             background-color: #f9f9f9;
//           }
//           .header {
//             background-color: #ff6b35;
//             color: white;
//             padding: 20px;
//             text-align: center;
//             border-radius: 5px 5px 0 0;
//           }
//           .content {
//             background-color: white;
//             padding: 30px;
//             border-radius: 0 0 5px 5px;
//           }
//           .field {
//             margin-bottom: 20px;
//           }
//           .label {
//             font-weight: bold;
//             color: #ff6b35;
//             margin-bottom: 5px;
//           }
//           .value {
//             color: #333;
//             padding: 10px;
//             background-color: #f5f5f5;
//             border-radius: 3px;
//           }
//           .message-box {
//             background-color: #f5f5f5;
//             padding: 15px;
//             border-left: 4px solid #ff6b35;
//             margin-top: 10px;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="header">
//             <h2>🔔 New Contact Form Submission</h2>
//           </div>
//           <div class="content">
//             <div class="field">
//               <div class="label">Name:</div>
//               <div class="value">${data.name}</div>
//             </div>
            
//             <div class="field">
//               <div class="label">Email:</div>
//               <div class="value">
//                 <a href="mailto:${data.email_address}">${data.email_address}</a>
//               </div>
//             </div>
            
//             <div class="field">
//               <div class="label">Phone:</div>
//               <div class="value">
//                 <a href="tel:${data.phone}">${data.phone}</a>
//               </div>
//             </div>
            
            
            
//             <div class="field">
//               <div class="label">Message:</div>
//               <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
//             </div>
            
//             <div class="field">
//               <div class="label">Submitted At:</div>
//               <div class="value">${new Date(data.createdAt || Date.now()).toLocaleString()}</div>
//             </div>
//           </div>
//         </div>
//       </body>
//     </html>
//   `

//   const emailText = `
// New Contact Form Submission

// Name: ${data.first_name} ${data.last_name}
// Email: ${data.email_address}
// Phone: ${data.phone}
// ${data.city ? `City: ${data.city}` : ''}

// Message:
// ${data.message}

// Submitted at: ${new Date(data.createdAt || Date.now()).toLocaleString()}
//   `

//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_FROM || 'noreply@yoursite.com',
//       to: process.env.EMAIL_TO,
//       subject: `New Contact Form Submission from ${data.first_name} ${data.last_name}`,
//       text: emailText,
//       html: emailHtml,
//     })
//     console.log('✅ Contact notification email sent successfully')
//     return { success: true }
//   } catch (error) {
//     console.error('❌ Error sending contact notification email:', error)
//     return { success: false, error }
//   }
// }

// // Optional: Auto-reply to customer
// export async function sendAutoReply(data: ContactFormData) {
//   const emailHtml = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             line-height: 1.6;
//             color: #333;
//           }
//           .container {
//             max-width: 600px;
//             margin: 0 auto;
//             padding: 20px;
//             background-color: #f9f9f9;
//           }
//           .header {
//             background-color: #ff6b35;
//             color: white;
//             padding: 20px;
//             text-align: center;
//             border-radius: 5px 5px 0 0;
//           }
//           .content {
//             background-color: white;
//             padding: 30px;
//             border-radius: 0 0 5px 5px;
//           }
//           .field {
//             margin-bottom: 20px;
//           }
//           .label {
//             font-weight: bold;
//             color: #ff6b35;
//             margin-bottom: 5px;
//           }
//           .value {
//             color: #333;
//             padding: 10px;
//             background-color: #f5f5f5;
//             border-radius: 3px;
//           }
//           .message-box {
//             background-color: #f5f5f5;
//             padding: 15px;
//             border-left: 4px solid #ff6b35;
//             margin-top: 10px;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="header">
//             <h2>🔔 New Contact Form Submission for rebarX</h2>
//           </div>
//           <div class="content">
//             <div class="field">
//               <div class="label">Name:</div>
//               <div class="value">${data.name}</div>
//             </div>
            
//             <div class="field">
//               <div class="label">Email:</div>
//               <div class="value">
//                 <a href="mailto:${data.email_address}">${data.email_address}</a>
//               </div>
//             </div>
            
//             <div class="field">
//               <div class="label">Phone:</div>
//               <div class="value">
//                 <a href="tel:${data.phone}">${data.phone}</a>
//               </div>
//             </div>
            
            
            
//             <div class="field">
//               <div class="label">Message:</div>
//               <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
//             </div>
            
//             <div class="field">
//               <div class="label">Submitted At:</div>
//               <div class="value">${new Date(data.createdAt || Date.now()).toLocaleString()}</div>
//             </div>
//           </div>
//         </div>
//       </body>
//     </html>
//   `

//   const emailText = `
// New Contact Form Submission for rebarX

// Name: ${data.name}
// Email: ${data.email_address}
// Phone: ${data.phone}


// Message:
// ${data.message}

// Submitted at: ${new Date(data.createdAt || Date.now()).toLocaleString()}
//   `

//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_FROM || 'noreply@yoursite.com',
//       to: process.env.EMAIL_FOR,
//       subject: `New Contact Form Submission from ${data.name}`,
//       text: emailText,
//       html: emailHtml,
//     })
//     console.log('✅ Auto-reply email sent successfully')
//     return { success: true }
//   } catch (error) {
//     console.error('❌ Error sending auto-reply email:', error)
//     return { success: false, error }
//   }
// }




// src/utils/email.ts

// ... keep your existing transporter and functions ...

import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// ✅ ADD THESE NEW FUNCTIONS FOR DYNAMIC FORMS
interface DynamicFormData {
  [key: string]: any
  createdAt?: string
}

export async function sendDynamicContactNotification(formData: DynamicFormData) {
  // Generate dynamic fields HTML
  const fieldsHtml = Object.entries(formData)
    .filter(([key]) => key !== 'createdAt')
    .map(
      ([key, value]) => `
    <div class="field">
      <div class="label">${key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}:</div>
      <div class="value">${typeof value === 'string' ? value.replace(/\n/g, '<br>') : value}</div>
    </div>
  `,
    )
    .join('')

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .header {
            background-color: #ff6b35;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 5px 5px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #ff6b35;
            margin-bottom: 5px;
            text-transform: capitalize;
          }
          .value {
            color: #333;
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 3px;
            word-break: break-word;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🔔 New Contact Form Submission for rebarX</h2>
          </div>
          <div class="content">
            ${fieldsHtml}
            <div class="field">
              <div class="label">Submitted At:</div>
              <div class="value">${new Date(formData.createdAt || Date.now()).toLocaleString()}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `

  // Generate plain text version
  const fieldsText = Object.entries(formData)
    .filter(([key]) => key !== 'createdAt')
    .map(([key, value]) => `${key.replace(/_/g, ' ').toUpperCase()}: ${value}`)
    .join('\n')

  const emailText = `
New Contact Form Submission for rebarX

${fieldsText}

Submitted at: ${new Date(formData.createdAt || Date.now()).toLocaleString()}
  `

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@gfrpindia.com',
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission - for rebarX`,
      text: emailText,
      html: emailHtml,
    })
    console.log('✅ Contact notification email sent successfully')
    return { success: true }
  } catch (error) {
    console.error('❌ Error sending contact notification email:', error)
    return { success: false, error }
  }
}

export async function sendDynamicAutoReply(formData: DynamicFormData) {
  // Find email field (common variations)
  const emailField = 'cvplindore@gmail.com'

  if (!emailField) {
    console.warn('⚠️ No email field found in form data. Cannot send auto-reply.')
    return { success: false, error: 'No email field found' }
  }

  const fieldsHtml = Object.entries(formData)
    .filter(([key]) => key !== 'createdAt')
    .map(
      ([key, value]) => `
    <div class="field">
      <div class="label">${key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}:</div>
      <div class="value">${typeof value === 'string' ? value.replace(/\n/g, '<br>') : value}</div>
    </div>
  `,
    )
    .join('')

  // Find name field (common variations)
  const nameField =
    formData.name ||
    formData.full_name ||
    formData.fullName ||
    `${formData.first_name || ''} ${formData.last_name || ''}`.trim() ||
    'Valued Customer'

    const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .header {
            background-color: #ff6b35;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 5px 5px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #ff6b35;
            margin-bottom: 5px;
            text-transform: capitalize;
          }
          .value {
            color: #333;
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 3px;
            word-break: break-word;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🔔 New Contact Form Submission for rebarX</h2>
          </div>
          <div class="content">
            ${fieldsHtml}
            <div class="field">
              <div class="label">Submitted At:</div>
              <div class="value">${new Date(formData.createdAt || Date.now()).toLocaleString()}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `

  const emailText = `
Dear ${nameField},

Thank you for reaching out to us! We have received your message and our team will get back to you as soon as possible.

We appreciate your interest in RebarX India and look forward to assisting you.

Best regards,
RebarX India Team

---
This is an automated message. Please do not reply to this email.
  `

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@gfrpindia.com',
      to: 'cvplindore@gmail.com',
      subject: 'Thank You for Contacting GFRP India',
      text: emailText,
      html: emailHtml,
    })
    console.log('✅ Auto-reply email sent successfully')
    return { success: true }
  } catch (error) {
    console.error('❌ Error sending auto-reply email:', error)
    return { success: false, error }
  }
}