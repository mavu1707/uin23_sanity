import category from "./category";

export default{
  name: "products", 
  type: "document",
  title: "Produkt",
  fields:[
    {
      name: 'product_title',
      type: 'string',
      title: 'Produkt tittel'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL-tittel',
      options: {
        source: 'product_title',
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 150)
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Pris'
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Antall på lager'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Bilde'
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: [category]
    }
    
  ]
}