import type { CollectionConfig } from 'payload'

const Navbar: CollectionConfig = {
  slug: 'navbar',
  admin: {
    useAsTitle: 'name', // What shows in CMS list
  },
  access: {
    read: () => true, // Make it public
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logoType',
      type: 'select',
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Text', value: 'text' },
      ],
      defaultValue: 'text',
    },
    {
      name: 'logoText',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData.logoType === 'text',
      },
    },
    {
      name: 'logoImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => siblingData.logoType === 'image',
      },
    },
    {
      name: 'links',
      type: 'array',
      label: 'Navigation Links',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'socials',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'phone',
      type: 'text',
    },
  ],
}

export default Navbar
