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
  image?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'vastu-principles-for-modern-homes',
    title: 'Vastu Principles for Modern Homes',
    category: 'Vastu',
    excerpt: 'Discover how ancient Vastu Shastra principles can be seamlessly integrated into contemporary interior design for harmony and prosperity.',
    content: `
      <h2>Introduction to Modern Vastu Living</h2>
      <p>In today's fast-paced world, creating a harmonious living space that balances modern aesthetics with ancient wisdom has become more important than ever. Vastu Shastra, the traditional Indian science of architecture and design, offers timeless principles that can transform your contemporary home into a sanctuary of positive energy.</p>

      <h3>Essential Vastu Principles for Today's Homes</h3>
      
      <h4>1. Entrance Orientation - The Gateway of Energy</h4>
      <p>Your home's main entrance is considered the mouth through which cosmic energy enters. For modern homes:</p>
      <ul>
        <li><strong>North-facing entrance:</strong> Attracts wealth and career opportunities - ideal for professionals and business owners</li>
        <li><strong>East-facing entrance:</strong> Brings health, vitality, and new beginnings - perfect for growing families</li>
        <li><strong>Northeast entrance:</strong> The most auspicious direction for spiritual growth and wisdom</li>
      </ul>
      <p>Modern application: Ensure your entrance is well-lit with LED lighting, keep it clutter-free, and consider adding plants or water features in the northeast zone.</p>

      <h4>2. Living Room Design According to Vastu</h4>
      <p>The living room represents social harmony and family bonding:</p>
      <ul>
        <li>Position in the <strong>north or east zones</strong> for optimal energy flow</li>
        <li>Arrange seating to face <strong>east or north</strong> for positive conversations</li>
        <li>Use <strong>light colors</strong> like cream, light yellow, or soft greens</li>
        <li>Place heavy furniture in the <strong>south or west walls</strong></li>
      </ul>

      <h4>3. Kitchen Placement and Modern Vastu</h4>
      <p>The kitchen represents nourishment and prosperity:</p>
      <ul>
        <li><strong>Southeast corner (Agni zone):</strong> Ideal placement aligning with fire element</li>
        <li><strong>Cooking direction:</strong> Face east while cooking for positive energy absorption</li>
        <li><strong>Modern appliances:</strong> Place microwave and electrical items in southeast</li>
        <li><strong>Water elements:</strong> Sink and water purifier in northeast zone of kitchen</li>
      </ul>

      <h3>Getting Started: Your Vastu Action Plan</h3>
      <ol>
        <li><strong>Assessment:</strong> Evaluate your current home layout and identify key areas for improvement</li>
        <li><strong>Prioritize:</strong> Start with the most important spaces - entrance, bedroom, and kitchen</li>
        <li><strong>Implement gradually:</strong> Make changes systematically rather than all at once</li>
        <li><strong>Observe:</strong> Notice the effects of changes on your daily life and well-being</li>
        <li><strong>Refine:</strong> Continue to make small adjustments based on your observations</li>
      </ol>

      <p>Remember, the goal of Vastu is to create a living space that supports your highest potential. By thoughtfully integrating these ancient principles with modern design, you can create a home that is not only beautiful but also energetically supportive of your goals and dreams.</p>

      <p><em>Ready to transform your space with Vastu principles? Contact our expert team for a personalized consultation that respects both your design preferences and ancient wisdom.</em></p>
    `,
    author: 'Preyashi',
    date: '2024-12-15',
    readTime: '8 min read'
  },
  {
    id: '2',
    slug: '5-interior-design-mistakes-to-avoid',
    title: '5 Interior Design Mistakes to Avoid',
    category: 'Design Tips',
    excerpt: 'Learn about the most common interior design pitfalls and how to avoid them for a perfectly balanced and functional living space.',
    content: `
      <h2>Common Interior Design Mistakes That Can Ruin Your Space</h2>
      <p>Creating a beautiful, functional home is an art that requires both creativity and practical knowledge. Even with the best intentions, many homeowners fall into common traps that can undermine the beauty and functionality of a space.</p>

      <h3>Mistake #1: Ignoring Scale and Proportion</h3>
      <h4>The Problem:</h4>
      <p>One of the most frequent errors is choosing furniture that's either too large or too small for the space. This creates visual imbalance and can make rooms feel cramped or uncomfortably sparse.</p>

      <h4>The Solution:</h4>
      <ul>
        <li><strong>Measure twice, buy once:</strong> Always measure your space and create a floor plan before purchasing</li>
        <li><strong>Follow the 2/3 rule:</strong> Area rugs should cover at least the front legs of all furniture in a seating group</li>
        <li><strong>Coffee table height:</strong> Should be the same height as your sofa seat or 1-2 inches lower</li>
      </ul>

      <h3>Mistake #2: Poor Lighting Design</h3>
      <h4>The Solution - Layer Your Lighting:</h4>
      <ol>
        <li><strong>Ambient lighting:</strong> General illumination (overhead fixtures, recessed lights)</li>
        <li><strong>Task lighting:</strong> Focused light for specific activities (desk lamps, under-cabinet lighting)</li>
        <li><strong>Accent lighting:</strong> Decorative illumination (table lamps, wall sconces, artwork lighting)</li>
      </ol>

      <h3>Mistake #3: Neglecting Flow and Functionality</h3>
      <p>Prioritizing aesthetics over functionality leads to beautiful but impractical spaces that don't support daily life.</p>

      <h3>Mistake #4: Rushing the Process</h3>
      <p>Interior design is a process that benefits from thoughtful consideration. Rushing leads to costly mistakes and spaces that feel disjointed.</p>

      <h3>Mistake #5: Ignoring Personal Style for Trends</h3>
      <p>Creating a space that doesn't reflect your personality leads to a home that feels foreign and uncomfortable.</p>

      <p>Remember, the best interior design serves both beauty and function. By avoiding these common mistakes and taking a thoughtful approach to your space, you can create a home that not only looks stunning but also supports and enhances your daily life.</p>
    `,
    author: 'Preyashi',
    date: '2024-12-10',
    readTime: '6 min read'
  },
  {
    id: '3',
    slug: 'color-psychology-in-interior-design',
    title: 'Color Psychology in Interior Design',
    category: 'Color Theory',
    excerpt: 'Understand how different colors affect mood and behavior, and learn to use color psychology to create the perfect atmosphere in your home.',
    content: `
      <h2>The Science of Color: How Hues Influence Our Daily Lives</h2>
      <p>Color is one of the most powerful tools in interior design, capable of dramatically altering not just the appearance of a space, but also the emotions, behaviors, and well-being of those who inhabit it.</p>

      <h3>The Fundamentals of Color Psychology</h3>
      <p>Color psychology studies how different hues affect human behavior and emotional responses. These effects occur because:</p>
      <ul>
        <li><strong>Evolutionary associations:</strong> We've developed responses to colors based on natural associations</li>
        <li><strong>Cultural conditioning:</strong> Societal associations with colors influence our responses</li>
        <li><strong>Personal experiences:</strong> Individual memories and associations with specific colors</li>
      </ul>

      <h3>Warm Colors - Energy and Intimacy</h3>
      <p><strong>Red - The Color of Passion and Power</strong></p>
      <ul>
        <li><strong>Best for:</strong> Dining rooms, exercise spaces, accent walls</li>
        <li><strong>Avoid in:</strong> Bedrooms (can disrupt sleep), small spaces</li>
      </ul>

      <p><strong>Orange - The Color of Enthusiasm and Creativity</strong></p>
      <ul>
        <li><strong>Best for:</strong> Play rooms, creative studios, kitchens, social spaces</li>
        <li><strong>Modern applications:</strong> Burnt orange and terracotta create warmth without overstimulation</li>
      </ul>

      <h3>Cool Colors - Calm and Focus</h3>
      <p><strong>Blue - The Color of Tranquility and Trust</strong></p>
      <ul>
        <li><strong>Best for:</strong> Bedrooms, bathrooms, meditation spaces, home offices</li>
        <li><strong>Varieties:</strong> Navy for sophistication, powder blue for serenity, teal for balance</li>
      </ul>

      <p><strong>Green - The Color of Balance and Renewal</strong></p>
      <ul>
        <li><strong>Best for:</strong> Any room, especially bedrooms, living rooms, and home offices</li>
        <li><strong>Benefits:</strong> Works well with both warm and cool color schemes</li>
      </ul>

      <h3>The 60-30-10 Rule</h3>
      <p>A foolproof way to create balanced color schemes:</p>
      <ul>
        <li><strong>60%:</strong> Dominant neutral color (walls, large furniture)</li>
        <li><strong>30%:</strong> Secondary color (accent furniture, window treatments)</li>
        <li><strong>10%:</strong> Pop of accent color (pillows, artwork, accessories)</li>
      </ul>

      <p>Color psychology is a powerful tool that can transform not just the look of your home, but how you feel and function within it. By understanding the psychological effects of different hues, you can create an environment that truly supports your well-being.</p>
    `,
    author: 'Preyashi',
    date: '2024-12-05',
    readTime: '7 min read'
  },
  {
    id: '4',
    slug: 'vedic-numerology-in-interior-design',
    title: 'Vedic Numerology in Interior Design',
    category: 'Numerology',
    excerpt: 'Explore how Vedic numerology can guide your interior design choices to create spaces that resonate with your personal energy.',
    content: `
      <h2>Unlocking the Sacred Science of Numbers in Your Living Space</h2>
      <p>Vedic numerology, an ancient system rooted in Indian spiritual traditions, offers profound insights into how numbers influence our lives, personalities, and environments. When applied to interior design, this sacred science can help create living spaces that resonate with your personal energy.</p>

      <h3>Understanding Vedic Numerology Basics</h3>
      <p>Unlike Western numerology, Vedic numerology connects each number to specific planetary energies, colors, directions, and life aspects. This system recognizes three key numbers:</p>

      <h4>The Three Pillars of Personal Numerology</h4>
      <ol>
        <li><strong>Psychic Number:</strong> Your birth date reduced to a single digit - how you see yourself</li>
        <li><strong>Destiny Number:</strong> Your complete birth date reduced to a single digit - how the world sees you</li>
        <li><strong>Name Number:</strong> The numerical value of your name - your professional and social identity</li>
      </ol>

      <h3>Number 1 - Sun Energy (Leadership & Independence)</h3>
      <p><strong>Interior Design Approach:</strong></p>
      <ul>
        <li><strong>Colors:</strong> Golden yellow, orange, bright red</li>
        <li><strong>Materials:</strong> Bold metals like gold and brass</li>
        <li><strong>Furniture Style:</strong> Statement pieces, unique designs, bold geometries</li>
        <li><strong>Direction:</strong> East-facing rooms for maximum sun energy</li>
      </ul>

      <h3>Number 2 - Moon Energy (Cooperation & Intuition)</h3>
      <p><strong>Interior Design Approach:</strong></p>
      <ul>
        <li><strong>Colors:</strong> Soft whites, silver, pale blue, cream</li>
        <li><strong>Materials:</strong> Silver accents, glass, crystal</li>
        <li><strong>Furniture Style:</strong> Curved lines, paired items, comfortable seating</li>
        <li><strong>Direction:</strong> North-facing rooms for moon energy</li>
      </ul>

      <h3>Calculating Your Personal Numbers</h3>
      <h4>Psychic Number Calculation</h4>
      <p>Simply reduce your birth date to a single digit:</p>
      <ul>
        <li>Born on the 5th = 5</li>
        <li>Born on the 23rd = 2 + 3 = 5</li>
        <li>Born on the 29th = 2 + 9 = 11 = 1 + 1 = 2</li>
      </ul>

      <h3>Color Coordination with Personal Numbers</h3>
      <p>Layer colors based on your three key numbers:</p>
      <ul>
        <li><strong>Primary color (60%):</strong> Based on your Destiny Number</li>
        <li><strong>Secondary color (30%):</strong> Based on your Psychic Number</li>
        <li><strong>Accent color (10%):</strong> Based on your Name Number</li>
      </ul>

      <p>Numerology offers a profound way to understand yourself and create living spaces that truly support your authentic nature and life purpose. By aligning your personal space with your numerical vibrations, you create an environment that enhances your natural strengths and supports your goals.</p>
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
