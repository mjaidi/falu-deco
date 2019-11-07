import { seo } from "./seo"

export const home = {
  label: "Home",
  name: "home",
  files: [
    {
      name: "banner",
      label: "Banner",
      file: "content/info/home.md",
      fields: [
        ...seo,
        {
          label: "Logo",
          name: "logo",
          widget: "image",
          allow_multiple: false,
          required: true,
        },
        {
          label: "Banner Images",
          name: "banner_gallery",
          widget: "list",
          fields: [
            { label: "Titre", name: "title", widget: "string", required: true },
            {
              label: "Sous-Titre",
              name: "subtitle",
              widget: "string",
              required: false,
            },
            {
              label: "Image",
              name: "image",
              widget: "image",
              allow_multiple: false,
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "contact",
      label: "Contact",
      file: "content/info/contact.md",
      fields: [
        {
          label: "Numéro Téléphone",
          name: "phone",
          widget: "string",
          required: true,
        },
        {
          label: "Email",
          name: "email",
          widget: "string",
          required: true,
        },
        {
          label: "Adresse",
          name: "address",
          widget: "string",
          required: true,
        },
      ],
    },
    {
      name: "about",
      label: "About",
      file: "content/info/about.md",
      fields: [
        {
          label: "Image",
          name: "image",
          widget: "image",
          allow_multiple: false,
          required: true,
        },
        {
          label: "Text",
          name: "text",
          widget: "markdown",
          required: true,
        },
      ],
    },
  ],
}
