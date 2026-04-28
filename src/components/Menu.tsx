import { useState } from 'react'
import vegImg from '../assets/veg-items.png'
import nonVegImg from '../assets/non-veg.png'
import './Menu.css'

const categories = ['All', 'Veg', 'Non-Veg', 'Tiffin']

const menuItems = [
  { name: 'Dal Makhani', price: '£6.00', category: 'Veg', section: 'Curries' },
  { name: 'Dal Tadka', price: '£5.50', category: 'Veg', section: 'Curries' },
  { name: 'Shahi Paneer', price: '£6.50', category: 'Veg', section: 'Curries' },
  { name: 'Matar Paneer', price: '£6.00', category: 'Veg', section: 'Curries' },
  { name: 'Aloo Gobi', price: '£5.50', category: 'Veg', section: 'Curries' },
  { name: 'Chana Masala', price: '£5.50', category: 'Veg', section: 'Curries' },
  { name: 'Sarso Saag', price: '£6.00', category: 'Veg', section: 'Curries' },
  { name: 'Kadhi Pakora', price: '£6.00', category: 'Veg', section: 'Curries' },
  { name: 'Rajma', price: '£5.50', category: 'Veg', section: 'Curries' },
  { name: 'Kala Chana', price: '£5.50', category: 'Veg', section: 'Curries' },
  { name: 'Mix Vegetable', price: '£6.00', category: 'Veg', section: 'Curries' },
  { name: 'Plain Rice', price: '£1.50', category: 'Veg', section: 'Rice' },
  { name: 'Jeera Rice', price: '£2.00', category: 'Veg', section: 'Rice' },
  { name: 'Peas Rice', price: '£2.50', category: 'Veg', section: 'Rice' },
  { name: 'Tawa Roti', price: '50p', category: 'Veg', section: 'Breads' },
  { name: 'Bhature', price: '80p', category: 'Veg', section: 'Breads' },
  { name: 'Aloo Paratha', price: '£1.50', category: 'Veg', section: 'Breads' },
  { name: 'Gobhi Paratha', price: '£1.80', category: 'Veg', section: 'Breads' },
  { name: 'Methi Paratha', price: '£1.80', category: 'Veg', section: 'Breads' },
  { name: 'Mooli Paratha', price: '£1.80', category: 'Veg', section: 'Breads' },
  { name: 'Makki Roti', price: '£1.50', category: 'Veg', section: 'Breads' },
  { name: 'Yoghurt / Raita', price: '£1.30', category: 'Veg', section: 'Breads' },
  { name: 'Fish Pakora (per kg)', price: '£15', category: 'Non-Veg', section: 'Specials' },
  { name: 'Chicken Kebab (per piece)', price: '85p', category: 'Non-Veg', section: 'Specials' },
  { name: 'Makki Roti & Saag', price: '£7.00', category: 'Non-Veg', section: 'Specials' },
  { name: 'Chicken Curry with bone', price: '£14.99', category: 'Non-Veg', section: 'Family Pack Curries' },
  { name: 'Chicken Curry without bone', price: '£16.99', category: 'Non-Veg', section: 'Family Pack Curries' },
  { name: 'Lamb Curry with bone', price: '£21.99', category: 'Non-Veg', section: 'Family Pack Curries' },
  { name: 'Lamb Curry without bone', price: '£23.99', category: 'Non-Veg', section: 'Family Pack Curries' },
  { name: 'Chicken Curry Meal', price: '£12.00', category: 'Non-Veg', section: 'Meal Deals', description: 'Portion + 4 Roti or Rice' },
  { name: 'Lamb Curry Meal', price: '£14.99', category: 'Non-Veg', section: 'Meal Deals', description: 'Portion + 4 Roti or Rice' },
  { 
  name: 'Basic Tiffin', 
  price: '£6.50', 
  category: 'Tiffin', 
  section: 'Tiffin Plans',
  description: '1 Dal or Sabzi, Raita, Salad, 4 Roti'
},
{ 
  name: 'Premium Tiffin', 
  price: '£7.99', 
  category: 'Tiffin', 
  section: 'Tiffin Plans',
  description: '1 Dal & 1 Sabzi, Raita, Salad, Rice & 4 Roti'
},
{ name: 'Samosa', price: '70p', category: 'Veg', section: 'Starters & Snacks' },
{ name: 'Chicken Samosa', price: '£1.00', category: 'Non-Veg', section: 'Starters & Snacks' },
{ name: 'Spring Roll', price: '80p', category: 'Veg', section: 'Starters & Snacks' },
{ name: 'Chilli Paneer', price: '£6.50', category: 'Veg', section: 'Starters & Snacks' },
{ name: 'Veg Manchurian', price: '£6.50', category: 'Veg', section: 'Starters & Snacks', description: '6 pieces' },

{ name: 'Dahi Bhalla', price: '£4.00', category: 'Veg', section: 'Chaat & Street Bites' },
{ name: 'Samosa Chaat', price: '£4.50', category: 'Veg', section: 'Chaat & Street Bites' },
{ name: 'Kulfi Faluda', price: '£4.00', category: 'Veg', section: 'Chaat & Street Bites' },

{ name: 'Chole Bhature', price: '£6.00', category: 'Veg', section: 'Special Combos', description: 'Chana masala & 2 bhature & salad' },
]

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const getBannerContent = () => {
    if (selectedCategory === 'Non-Veg') {
      return {
        image: nonVegImg,
        alt: 'Delicious non-vegetarian dishes banner',
        eyebrow: 'Premium Non-Veg Collection',
        title: 'Savory, protein-rich non-veg dishes for hearty meals'
      }
    }
    return {
      image: vegImg,
      alt: 'Fresh vegetarian dishes banner',
      eyebrow: 'Fresh Veg Collection',
      title: 'Warm, colourful vegetarian plates for every meal'
    }
  }

  const bannerContent = getBannerContent()

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory)

  const groups = filteredItems.reduce<Record<string, typeof menuItems>>((acc, item) => {
    if (!acc[item.section]) acc[item.section] = []
    acc[item.section].push(item)
    return acc
  }, {})

  const sectionOrder = [
  'Starters & Snacks',
  'Chaat & Street Bites',
  'Special Combos',
  'Curries',
  'Breads',
  'Rice'
]
  const orderedSections = [
    ...sectionOrder.filter((section) => groups[section]),
    ...Object.keys(groups)
      .filter((section) => !sectionOrder.includes(section))
      .sort(),
  ]

  return (
    <main className="menu-page">
      <section className="menu-banner">
        <img src={bannerContent.image} alt={bannerContent.alt} />
        <div className="banner-copy">
          <span className="eyebrow">{bannerContent.eyebrow}</span>
          <h2>{bannerContent.title}</h2>
        </div>
      </section>

      <section className="menu-hero">
        <div>
          <span className="eyebrow">Menu</span>
          <h1>Veg and non-veg dishes served fresh</h1>
          <p>
            Select a category below to browse the full menu. We keep veg and non-veg items separated for easy ordering.
          </p>
        </div>
        <div className="menu-tabs">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`menu-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="menu-sections">
        {orderedSections.map((sectionName) => (
          <article key={sectionName} className="menu-section-card">
            <h2>{sectionName}</h2>
            <div className="menu-items-list">
              {groups[sectionName].map((item) => (
                <div key={item.name} className="menu-row">
                  <div>
                    <p className="menu-item-name">{item.name}</p>
                    {item.description ? <p className="menu-item-desc">{item.description}</p> : null}
                  </div>
                  <span className="menu-item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Menu
