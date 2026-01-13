// Lección 1: Digital Marketing Vocabulary Essentials
// Semana 1 - Duración: 45 minutos

export const lesson1Data = {
  id: 'w1l1',
  week: 1,
  lessonNumber: 1,
  title: 'Digital Marketing Vocabulary Essentials',
  subtitle: 'Master the fundamental terminology of digital marketing',
  duration: '45 min',
  level: 'B2',
  type: 'vocabulary',
  
  // Objetivos de aprendizaje
  learningObjectives: [
    'Recognize and define 30+ essential digital marketing terms',
    'Pronounce marketing acronyms correctly (SEO, SEM, CTR, CPC, ROI)',
    'Use marketing terminology naturally in professional contexts',
    'Understand the relationship between key marketing concepts'
  ],

  // Introducción
  introduction: {
    text: `Welcome to your first lesson in Marketing and Communication in English! 
    
In today's digital landscape, marketing professionals need to speak a common language. Whether you're analyzing campaign performance, discussing strategies with international teams, or reading industry reports, understanding digital marketing vocabulary is essential.

This lesson will introduce you to the fundamental terms that form the backbone of digital marketing communication. By the end of this session, you'll be able to confidently discuss marketing metrics, channels, and strategies in English.`,
    
    preLessonQuestion: 'Have you ever felt lost reading a marketing report in English? You\'re not alone! Let\'s change that today.'
  },

  // Vocabulario principal (30 términos esenciales)
  vocabulary: [
    {
      term: 'SEO',
      fullForm: 'Search Engine Optimization',
      pronunciation: '/es-iː-əʊ/',
      definition: 'The practice of improving website visibility in search engine results organically (without paid advertising)',
      spanishTranslation: 'Optimización para motores de búsqueda',
      exampleSentence: 'Our SEO strategy helped us rank first for "best marketing tools".',
      relatedTerms: ['SEM', 'SERP', 'Keywords', 'Backlinks'],
      context: 'technical',
      difficulty: 'essential'
    },
    {
      term: 'SEM',
      fullForm: 'Search Engine Marketing',
      pronunciation: '/es-iː-em/',
      definition: 'Paid advertising strategies to increase visibility in search engine results',
      spanishTranslation: 'Marketing en motores de búsqueda',
      exampleSentence: 'We allocated 30% of our budget to SEM campaigns on Google Ads.',
      relatedTerms: ['PPC', 'Google Ads', 'CPC'],
      context: 'technical',
      difficulty: 'essential'
    },
    {
      term: 'CTR',
      fullForm: 'Click-Through Rate',
      pronunciation: '/siː-tiː-ɑːr/',
      definition: 'The percentage of people who click on your ad or link after seeing it',
      spanishTranslation: 'Tasa de clics',
      exampleSentence: 'Our email campaign achieved a 12% CTR, which is above industry average.',
      formula: 'CTR = (Clicks / Impressions) × 100',
      relatedTerms: ['Impressions', 'Clicks', 'Engagement'],
      context: 'metrics',
      difficulty: 'essential'
    },
    {
      term: 'CPC',
      fullForm: 'Cost Per Click',
      pronunciation: '/siː-piː-siː/',
      definition: 'The amount you pay each time someone clicks on your paid advertisement',
      spanishTranslation: 'Costo por clic',
      exampleSentence: 'Our average CPC decreased from $2.50 to $1.80 after optimizing our ads.',
      formula: 'CPC = Total Cost / Total Clicks',
      relatedTerms: ['PPC', 'CPM', 'CPA'],
      context: 'metrics',
      difficulty: 'essential'
    },
    {
      term: 'ROI',
      fullForm: 'Return on Investment',
      pronunciation: '/ɑːr-əʊ-aɪ/',
      definition: 'A measure of the profitability of an investment, expressed as a percentage',
      spanishTranslation: 'Retorno de inversión',
      exampleSentence: 'The campaign generated a 350% ROI in just three months.',
      formula: 'ROI = [(Revenue - Cost) / Cost] × 100',
      relatedTerms: ['ROAS', 'Revenue', 'Profit margin'],
      context: 'metrics',
      difficulty: 'essential'
    },
    {
      term: 'Conversion Rate',
      pronunciation: '/kənˈvɜːʃən reɪt/',
      definition: 'The percentage of visitors who complete a desired action (purchase, signup, download)',
      spanishTranslation: 'Tasa de conversión',
      exampleSentence: 'After redesigning our landing page, our conversion rate increased from 2% to 5%.',
      formula: 'Conversion Rate = (Conversions / Total Visitors) × 100',
      relatedTerms: ['Funnel', 'Lead', 'Call-to-Action'],
      context: 'metrics',
      difficulty: 'essential'
    },
    {
      term: 'Bounce Rate',
      pronunciation: '/baʊns reɪt/',
      definition: 'The percentage of visitors who leave your website after viewing only one page',
      spanishTranslation: 'Tasa de rebote',
      exampleSentence: 'A high bounce rate (above 70%) might indicate poor user experience or irrelevant content.',
      relatedTerms: ['Engagement', 'Session duration', 'Exit rate'],
      context: 'metrics',
      difficulty: 'essential'
    },
    {
      term: 'Engagement',
      pronunciation: '/ɪnˈgeɪdʒmənt/',
      definition: 'The level of interaction (likes, comments, shares, clicks) users have with your content',
      spanishTranslation: 'Interacción / Compromiso',
      exampleSentence: 'Our social media engagement increased by 200% after implementing a consistent posting schedule.',
      relatedTerms: ['Reach', 'Impressions', 'Interaction rate'],
      context: 'social media',
      difficulty: 'essential'
    },
    {
      term: 'Lead Generation',
      pronunciation: '/liːd ˌdʒenəˈreɪʃən/',
      definition: 'The process of attracting and converting prospects into potential customers',
      spanishTranslation: 'Generación de prospectos/leads',
      exampleSentence: 'Our lead generation campaign captured 1,500 qualified leads in Q1.',
      relatedTerms: ['Lead', 'MQL', 'SQL', 'Funnel'],
      context: 'strategy',
      difficulty: 'essential'
    },
    {
      term: 'Funnel',
      pronunciation: '/ˈfʌnəl/',
      definition: 'The marketing/sales funnel represents the customer journey from awareness to purchase',
      spanishTranslation: 'Embudo (de ventas/marketing)',
      exampleSentence: 'We need to optimize each stage of our funnel to reduce drop-offs.',
      stages: ['Awareness', 'Interest', 'Consideration', 'Intent', 'Evaluation', 'Purchase'],
      relatedTerms: ['Customer Journey', 'Pipeline', 'Conversion'],
      context: 'strategy',
      difficulty: 'essential'
    },
    {
      term: 'Customer Journey',
      pronunciation: '/ˈkʌstəmər ˈdʒɜːrni/',
      definition: 'The complete experience a customer has with your brand, from first contact to loyalty',
      spanishTranslation: 'Viaje del cliente',
      exampleSentence: 'Mapping the customer journey helps us identify pain points and opportunities.',
      relatedTerms: ['Touchpoint', 'Funnel', 'User experience'],
      context: 'strategy',
      difficulty: 'essential'
    },
    {
      term: 'Impressions',
      pronunciation: '/ɪmˈpreʃənz/',
      definition: 'The number of times your content or ad is displayed, regardless of clicks',
      spanishTranslation: 'Impresiones / Visualizaciones',
      exampleSentence: 'Our ad received 50,000 impressions but only 1,000 clicks.',
      relatedTerms: ['Reach', 'Views', 'CTR'],
      context: 'metrics',
      difficulty: 'essential'
    },
    {
      term: 'Reach',
      pronunciation: '/riːtʃ/',
      definition: 'The total number of unique people who see your content',
      spanishTranslation: 'Alcance',
      exampleSentence: 'Our post had a reach of 25,000 unique users.',
      difference: 'Reach = unique users, Impressions = total displays (including repeats)',
      relatedTerms: ['Impressions', 'Engagement', 'Audience'],
      context: 'metrics',
      difficulty: 'essential'
    },
    {
      term: 'Call-to-Action (CTA)',
      pronunciation: '/kɔːl tuː ˈækʃən/',
      definition: 'A prompt that encourages the audience to take a specific action',
      spanishTranslation: 'Llamada a la acción',
      exampleSentence: 'Our most effective CTA was "Start Your Free Trial Today".',
      examples: ['Sign Up Now', 'Learn More', 'Get Started', 'Download Free Guide'],
      relatedTerms: ['Landing page', 'Conversion', 'Button'],
      context: 'copywriting',
      difficulty: 'essential'
    },
    {
      term: 'Landing Page',
      pronunciation: '/ˈlændɪŋ peɪdʒ/',
      definition: 'A standalone web page created specifically for a marketing campaign',
      spanishTranslation: 'Página de aterrizaje',
      exampleSentence: 'We created a dedicated landing page for our Black Friday campaign.',
      relatedTerms: ['CTA', 'Conversion rate', 'A/B testing'],
      context: 'technical',
      difficulty: 'essential'
    },
    {
      term: 'A/B Testing',
      pronunciation: '/eɪ biː ˈtestɪŋ/',
      definition: 'Comparing two versions of content to determine which performs better',
      spanishTranslation: 'Prueba A/B',
      exampleSentence: 'We ran an A/B test on our email subject lines and Version B had 35% higher open rate.',
      relatedTerms: ['Optimization', 'Split testing', 'Conversion'],
      context: 'strategy',
      difficulty: 'intermediate'
    },
    {
      term: 'KPI',
      fullForm: 'Key Performance Indicator',
      pronunciation: '/keɪ-piː-aɪ/',
      definition: 'A measurable value that shows how effectively you\'re achieving business objectives',
      spanishTranslation: 'Indicador clave de rendimiento',
      exampleSentence: 'Our main KPIs this quarter are conversion rate, customer acquisition cost, and monthly recurring revenue.',
      relatedTerms: ['Metrics', 'Goals', 'Performance'],
      context: 'strategy',
      difficulty: 'essential'
    },
    {
      term: 'Target Audience',
      pronunciation: '/ˈtɑːrɡɪt ˈɔːdiəns/',
      definition: 'The specific group of people most likely to be interested in your product or service',
      spanishTranslation: 'Público objetivo',
      exampleSentence: 'Our target audience is millennial women aged 25-35 interested in sustainable fashion.',
      relatedTerms: ['Buyer persona', 'Segmentation', 'Demographics'],
      context: 'strategy',
      difficulty: 'essential'
    },
    {
      term: 'Content Marketing',
      pronunciation: '/ˈkɒntent ˈmɑːrkɪtɪŋ/',
      definition: 'Creating and distributing valuable content to attract and engage a target audience',
      spanishTranslation: 'Marketing de contenidos',
      exampleSentence: 'Our content marketing strategy includes blog posts, videos, and infographics.',
      relatedTerms: ['Blog', 'Social media', 'SEO', 'Storytelling'],
      context: 'strategy',
      difficulty: 'essential'
    },
    {
      term: 'Organic Traffic',
      pronunciation: '/ɔːrˈɡænɪk ˈtræfɪk/',
      definition: 'Website visitors who find you through unpaid search results',
      spanishTranslation: 'Tráfico orgánico',
      exampleSentence: 'Our organic traffic increased by 150% after implementing our SEO strategy.',
      relatedTerms: ['SEO', 'Paid traffic', 'Search results'],
      context: 'technical',
      difficulty: 'essential'
    },
    {
      term: 'PPC',
      fullForm: 'Pay-Per-Click',
      pronunciation: '/peɪ pər klɪk/',
      definition: 'An advertising model where you pay only when someone clicks your ad',
      spanishTranslation: 'Pago por clic',
      exampleSentence: 'We spent $5,000 on PPC campaigns last month with an average CPC of $1.50.',
      relatedTerms: ['Google Ads', 'CPC', 'SEM'],
      context: 'advertising',
      difficulty: 'essential'
    },
    {
      term: 'Retargeting',
      pronunciation: '/ˌriːˈtɑːrɡɪtɪŋ/',
      definition: 'Showing ads to people who have previously visited your website or engaged with your content',
      spanishTranslation: 'Retargeting / Reorientación',
      exampleSentence: 'Our retargeting campaign converted 15% of users who abandoned their shopping carts.',
      relatedTerms: ['Remarketing', 'Pixel', 'Cookie'],
      context: 'advertising',
      difficulty: 'intermediate'
    },
    {
      term: 'Analytics',
      pronunciation: '/ˌænəˈlɪtɪks/',
      definition: 'The systematic analysis of data to understand performance and make informed decisions',
      spanishTranslation: 'Analítica',
      exampleSentence: 'Google Analytics shows that 60% of our traffic comes from mobile devices.',
      relatedTerms: ['Data', 'Metrics', 'Dashboard', 'Reporting'],
      context: 'technical',
      difficulty: 'essential'
    },
    {
      term: 'Campaign',
      pronunciation: '/kæmˈpeɪn/',
      definition: 'A coordinated series of marketing activities designed to achieve a specific goal',
      spanishTranslation: 'Campaña',
      exampleSentence: 'Our summer campaign runs from June to August and focuses on increasing brand awareness.',
      relatedTerms: ['Strategy', 'Budget', 'Timeline', 'Goals'],
      context: 'strategy',
      difficulty: 'essential'
    },
    {
      term: 'Brand Awareness',
      pronunciation: '/brænd əˈweərnəs/',
      definition: 'How familiar consumers are with your brand and its products or services',
      spanishTranslation: 'Conocimiento de marca',
      exampleSentence: 'The influencer partnership significantly increased our brand awareness among Gen Z.',
      relatedTerms: ['Reach', 'Impressions', 'Recognition'],
      context: 'strategy',
      difficulty: 'essential'
    },
    {
      term: 'User Experience (UX)',
      pronunciation: '/ˈjuːzər ɪkˈspɪriəns/',
      definition: 'The overall experience a person has when interacting with your website, app, or product',
      spanishTranslation: 'Experiencia de usuario',
      exampleSentence: 'Improving our website\'s UX reduced our bounce rate by 40%.',
      relatedTerms: ['UI', 'Usability', 'Design', 'Navigation'],
      context: 'technical',
      difficulty: 'essential'
    },
    {
      term: 'Conversion',
      pronunciation: '/kənˈvɜːʃən/',
      definition: 'When a user completes a desired action (purchase, signup, download, etc.)',
      spanishTranslation: 'Conversión',
      exampleSentence: 'We tracked 250 conversions from last week\'s email campaign.',
      relatedTerms: ['Conversion rate', 'Goal', 'CTA', 'Lead'],
      context: 'metrics',
      difficulty: 'essential'
    },
    {
      term: 'Lead',
      pronunciation: '/liːd/',
      definition: 'A potential customer who has shown interest in your product or service',
      spanishTranslation: 'Prospecto / Lead',
      exampleSentence: 'Our sales team follows up with all qualified leads within 24 hours.',
      types: ['MQL (Marketing Qualified Lead)', 'SQL (Sales Qualified Lead)'],
      relatedTerms: ['Lead generation', 'Prospect', 'Pipeline'],
      context: 'strategy',
      difficulty: 'essential'
    },
    {
      term: 'Email Marketing',
      pronunciation: '/ˈiːmeɪl ˈmɑːrkɪtɪŋ/',
      definition: 'Sending commercial messages to a group of people via email',
      spanishTranslation: 'Marketing por correo electrónico',
      exampleSentence: 'Our email marketing campaigns have an average open rate of 28%.',
      relatedTerms: ['Newsletter', 'Automation', 'Open rate', 'CTR'],
      context: 'channels',
      difficulty: 'essential'
    },
    {
      term: 'Social Media Marketing',
      pronunciation: '/ˈsəʊʃəl ˈmiːdiə ˈmɑːrkɪtɪŋ/',
      definition: 'Using social media platforms to promote products, services, or content',
      spanishTranslation: 'Marketing en redes sociales',
      exampleSentence: 'Our social media marketing strategy focuses on Instagram and LinkedIn.',
      relatedTerms: ['Engagement', 'Content', 'Community', 'Influencer'],
      context: 'channels',
      difficulty: 'essential'
    }
  ],

  // Ejercicios interactivos
  exercises: [
    {
      type: 'flashcards',
      title: 'Interactive Flashcards',
      description: 'Test your knowledge of the 30 essential terms',
      instructions: 'Click through each flashcard. Try to recall the definition before flipping the card.',
      duration: '10 min',
      difficulty: 'beginner'
    },
    {
      type: 'matching',
      title: 'Match Terms to Definitions',
      description: 'Connect each marketing term with its correct definition',
      instructions: 'Drag and drop terms to match them with their definitions. You have 5 minutes.',
      duration: '5 min',
      difficulty: 'beginner',
      pairs: [
        { term: 'SEO', definition: 'Improving website visibility in search results organically' },
        { term: 'CTR', definition: 'Percentage of people who click after seeing content' },
        { term: 'ROI', definition: 'Measure of profitability of an investment' },
        { term: 'Funnel', definition: 'Customer journey from awareness to purchase' },
        { term: 'CTA', definition: 'Prompt encouraging audience to take action' },
        { term: 'Lead', definition: 'Potential customer showing interest' },
        { term: 'Engagement', definition: 'Level of user interaction with content' },
        { term: 'Bounce Rate', definition: 'Percentage of single-page visits' },
        { term: 'Conversion', definition: 'User completing a desired action' },
        { term: 'Retargeting', definition: 'Showing ads to previous visitors' }
      ]
    },
    {
      type: 'pronunciation',
      title: 'Acronym Pronunciation Practice',
      description: 'Learn to pronounce marketing acronyms correctly',
      instructions: 'Listen to each acronym and repeat. Record yourself and compare.',
      duration: '8 min',
      difficulty: 'beginner',
      terms: ['SEO', 'SEM', 'CTR', 'CPC', 'ROI', 'KPI', 'PPC', 'CTA', 'UX', 'UI']
    },
    {
      type: 'fill-in-the-blank',
      title: 'Complete the Sentences',
      description: 'Use the correct marketing term in context',
      instructions: 'Fill in each blank with the appropriate marketing term from the word bank.',
      duration: '7 min',
      difficulty: 'intermediate',
      sentences: [
        'Our email campaign achieved a 12% ____, which is above industry average.',
        'After redesigning our landing page, our ____ rate increased from 2% to 5%.',
        'We need to identify our ____ before creating content.',
        'The campaign generated a 350% ____ in just three months.',
        'A high ____ rate might indicate poor user experience.',
        'Our most effective ____ was "Start Your Free Trial Today".',
        'We ran an ____ test on our email subject lines.',
        'Our ____ strategy includes blog posts, videos, and infographics.',
        'We spent $5,000 on ____ campaigns last month.',
        'Mapping the ____ helps us identify pain points.'
      ],
      wordBank: ['CTR', 'conversion', 'target audience', 'ROI', 'bounce', 'CTA', 'A/B', 'content marketing', 'PPC', 'customer journey']
    },
    {
      type: 'categorization',
      title: 'Categorize Marketing Terms',
      description: 'Sort terms into correct categories',
      instructions: 'Drag each term into its appropriate category: Metrics, Strategy, Technical, or Channels.',
      duration: '5 min',
      difficulty: 'intermediate',
      categories: {
        'Metrics': ['CTR', 'CPC', 'ROI', 'Conversion Rate', 'Bounce Rate', 'Impressions', 'Reach'],
        'Strategy': ['Funnel', 'Customer Journey', 'KPI', 'Target Audience', 'Lead Generation', 'Brand Awareness'],
        'Technical': ['SEO', 'SEM', 'Analytics', 'Landing Page', 'UX', 'Organic Traffic'],
        'Channels': ['Email Marketing', 'Social Media Marketing', 'PPC', 'Content Marketing']
      }
    },
    {
      type: 'quiz',
      title: 'Vocabulary Quiz',
      description: 'Test your understanding with 10 multiple-choice questions',
      instructions: 'Select the best answer for each question. You need 70% to pass.',
      duration: '10 min',
      difficulty: 'intermediate',
      passingScore: 70,
      questions: [
        {
          question: 'What does CTR stand for?',
          options: ['Click Transfer Rate', 'Click-Through Rate', 'Customer Transfer Rate', 'Content Transfer Rate'],
          correctAnswer: 1,
          explanation: 'CTR stands for Click-Through Rate, which measures the percentage of people who click on your content after seeing it.'
        },
        {
          question: 'Which metric measures the profitability of an investment?',
          options: ['CTR', 'CPC', 'ROI', 'CPA'],
          correctAnswer: 2,
          explanation: 'ROI (Return on Investment) measures profitability by comparing revenue gained to cost invested.'
        },
        {
          question: 'What is the difference between Reach and Impressions?',
          options: [
            'They are the same thing',
            'Reach counts unique users, Impressions counts total displays',
            'Impressions counts unique users, Reach counts total displays',
            'Reach is for social media, Impressions is for ads'
          ],
          correctAnswer: 1,
          explanation: 'Reach measures unique users who saw your content, while Impressions counts total times it was displayed (including repeats).'
        },
        {
          question: 'What is organic traffic?',
          options: [
            'Traffic from social media',
            'Traffic from paid ads',
            'Traffic from unpaid search results',
            'Traffic from email campaigns'
          ],
          correctAnswer: 2,
          explanation: 'Organic traffic comes from unpaid search engine results, typically achieved through SEO efforts.'
        },
        {
          question: 'What does a high bounce rate indicate?',
          options: [
            'High engagement',
            'Many conversions',
            'Visitors leaving after viewing one page',
            'Successful campaign'
          ],
          correctAnswer: 2,
          explanation: 'A high bounce rate means many visitors leave your site after viewing only one page, potentially indicating poor UX or irrelevant content.'
        },
        {
          question: 'What is retargeting?',
          options: [
            'Finding new customers',
            'Showing ads to previous visitors',
            'Changing your target audience',
            'Optimizing ad placement'
          ],
          correctAnswer: 1,
          explanation: 'Retargeting involves showing ads to people who have previously visited your website or engaged with your content.'
        },
        {
          question: 'What is a CTA?',
          options: [
            'Cost to Advertise',
            'Customer Total Amount',
            'Call-to-Action',
            'Click-Through Analysis'
          ],
          correctAnswer: 2,
          explanation: 'CTA stands for Call-to-Action, a prompt that encourages the audience to take a specific action.'
        },
        {
          question: 'Which formula represents conversion rate?',
          options: [
            '(Clicks / Impressions) × 100',
            '(Conversions / Total Visitors) × 100',
            '(Revenue - Cost) / Cost × 100',
            '(Leads / Impressions) × 100'
          ],
          correctAnswer: 1,
          explanation: 'Conversion Rate = (Conversions / Total Visitors) × 100. It measures the percentage of visitors who complete a desired action.'
        },
        {
          question: 'What is the marketing funnel?',
          options: [
            'A tool for email collection',
            'The customer journey from awareness to purchase',
            'A type of social media ad',
            'A website design pattern'
          ],
          correctAnswer: 1,
          explanation: 'The marketing funnel represents the customer journey through stages from initial awareness to final purchase.'
        },
        {
          question: 'What does A/B testing involve?',
          options: [
            'Testing two different products',
            'Comparing performance of two content versions',
            'Testing on two different platforms',
            'Running two campaigns simultaneously'
          ],
          correctAnswer: 1,
          explanation: 'A/B testing compares two versions of content (A and B) to determine which performs better.'
        }
      ]
    }
  ],

  // Tarea del mundo real
  realWorldTask: {
    title: 'Real World Task: Analyze a Google Analytics Report',
    description: 'Apply your new vocabulary by analyzing an actual marketing report',
    instructions: `
**Your Task:**
You work for a digital marketing agency. A client has shared their Google Analytics report for the past month. Your job is to analyze the report and prepare a summary email for your team.

**The Report Shows:**
- 50,000 Sessions
- 35,000 Users (Reach)
- 125,000 Pageviews (Impressions)
- 65% Bounce Rate
- 2.5 Pages per Session
- 2:30 Average Session Duration
- 750 Conversions (goal completions)
- Top Traffic Sources: 45% Organic Search, 30% Direct, 15% Paid Search, 10% Social Media

**Your Deliverables:**
1. Write a 200-word email to your team explaining the key metrics
2. Use at least 10 vocabulary terms from this lesson
3. Identify 2-3 areas of concern (problems)
4. Suggest 2-3 optimization opportunities

**Success Criteria:**
✅ Correct use of marketing terminology
✅ Professional email format
✅ Clear data interpretation
✅ Actionable insights
✅ Proper spelling and grammar

**Time Required:** 30-40 minutes

**Submission:** Type your email in the text box below or upload a document.
    `,
    learningOutcome: 'You will practice using marketing vocabulary in a professional context, similar to what you would do in a real marketing role.',
    estimatedTime: '30-40 min',
    difficulty: 'intermediate',
    rubric: {
      'Vocabulary Usage (30%)': 'Uses 10+ terms correctly and naturally',
      'Data Interpretation (25%)': 'Accurately analyzes metrics and identifies insights',
      'Professional Communication (25%)': 'Clear, concise, and professional tone',
      'Actionable Recommendations (20%)': 'Provides specific, realistic suggestions'
    }
  },

  // Recursos adicionales
  additionalResources: [
    {
      type: 'video',
      title: 'Digital Marketing Terminology Explained',
      description: 'Visual guide to understanding key marketing terms',
      duration: '8 min',
      url: 'https://www.youtube.com/watch?v=example1',
      thumbnail: '/resources/video-thumbnails/marketing-terms.jpg'
    },
    {
      type: 'article',
      title: 'The Complete Glossary of Digital Marketing Terms',
      description: 'HubSpot\'s comprehensive guide (reference material)',
      readingTime: '15 min',
      url: 'https://blog.hubspot.com/marketing/digital-marketing-glossary',
      source: 'HubSpot'
    },
    {
      type: 'infographic',
      title: 'Marketing Metrics Cheat Sheet',
      description: 'Visual reference for key metrics and formulas',
      url: '/resources/infographics/marketing-metrics-cheatsheet.pdf',
      downloadable: true
    },
    {
      type: 'audio',
      title: 'Pronunciation Guide: Marketing Acronyms',
      description: 'Native speaker pronunciation of 20 common acronyms',
      duration: '5 min',
      url: '/resources/audio/marketing-acronyms-pronunciation.mp3',
      downloadable: true
    },
    {
      type: 'template',
      title: 'Marketing Report Email Template',
      description: 'Professional template for reporting marketing metrics',
      url: '/resources/templates/marketing-report-email.docx',
      downloadable: true
    }
  ],

  // Consejos de estudio
  studyTips: [
    'Create physical flashcards for the terms you find most difficult',
    'Try using 5 new terms in a real work email this week',
    'Listen to marketing podcasts to hear terms used in context',
    'Follow marketing blogs (HubSpot, Moz, Neil Patel) to see terminology in action',
    'Practice explaining one metric per day to a colleague or friend',
    'Set up Google Alerts for key marketing terms to get real-world examples',
    'Join English-speaking marketing communities on LinkedIn or Reddit'
  ],

  // Próximos pasos
  nextSteps: {
    nextLesson: {
      id: 'w1l2',
      title: 'Reading Marketing Reports',
      description: 'Learn to read and interpret professional marketing reports',
      unlockCondition: 'Complete this lesson and achieve 70% on the vocabulary quiz'
    },
    recommendedPractice: [
      'Review flashcards for 5 minutes daily',
      'Read one marketing article in English this week',
      'Complete the Real World Task before moving to Lesson 2'
    ],
    communityChallenge: 'Share your Real World Task result in the course forum and give feedback to 2 peers'
  },

  // Metadata
  metadata: {
    createdDate: '2026-01-13',
    lastUpdated: '2026-01-13',
    version: '1.0',
    author: 'Focus English Course Team',
    difficulty: 'B2',
    estimatedCompletionTime: '45-60 min',
    prerequisite: 'None - This is Lesson 1',
    tags: ['vocabulary', 'digital marketing', 'B2', 'fundamentals', 'metrics', 'terminology']
  }
};

export default lesson1Data;
