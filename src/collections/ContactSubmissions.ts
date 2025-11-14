// // // // src/collections/ContactSubmissions.ts
// // // import { CollectionConfig } from 'payload/types'

// // // const ContactSubmissions: CollectionConfig = {
// // //   slug: 'contact-submissions',
// // //   access: {
// // //     read: () => false,
// // //     create: () => true,
// // //   },
// // //   admin: {
// // //     useAsTitle: 'id', // ✅ use 'id' or another field that exists
// // //     group: 'Submissions', // ✅ Optional: helps organize in sidebar
// // //   },
// // //   fields: [
// // //     {
// // //       name: 'formData',
// // //       type: 'json', // store all dynamic form values
// // //       required: true,
// // //     },
// // //   ],
// // // }

// // // export default ContactSubmissions

// // // src/collections/ContactSubmissions.ts
// // import { CollectionConfig } from 'payload'

// // const ContactSubmissions: CollectionConfig = {
// //   slug: 'contact-submissions',
// //   access: {
// //     read: () => true, // ✅ Allow admins to read submissions
// //     create: () => true,
// //     update: () => false, // ✅ Prevent editing submissions
// //     delete: () => true, // ✅ Allow deleting spam/old submissions
// //   },
// //   admin: {
// //     useAsTitle: 'id',
// //     group: 'Submissions',
// //     defaultColumns: ['id', 'createdAt'], // ✅ Show useful columns in list view
// //   },
// //   timestamps: true, // ✅ Add createdAt and updatedAt fields
// //   fields: [
// //     {
// //       name: 'formData',
// //       type: 'json',
// //       required: true,
// //       admin: {
// //         readOnly: true, // ✅ Prevent editing form data
// //       },
// //     },
// //   ],
// // }

// // export default ContactSubmissions

// import { CollectionConfig } from 'payload'
// import { sendContactNotification, sendAutoReply } from '@/utils/email'

// const ContactSubmissions: CollectionConfig = {
//   slug: 'contact-submissions',
//   access: {
//     read: () => true,
//     create: () => true,
//     update: () => false,
//     delete: () => true,
//   },
//   admin: {
//     useAsTitle: 'id',
//     group: 'Submissions',
//     defaultColumns: ['id', 'createdAt'],
//   },
//   timestamps: true,
//   hooks: {
//     afterChange: [
//       async ({ doc, operation }) => {
//         // Only send email on create (new submission)
//         if (operation === 'create') {
//           try {
//             console.log('📧 Sending email notifications for dynamic form...')

//             // Send notification to admin
//             await sendContactNotification({
//               ...doc.formData,
//               createdAt: doc.createdAt,
//             })

//             // Send auto-reply to customer
//             // Comment out the line below if you don't want auto-reply
//             await sendAutoReply({
//               ...doc.formData,
//               createdAt: doc.createdAt,
//             })

//             console.log('✅ All email notifications sent successfully')
//           } catch (error) {
//             console.error('❌ Error sending email notifications:', error)
//             // Don't throw - we still want the submission to succeed
//           }
//         }
//         return doc
//       },
//     ],
//   },
//   fields: [
//     {
//       name: 'formData',
//       type: 'json',
//       required: true,
//       admin: {
//         readOnly: true,
//       },
//     },
//   ],
// }

// export default ContactSubmissions

import { CollectionConfig } from 'payload'
import { sendDynamicContactNotification, sendDynamicAutoReply } from '@/utils/email' // ✅ Import the DYNAMIC functions

const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  access: {
    read: () => true,
    create: () => true,
    update: () => false,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'id',
    group: 'Submissions',
    defaultColumns: ['id', 'createdAt'],
  },
  timestamps: true,
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          try {
            console.log('📧 Sending email notifications for dynamic form...')

            // ✅ Use DYNAMIC functions
            await sendDynamicContactNotification({
              ...doc.formData,
              createdAt: doc.createdAt,
            })

            await sendDynamicAutoReply({
              ...doc.formData,
              createdAt: doc.createdAt,
            })

            console.log('✅ All email notifications sent successfully')
          } catch (error) {
            console.error('❌ Error sending email notifications:', error)
          }
        }
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'formData',
      type: 'json',
      required: true,
      admin: {
        readOnly: true,
      },
    },
  ],
}

export default ContactSubmissions