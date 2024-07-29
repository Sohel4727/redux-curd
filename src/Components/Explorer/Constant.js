export const data = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "explorer.js",
              isfolder: false,
            },
            {
              name: "style.css",
              isfolder: false,
            },
          ],
        },
        {
          name: "constants",
          isFolder: true,
          items: [
            {
              name: "constants.js",
              isfolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};
