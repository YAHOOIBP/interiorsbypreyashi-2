export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  coverImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'vastu-principles-for-modern-homes',
    title: 'Vastu Principles for Modern Homes',
    coverImage: '/images/blog/vastu-principles-cover.webp',
    category: 'Vastu',
    excerpt: 'A comprehensive direction-wise guide to applying ancient Vastu principles in modern home design for harmony and prosperity.',
    content: `
      <h2>Vastu for Modern Homes — Merged Direction-wise Guide</h2>
      
      <h3>🧭 North-East (NE – Ishaan)</h3>
      <p><strong>Recommended:</strong> Entrance, Puja/Meditation room, Porch/Verandah/Balcony, Underground water tank, Lawn & plants, Study, Living/Drawing, Guest/Kids' room</p>
      <p><strong>Avoid:</strong> Kitchen, Toilets, Septic tank, Main switch/electricals</p>
      
      <h3>🧭 North (N)</h3>
      <p><strong>Recommended:</strong> Living/Drawing room, Entrance, Bathroom, Accounts/Treasury, Puja ghar, Lawn & plants, Basement (if needed), Well/Borewell</p>
      <p><strong>Avoid:</strong> Bedrooms</p>
      
      <h3>🧭 North-West (NW)</h3>
      <p><strong>Recommended:</strong> Guest bedroom, Kids' room, Dining, Study, Living room, Washing area, Food/Grain store, Parking, Toilet/Septic tank, Room for elders</p>
      <p><strong>Avoid:</strong> Master bedroom</p>
      
      <h3>🧭 East (E)</h3>
      <p><strong>Recommended:</strong> Bathroom, Open space, Guest room, Living/Drawing room, Study, Balcony; (Puja room acceptable)</p>
      <p><strong>Avoid:</strong> — (no specific avoid items in your charts)</p>
      
      <h3>🧭 West (W)</h3>
      <p><strong>Recommended:</strong> Dining room, Children's bedroom, Study room, Overhead water tank, Toilet/Septic tank</p>
      <p><strong>Avoid:</strong> Cellar</p>
      
      <h3>🧭 South-West (SW)</h3>
      <p><strong>Recommended:</strong> Master bedroom, Wardrobes & Dressing, Heavy items, Cash box, Staircase block, Overhead water tank, Servant room</p>
      <p><strong>Avoid:</strong> Cellar/Well, Underground water features</p>
      
      <h3>🧭 South (S)</h3>
      <p><strong>Recommended:</strong> Bedrooms (sleep with head to South), Store room, Stairs, Toilet, Trees (landscape)</p>
      <p><strong>Avoid:</strong> Cellar/Well, Large open water</p>
      
      <h3>🧭 South-East (SE – Agni)</h3>
      <p><strong>Recommended:</strong> Kitchen (cook facing East), Electric meter/Main switch, Inverter/Generator, Store for oils & provisions, Drawing/Guest room, Servant room</p>
      <p><strong>Avoid:</strong> Septic tank, Puja room, Well/Cellar</p>
      
      <h3>🧭 South-South-East (SSE)</h3>
      <p><strong>Recommended:</strong> Oil & general store, Gate, Bedroom, Drawing & Dining room, Stairs, Guest/Paying-guest room, Servant room</p>
      
      <h3>🧭 South-South-West (SSW)</h3>
      <p><strong>Recommended:</strong> Toilet, Bedroom, Store, Stairs, Trees</p>
      
      <h3>🌟 Center (Brahmasthan)</h3>
      <p><strong>Recommended:</strong> Keep open, light & airy; ideal for Tulsi plant</p>
      <p><strong>Avoid:</strong> Heavy construction, Toilet, Kitchen, Staircase, Store</p>
      
      <h3>🌿 Tulsi Plant</h3>
      <p><strong>Ideal:</strong> Center (Brahmasthan)</p>
      <p><strong>Also acceptable:</strong> NE (with lawn/plants) and SE (not near the stove)</p>
    `,
    author: 'Preyashi',
    date: '2024-12-15',
    readTime: '8 min read'
  },
  {
    id: '2',
    slug: '5-interior-design-mistakes-to-avoid',
    title: '5 Interior Design Mistakes to Avoid',
    coverImage: '/images/blog/mistakes-cover.webp',
    category: 'Design Tips',
    excerpt: 'Learn about the most common interior design pitfalls and practical solutions to create perfectly balanced and functional living spaces.',
    content: `
      <h2>Here are 5 common Interior Design mistakes to avoid (and how to fix them):</h2>
      
      <h3>1. Ignoring Proper Space Planning</h3>
      <p><strong>❌ Mistake:</strong> Filling rooms with furniture without measuring, leading to cramped or awkward layouts.</p>
      <p><strong>✅ Fix:</strong> Always measure your space and create a floor plan before buying furniture. Keep circulation space clear.</p>
      
      <h3>2. Poor Lighting Choices</h3>
      <p><strong>❌ Mistake:</strong> Relying only on overhead lighting (making spaces feel flat or harsh).</p>
      <p><strong>✅ Fix:</strong> Use a mix of ambient, task, and accent lighting. Layer light with floor lamps, wall sconces, or under-cabinet lights for warmth and depth.</p>
      
      <h3>3. Pushing All Furniture Against Walls</h3>
      <p><strong>❌ Mistake:</strong> Thinking this will make the room look bigger—but it often makes the space look empty in the middle.</p>
      <p><strong>✅ Fix:</strong> Float furniture when possible (like a sofa with a console table behind it) to create conversation zones.</p>
      
      <h3>4. Choosing Style Over Comfort</h3>
      <p><strong>❌ Mistake:</strong> Buying furniture only for looks, but not for functionality or comfort.</p>
      <p><strong>✅ Fix:</strong> Test furniture before purchase. Make sure sofas, chairs, and beds are ergonomically comfortable and suit daily use.</p>
      
      <h3>5. Neglecting Personal Touch</h3>
      <p><strong>❌ Mistake:</strong> Copy-pasting Pinterest or showroom looks without adding your own story.</p>
      <p><strong>✅ Fix:</strong> Add personal elements—art, photos, souvenirs, heirlooms, or custom pieces—to make the space feel like your home.</p>
    `,
    author: 'Preyashi',
    date: '2024-12-10',
    readTime: '6 min read'
  },
  {
    id: '3',
    slug: 'color-psychology-in-interior-design',
    title: 'Color Psychology in Interior Design',
    coverImage: '/images/blog/color-psychology-cover.webp',
    category: 'Color Theory',
    excerpt: 'Discover how different colors influence mood, emotions, and energy levels to create the perfect atmosphere in your home.',
    content: `
      <h2>🎨 Color Psychology in Interior Design – How Colors Shape Your Mood & Space</h2>
      
      <p>Colors are more than just visual choices in interior design—they have the power to influence our mood, emotions, and even energy levels. A thoughtfully chosen color palette can transform a house into a home, adding not only beauty but also balance. Here's how different colors impact your interiors and how to use them effectively.</p>
      
      <h3>🤍 White – Purity & Spaciousness</h3>
      <p>White represents simplicity, cleanliness, and freshness. It reflects light beautifully, making spaces feel larger and brighter.</p>
      <p><strong>Best Use:</strong> Small rooms, modern minimalist interiors, Scandinavian-style spaces.</p>
      <p><strong>Tip:</strong> Pair with wood, plants, or textured fabrics to avoid a clinical feel.</p>
      
      <h3>🌾 Beige & Neutrals – Warmth & Timelessness</h3>
      <p>Neutral tones like beige, taupe, and cream bring warmth and sophistication. They work as perfect backdrops, allowing furniture, art, or accessories to shine.</p>
      <p><strong>Best Use:</strong> Living rooms, bedrooms, or spaces that need a cozy, timeless touch.</p>
      <p><strong>Tip:</strong> Layer different neutral shades with textures (linen, wood, jute) for depth.</p>
      
      <h3>💙 Blue – Calm & Focus</h3>
      <p>Blue is associated with peace, stability, and productivity. It lowers stress levels and helps with concentration.</p>
      <p><strong>Best Use:</strong> Bedrooms for restful sleep, study rooms for focus, and bathrooms for a spa-like feel.</p>
      <p><strong>Tip:</strong> Light blues create serenity, while deep navy adds elegance.</p>
      
      <h3>🌿 Green – Balance & Freshness</h3>
      <p>Green symbolizes nature, growth, and harmony. It brings a sense of healing and freshness indoors.</p>
      <p><strong>Best Use:</strong> Living rooms, dining areas, and wellness corners.</p>
      <p><strong>Tip:</strong> Use sage or olive tones for calmness, or brighter greens for vibrancy. Adding indoor plants enhances the effect.</p>
      
      <h3>💛 Yellow – Positivity & Energy</h3>
      <p>Yellow radiates warmth, optimism, and cheerfulness. It's known to uplift mood and stimulate energy.</p>
      <p><strong>Best Use:</strong> Kitchens and dining areas for lively energy, or kids' rooms for playfulness.</p>
      <p><strong>Tip:</strong> Use softer yellows for subtle cheer; avoid overusing bright tones in bedrooms.</p>
      
      <h3>❤ Red – Passion & Excitement</h3>
      <p>Red is bold, energetic, and passionate. It increases warmth but can also feel overwhelming in large doses.</p>
      <p><strong>Best Use:</strong> Dining areas (stimulates appetite), accent walls, or statement décor.</p>
      <p><strong>Tip:</strong> Use as highlights or feature walls instead of painting an entire room red.</p>
      
      <h3>🌸 Pink – Love & Comfort</h3>
      <p>Pink carries softness, affection, and nurturing vibes. It's soothing yet stylish when used in interiors.</p>
      <p><strong>Best Use:</strong> Bedrooms, nurseries, or cozy corners.</p>
      <p><strong>Tip:</strong> Blush and dusty pinks feel elegant, while brighter pinks can be playful.</p>
      
      <h3>⚫ Grey – Balance & Modernity</h3>
      <p>Grey symbolizes neutrality, sophistication, and balance. It's versatile and pairs beautifully with almost any accent color.</p>
      <p><strong>Best Use:</strong> Living rooms, offices, and modern homes.</p>
      <p><strong>Tip:</strong> Mix warm greys with wood for a cozy effect, or pair cool greys with metals for a sleek, industrial vibe.</p>
      
      <h3>🖤 Black – Power & Elegance</h3>
      <p>Black adds depth, luxury, and a dramatic effect. It can make spaces look chic but should be used carefully.</p>
      <p><strong>Best Use:</strong> Statement walls, furniture, lighting fixtures, or trims.</p>
      <p><strong>Tip:</strong> Combine with lighter shades to prevent a heavy, closed-in feel.</p>
      
      <h3>🌟 Conclusion</h3>
      <p>Colors are not just decorative choices—they're emotional tools that influence how we live, work, and feel at home. Whether you prefer calming blues, grounding neutrals, or energizing yellows, the right palette can truly elevate your interiors.</p>
      
      <p><strong>👉 When designing your space, think about the mood you want to create, and let color psychology guide your decisions.</strong></p>
    `,
    author: 'Preyashi',
    date: '2024-12-05',
    readTime: '7 min read'
  },
  {
    id: '4',
    slug: 'vedic-numerology-in-interior-design',
    title: 'Vedic Numerology – The 3 Pillars That Shape Your Life',
    coverImage: '/images/blog/numerology-cover.webp',
    category: 'Numerology',
    excerpt: 'Explore the ancient science of Vedic numerology and learn how the 3 core numbers influence personality, destiny, and life purpose.',
    content: `
      <h2>Vedic Numerology – The 3 Pillars That Shape Your Life</h2>
      
      <p>Vedic Numerology is an ancient science that connects numbers with vibrations of the universe. Each person is born with a unique numerical blueprint that influences personality, destiny, and how others perceive them. In this system, three core numbers—known as the 3 Pillars of Life—play the most important role in understanding and balancing one's journey.</p>
      
      <h3>🌟 1. Basic Number (Psychic Number)</h3>
      <p>The Basic Number represents your personality, emotions, and how you deal with life on a day-to-day basis. It's the number closest to your heart and defines your natural instincts.</p>
      
      <p><strong>How to Calculate:</strong> Take your date of birth (day only).</p>
      <p><strong>Example:</strong> If born on 15 → 1 + 5 = 6.</p>
      <p><strong>What it Means:</strong> This number reveals your nature, likes and dislikes, and how you react in daily situations.</p>
      <p><strong>👉 It's the number that makes you you.</strong></p>
      
      <h3>🌿 2. Destiny Number (Life Path Number)</h3>
      <p>The Destiny Number shows the bigger picture—your life purpose, karmic path, and the opportunities or challenges you may face. It reflects the journey your soul has chosen in this lifetime.</p>
      
      <p><strong>How to Calculate:</strong> Add up the full date of birth (DD + MM + YYYY) until you reach a single digit (except master numbers 11 & 22).</p>
      <p><strong>Example:</strong> 15-08-1992 → 1+5+0+8+1+9+9+2 = 35 → 3+5 = 8.</p>
      <p><strong>What it Means:</strong> This number guides your long-term goals, career path, and the lessons you're meant to learn.</p>
      <p><strong>👉 It is often called your life's compass.</strong></p>
      
      <h3>💫 3. Name Number (Expression Number)</h3>
      <p>The Name Number reflects how the outside world perceives you. It represents your social image, opportunities, and how your energy interacts with others. Unlike your date of birth, this number can be modified by changing the spelling of your name to achieve better alignment.</p>
      
      <p><strong>How to Calculate:</strong> Assign numerical values to each letter of your full name using the Chaldean/Vedic chart and total them until a single digit is reached.</p>
      <p><strong>What it Means:</strong> If this number vibrates in harmony with your Basic and Destiny numbers, it enhances success, recognition, and balance in life.</p>
      <p><strong>👉 It's the face you show to the world.</strong></p>
      
      <h3>⚖ Why Balancing the 3 Pillars Matters</h3>
      <p>When the Basic Number, Destiny Number, and Name Number are in harmony, life feels smoother. You attract the right opportunities, relationships flow better, and challenges become easier to navigate.</p>
      
      <p>If they conflict, you may feel blocked or face repeated struggles.</p>
      <p>Through name correction and mindful living, balance can be restored.</p>
      
      <h3>🌟 Conclusion</h3>
      <p>Vedic Numerology isn't about changing fate—it's about aligning with the right vibrations. The 3 Pillars of Life reveal your inner nature (Basic), your soul's path (Destiny), and your outer identity (Name). By harmonizing these numbers, you can unlock clarity, confidence, and abundance in your journey.</p>
    `,
    author: 'Preyashi',
    date: '2024-11-28',
    readTime: '9 min read'
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = BLOG_POSTS.map(post => post.category);
  return [...new Set(categories)];
};