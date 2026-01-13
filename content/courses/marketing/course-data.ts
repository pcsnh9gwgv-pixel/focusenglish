// Programa completo del curso de Marketing y Comunicación B2
// 12 semanas, 4 lecciones por semana = 48 lecciones totales

export const marketingCourseData = {
  id: 'marketing-b2',
  title: 'Marketing y Comunicación en Inglés - Nivel B2',
  description: 'Domina el inglés profesional para marketing digital, presentaciones y comunicación corporativa',
  level: 'B2',
  duration: '12 semanas',
  totalLessons: 48,
  hoursPerWeek: '4-6 horas',
  
  weeks: [
    {
      week: 1,
      title: 'Marketing Fundamentals & Digital Terminology',
      description: 'Vocabulario esencial de marketing digital y fundamentos',
      lessons: [
        {
          id: 'w1l1',
          title: 'Digital Marketing Vocabulary Essentials',
          duration: '45 min',
          type: 'vocabulary',
          topics: [
            'SEO, SEM, CTR, CPC, ROI',
            'Conversion rate, bounce rate, engagement',
            'Lead generation, funnel, customer journey'
          ],
          activities: [
            'Flashcards interactivas con términos',
            'Matching exercise: término-definición',
            'Audio: Pronunciación correcta de acrónimos'
          ],
          realWorldTask: 'Analiza un informe de Google Analytics en inglés'
        },
        {
          id: 'w1l2',
          title: 'Reading Marketing Reports',
          duration: '60 min',
          type: 'reading',
          topics: [
            'Estructura de reportes de marketing',
            'Key performance indicators (KPIs)',
            'Data interpretation vocabulary'
          ],
          activities: [
            'Lectura: Real marketing performance report',
            'Comprehension questions',
            'Identificar métricas clave'
          ],
          realWorldTask: 'Lee 3 reportes reales y extrae insights principales'
        },
        {
          id: 'w1l3',
          title: 'Email Marketing Language',
          duration: '50 min',
          type: 'writing',
          topics: [
            'Subject lines que generan apertura',
            'Call-to-action phrases',
            'Email structure y tone'
          ],
          activities: [
            'Analizar 10 subject lines exitosos',
            'Escribir 5 CTAs efectivos',
            'Peer review de emails'
          ],
          realWorldTask: 'Escribe un email de campaña promocional completo'
        },
        {
          id: 'w1l4',
          title: 'Speaking: Marketing Meetings Basics',
          duration: '45 min',
          type: 'speaking',
          topics: [
            'Presenting ideas in meetings',
            'Agreeing and disagreeing professionally',
            'Making suggestions'
          ],
          activities: [
            'Role-play: Marketing team meeting',
            'Audio practice: Common phrases',
            'Video: Analizar reunión real'
          ],
          realWorldTask: 'Graba un pitch de 2 minutos presentando una idea'
        }
      ]
    },
    {
      week: 2,
      title: 'Social Media Marketing Language',
      description: 'Inglés para redes sociales, community management y contenido viral',
      lessons: [
        {
          id: 'w2l1',
          title: 'Social Media Platforms Vocabulary',
          duration: '45 min',
          type: 'vocabulary',
          topics: [
            'Platform-specific terms (Instagram, LinkedIn, Twitter, TikTok)',
            'Engagement metrics: likes, shares, impressions, reach',
            'Content types: reels, stories, posts, threads'
          ],
          activities: [
            'Identificar términos en posts reales',
            'Quiz interactivo de plataformas',
            'Listening: Social media managers hablando'
          ],
          realWorldTask: 'Audita una cuenta de marca en inglés'
        },
        {
          id: 'w2l2',
          title: 'Writing Compelling Social Copy',
          duration: '60 min',
          type: 'writing',
          topics: [
            'Hooks and attention-grabbers',
            'Hashtag strategy language',
            'Brand voice consistency'
          ],
          activities: [
            'Analizar 20 posts virales',
            'Escribir captions para diferentes plataformas',
            'A/B testing copy exercise'
          ],
          realWorldTask: 'Crea un calendario de contenido semanal en inglés'
        },
        {
          id: 'w2l3',
          title: 'Community Management Responses',
          duration: '50 min',
          type: 'writing',
          topics: [
            'Responding to comments professionally',
            'Handling complaints in English',
            'Crisis communication basics'
          ],
          activities: [
            'Casos reales: responder 10 comentarios',
            'Tone analysis exercises',
            'Role-play: Crisis management'
          ],
          realWorldTask: 'Maneja una conversación difícil con un cliente (simulación)'
        },
        {
          id: 'w2l4',
          title: 'Influencer Collaboration Vocabulary',
          duration: '45 min',
          type: 'speaking',
          topics: [
            'Partnership and collaboration terms',
            'Negotiation language',
            'Contract basics for collaborations'
          ],
          activities: [
            'Listening: Influencer pitch real',
            'Role-play: Negociación con influencer',
            'Email draft: Collaboration proposal'
          ],
          realWorldTask: 'Escribe un outreach email a un influencer'
        }
      ]
    },
    {
      week: 3,
      title: 'Content Marketing & Copywriting',
      description: 'Escribir contenido persuasivo, blogs y storytelling en inglés',
      lessons: [
        {
          id: 'w3l1',
          title: 'Copywriting Formulas (AIDA, PAS, FAB)',
          duration: '60 min',
          type: 'writing',
          topics: [
            'AIDA: Attention, Interest, Desire, Action',
            'PAS: Problem, Agitate, Solution',
            'Features vs Benefits language'
          ],
          activities: [
            'Identificar fórmulas en ads reales',
            'Reescribir textos usando diferentes fórmulas',
            'Create tu propio ad copy'
          ],
          realWorldTask: 'Escribe 3 versiones de un ad usando AIDA, PAS y FAB'
        },
        {
          id: 'w3l2',
          title: 'Blog Writing for SEO',
          duration: '60 min',
          type: 'writing',
          topics: [
            'SEO keywords integration',
            'Meta descriptions y title tags',
            'Estructura de blog post optimizada'
          ],
          activities: [
            'Keyword research exercise',
            'Analizar blog posts de alto ranking',
            'Escribir introducción y conclusión'
          ],
          realWorldTask: 'Escribe un blog post de 500 palabras optimizado para SEO'
        },
        {
          id: 'w3l3',
          title: 'Storytelling for Brands',
          duration: '50 min',
          type: 'writing',
          topics: [
            'Brand narrative structure',
            'Emotional triggers in English',
            'Case study presentation'
          ],
          activities: [
            'Analizar storytelling de marcas exitosas',
            'Story mapping exercise',
            'Escribir origin story de marca ficticia'
          ],
          realWorldTask: 'Crea una case study de 300 palabras'
        },
        {
          id: 'w3l4',
          title: 'Video Scripts & Visual Content',
          duration: '45 min',
          type: 'writing',
          topics: [
            'Video script structure',
            'Visual description vocabulary',
            'Storyboard terminology'
          ],
          activities: [
            'Analizar scripts de ads exitosos',
            'Escribir script de 30 segundos',
            'Peer review session'
          ],
          realWorldTask: 'Escribe un guión para un video promocional de 60 segundos'
        }
      ]
    },
    {
      week: 4,
      title: 'Presentations & Pitch Decks',
      description: 'Presentar campañas, hacer pitches y hablar en público',
      lessons: [
        {
          id: 'w4l1',
          title: 'Presentation Structure & Opening',
          duration: '50 min',
          type: 'speaking',
          topics: [
            'Powerful opening lines',
            'Agenda setting language',
            'Engaging your audience'
          ],
          activities: [
            'Analizar TED Talks de marketing',
            'Practica 5 openings diferentes',
            'Grabarte y autoevaluación'
          ],
          realWorldTask: 'Graba tu introducción perfecta de 2 minutos'
        },
        {
          id: 'w4l2',
          title: 'Presenting Data & Insights',
          duration: '60 min',
          type: 'speaking',
          topics: [
            'Describing charts and graphs',
            'Trends and patterns vocabulary',
            'Highlighting key findings'
          ],
          activities: [
            'Describe 10 gráficos diferentes',
            'Listening: Data presentations',
            'Practice with real marketing data'
          ],
          realWorldTask: 'Presenta 5 slides con datos de campaña'
        },
        {
          id: 'w4l3',
          title: 'Storytelling in Presentations',
          duration: '50 min',
          type: 'speaking',
          topics: [
            'Narrative arc in business presentations',
            'Transitions between sections',
            'Compelling conclusions'
          ],
          activities: [
            'Analizar pitch decks famosos',
            'Reordenar presentación para mejor flow',
            'Role-play: Present to stakeholders'
          ],
          realWorldTask: 'Crea y presenta un pitch deck de 10 slides'
        },
        {
          id: 'w4l4',
          title: 'Q&A and Objection Handling',
          duration: '45 min',
          type: 'speaking',
          topics: [
            'Anticipating questions',
            'Buying time phrases',
            'Turning objections into opportunities'
          ],
          activities: [
            'Practice Q&A session',
            'Common objections role-play',
            'Improvisation exercises'
          ],
          realWorldTask: 'Graba una sesión de Q&A de 5 minutos'
        }
      ]
    },
    {
      week: 5,
      title: 'Email Marketing Campaigns',
      description: 'Estrategia de email marketing, automation y nurturing',
      lessons: [
        {
          id: 'w5l1',
          title: 'Welcome Series & Onboarding Emails',
          duration: '60 min',
          type: 'writing',
          topics: [
            'Welcome email best practices',
            'Onboarding sequence structure',
            'Setting expectations language'
          ],
          activities: [
            'Analizar 10 welcome series',
            'Escribir serie de 3 emails',
            'A/B testing subject lines'
          ],
          realWorldTask: 'Crea una welcome series completa de 5 emails'
        },
        {
          id: 'w5l2',
          title: 'Promotional & Sales Emails',
          duration: '50 min',
          type: 'writing',
          topics: [
            'Urgency and scarcity language',
            'Discount and offer vocabulary',
            'FOMO (Fear of Missing Out) triggers'
          ],
          activities: [
            'Rewrite promotional emails',
            'Create urgency without being pushy',
            'Test different CTAs'
          ],
          realWorldTask: 'Escribe 3 promotional emails para una campaña'
        },
        {
          id: 'w5l3',
          title: 'Re-engagement & Win-back Campaigns',
          duration: '45 min',
          type: 'writing',
          topics: [
            'Identifying inactive subscribers',
            'Win-back messaging strategies',
            'Survey and feedback requests'
          ],
          activities: [
            'Analizar win-back campaigns exitosas',
            'Escribir email de reactivación',
            'Create incentive offers'
          ],
          realWorldTask: 'Diseña una campaña de reactivación de 3 emails'
        },
        {
          id: 'w5l4',
          title: 'Email Automation Workflows',
          duration: '50 min',
          type: 'strategy',
          topics: [
            'Trigger-based emails vocabulary',
            'Customer lifecycle stages',
            'Segmentation language'
          ],
          activities: [
            'Map customer journey',
            'Design automation flowchart',
            'Write trigger email series'
          ],
          realWorldTask: 'Crea un workflow de automation de 7 emails'
        }
      ]
    },
    {
      week: 6,
      title: 'SEO & Content Strategy',
      description: 'Search Engine Optimization y estrategia de contenido',
      lessons: [
        {
          id: 'w6l1',
          title: 'Keyword Research & Analysis',
          duration: '60 min',
          type: 'strategy',
          topics: [
            'Long-tail vs short-tail keywords',
            'Search intent vocabulary',
            'Competitor analysis language'
          ],
          activities: [
            'Conduct keyword research',
            'Analyze SERPs (Search Engine Results Pages)',
            'Create keyword strategy document'
          ],
          realWorldTask: 'Investiga y crea una lista de 50 keywords objetivo'
        },
        {
          id: 'w6l2',
          title: 'On-Page SEO Writing',
          duration: '60 min',
          type: 'writing',
          topics: [
            'Title tags and meta descriptions',
            'Header hierarchy (H1, H2, H3)',
            'Internal linking language'
          ],
          activities: [
            'Optimize existing content',
            'Write SEO-friendly product descriptions',
            'Create meta description variations'
          ],
          realWorldTask: 'Optimiza 5 páginas web para SEO'
        },
        {
          id: 'w6l3',
          title: 'Content Calendar Planning',
          duration: '50 min',
          type: 'strategy',
          topics: [
            'Editorial calendar terminology',
            'Content pillars and themes',
            'Distribution channel language'
          ],
          activities: [
            'Build a monthly content calendar',
            'Identify content gaps',
            'Plan cross-channel campaigns'
          ],
          realWorldTask: 'Crea un calendario de contenido trimestral'
        },
        {
          id: 'w6l4',
          title: 'Link Building & Outreach',
          duration: '45 min',
          type: 'writing',
          topics: [
            'Backlink terminology',
            'Guest post pitches',
            'Partnership outreach emails'
          ],
          activities: [
            'Write outreach templates',
            'Analyze backlink profiles',
            'Create guest post proposals'
          ],
          realWorldTask: 'Escribe 10 outreach emails personalizados'
        }
      ]
    },
    {
      week: 7,
      title: 'Paid Advertising (PPC & Social Ads)',
      description: 'Google Ads, Facebook Ads y estrategia de publicidad paga',
      lessons: [
        {
          id: 'w7l1',
          title: 'Google Ads Fundamentals',
          duration: '60 min',
          type: 'strategy',
          topics: [
            'Campaign structure vocabulary',
            'Ad copy best practices',
            'Quality Score factors'
          ],
          activities: [
            'Analyze successful ad campaigns',
            'Write responsive search ads',
            'Calculate ROI and ROAS'
          ],
          realWorldTask: 'Crea una campaña completa de Google Ads (estructura + copy)'
        },
        {
          id: 'w7l2',
          title: 'Facebook & Instagram Ads',
          duration: '60 min',
          type: 'writing',
          topics: [
            'Ad formats and objectives',
            'Audience targeting language',
            'Creative best practices'
          ],
          activities: [
            'Write ad copy for different objectives',
            'Create ad variations',
            'Analyze ad performance metrics'
          ],
          realWorldTask: 'Diseña 5 ads para diferentes objetivos de campaña'
        },
        {
          id: 'w7l3',
          title: 'Landing Page Optimization',
          duration: '50 min',
          type: 'writing',
          topics: [
            'Above the fold content',
            'Conversion-focused copy',
            'Social proof language'
          ],
          activities: [
            'Critique landing pages',
            'Rewrite hero sections',
            'A/B test headlines'
          ],
          realWorldTask: 'Escribe el copy completo para una landing page'
        },
        {
          id: 'w7l4',
          title: 'Retargeting & Remarketing',
          duration: '45 min',
          type: 'strategy',
          topics: [
            'Retargeting terminology',
            'Audience segmentation',
            'Sequential messaging'
          ],
          activities: [
            'Plan retargeting funnel',
            'Write retargeting ad sequence',
            'Calculate customer lifetime value'
          ],
          realWorldTask: 'Diseña una estrategia de retargeting de 3 pasos'
        }
      ]
    },
    {
      week: 8,
      title: 'Analytics & Reporting',
      description: 'Interpretar datos, crear reportes y presentar resultados',
      lessons: [
        {
          id: 'w8l1',
          title: 'Google Analytics Navigation',
          duration: '60 min',
          type: 'reading',
          topics: [
            'Analytics dashboard vocabulary',
            'Traffic sources terminology',
            'Conversion tracking language'
          ],
          activities: [
            'Navigate real GA4 interface',
            'Extract key metrics',
            'Interpret user behavior data'
          ],
          realWorldTask: 'Analiza una cuenta de GA4 y presenta 10 insights'
        },
        {
          id: 'w8l2',
          title: 'Creating Marketing Reports',
          duration: '60 min',
          type: 'writing',
          topics: [
            'Executive summary writing',
            'Data visualization language',
            'Recommendations and next steps'
          ],
          activities: [
            'Analyze report templates',
            'Write executive summaries',
            'Present findings clearly'
          ],
          realWorldTask: 'Crea un reporte mensual completo de marketing'
        },
        {
          id: 'w8l3',
          title: 'KPI Setting & Goal Tracking',
          duration: '50 min',
          type: 'strategy',
          topics: [
            'SMART goals terminology',
            'North Star Metric language',
            'Leading vs lagging indicators'
          ],
          activities: [
            'Define KPIs for different channels',
            'Set quarterly objectives',
            'Track progress language'
          ],
          realWorldTask: 'Define KPIs para una campaña completa'
        },
        {
          id: 'w8l4',
          title: 'Presenting Results to Stakeholders',
          duration: '45 min',
          type: 'speaking',
          topics: [
            'Storytelling with data',
            'Addressing concerns professionally',
            'Next steps and recommendations'
          ],
          activities: [
            'Practice data presentation',
            'Role-play: Present bad news',
            'Q&A session simulation'
          ],
          realWorldTask: 'Graba una presentación de resultados de 5 minutos'
        }
      ]
    },
    {
      week: 9,
      title: 'Brand Management & Strategy',
      description: 'Branding, positioning y gestión de marca en inglés',
      lessons: [
        {
          id: 'w9l1',
          title: 'Brand Voice & Tone Guidelines',
          duration: '60 min',
          type: 'writing',
          topics: [
            'Brand personality vocabulary',
            'Tone of voice framework',
            'Consistency across channels'
          ],
          activities: [
            'Analyze brand guidelines',
            'Create brand voice chart',
            'Write in different brand voices'
          ],
          realWorldTask: 'Desarrolla brand voice guidelines de 1 página'
        },
        {
          id: 'w9l2',
          title: 'Positioning & Messaging',
          duration: '50 min',
          type: 'strategy',
          topics: [
            'Unique Value Proposition (UVP)',
            'Competitive positioning language',
            'Brand messaging framework'
          ],
          activities: [
            'Craft UVP statements',
            'Positioning map exercise',
            'Write elevator pitch'
          ],
          realWorldTask: 'Crea un positioning statement completo'
        },
        {
          id: 'w9l3',
          title: 'Crisis Communication',
          duration: '45 min',
          type: 'writing',
          topics: [
            'Apologizing professionally',
            'Transparency and authenticity',
            'Recovery action plans'
          ],
          activities: [
            'Analyze crisis response examples',
            'Write crisis statement',
            'Role-play: Press conference'
          ],
          realWorldTask: 'Maneja una crisis simulada (escribe respuestas completas)'
        },
        {
          id: 'w9l4',
          title: 'Brand Partnerships & Collaborations',
          duration: '50 min',
          type: 'speaking',
          topics: [
            'Partnership proposal language',
            'Co-branding terminology',
            'Negotiation and terms'
          ],
          activities: [
            'Draft partnership proposal',
            'Role-play: Partnership meeting',
            'Contract terminology review'
          ],
          realWorldTask: 'Escribe una propuesta de partnership de 2 páginas'
        }
      ]
    },
    {
      week: 10,
      title: 'Customer Experience & Retention',
      description: 'CX, loyalty programs y customer success en inglés',
      lessons: [
        {
          id: 'w10l1',
          title: 'Customer Journey Mapping',
          duration: '60 min',
          type: 'strategy',
          topics: [
            'Touchpoints and moments of truth',
            'Pain points and opportunities',
            'Journey mapping vocabulary'
          ],
          activities: [
            'Create customer journey map',
            'Identify friction points',
            'Propose improvements'
          ],
          realWorldTask: 'Mapea el customer journey de principio a fin'
        },
        {
          id: 'w10l2',
          title: 'Loyalty Program Communication',
          duration: '50 min',
          type: 'writing',
          topics: [
            'Rewards and incentives language',
            'Tier systems vocabulary',
            'Exclusive benefits messaging'
          ],
          activities: [
            'Analyze loyalty programs',
            'Write program announcement',
            'Create tier benefit descriptions'
          ],
          realWorldTask: 'Diseña la comunicación de un programa de lealtad'
        },
        {
          id: 'w10l3',
          title: 'Customer Feedback & Surveys',
          duration: '45 min',
          type: 'writing',
          topics: [
            'Survey question design',
            'NPS (Net Promoter Score) language',
            'Feedback response templates'
          ],
          activities: [
            'Create customer survey',
            'Write follow-up emails',
            'Analyze survey results'
          ],
          realWorldTask: 'Crea una encuesta de satisfacción completa'
        },
        {
          id: 'w10l4',
          title: 'Churn Prevention Strategies',
          duration: '50 min',
          type: 'strategy',
          topics: [
            'Retention metrics vocabulary',
            'At-risk customer identification',
            'Win-back campaign language'
          ],
          activities: [
            'Develop retention strategy',
            'Write churn prevention emails',
            'Calculate churn rate'
          ],
          realWorldTask: 'Diseña una estrategia anti-churn de 5 puntos'
        }
      ]
    },
    {
      week: 11,
      title: 'Marketing Automation & Tech Stack',
      description: 'Herramientas de marketing, automation y integrations',
      lessons: [
        {
          id: 'w11l1',
          title: 'Marketing Automation Platforms',
          duration: '60 min',
          type: 'vocabulary',
          topics: [
            'CRM and MAP terminology',
            'Workflow and trigger language',
            'Integration vocabulary'
          ],
          activities: [
            'Explore automation platforms',
            'Build sample workflow',
            'Integration terminology quiz'
          ],
          realWorldTask: 'Documenta un proceso de automation end-to-end'
        },
        {
          id: 'w11l2',
          title: 'Tech Stack Documentation',
          duration: '50 min',
          type: 'writing',
          topics: [
            'Tools and platforms description',
            'Process documentation language',
            'SOP (Standard Operating Procedures)'
          ],
          activities: [
            'Document marketing process',
            'Create tool comparison chart',
            'Write SOP for common tasks'
          ],
          realWorldTask: 'Escribe una guía de uso de herramientas (3 páginas)'
        },
        {
          id: 'w11l3',
          title: 'API Integrations & Data Flows',
          duration: '45 min',
          type: 'strategy',
          topics: [
            'Integration terminology',
            'Data sync vocabulary',
            'Troubleshooting language'
          ],
          activities: [
            'Map data flow diagrams',
            'Identify integration needs',
            'Write technical requirements'
          ],
          realWorldTask: 'Crea un documento de integraciones necesarias'
        },
        {
          id: 'w11l4',
          title: 'Marketing Stack Presentation',
          duration: '50 min',
          type: 'speaking',
          topics: [
            'Justifying tool investments',
            'ROI of marketing technology',
            'Implementation timelines'
          ],
          activities: [
            'Present tool recommendation',
            'Create business case',
            'Role-play: Budget approval meeting'
          ],
          realWorldTask: 'Graba un pitch de 5 minutos para aprobar una herramienta'
        }
      ]
    },
    {
      week: 12,
      title: 'Final Project: Complete Marketing Campaign',
      description: 'Proyecto integrador: Crea y presenta una campaña completa',
      lessons: [
        {
          id: 'w12l1',
          title: 'Campaign Strategy Development',
          duration: '90 min',
          type: 'project',
          topics: [
            'Campaign brief creation',
            'Target audience definition',
            'Channel strategy and budget allocation'
          ],
          activities: [
            'Define campaign objectives',
            'Research target audience',
            'Create campaign timeline'
          ],
          realWorldTask: 'Desarrolla la estrategia completa de campaña (5 páginas)'
        },
        {
          id: 'w12l2',
          title: 'Content Creation & Copywriting',
          duration: '90 min',
          type: 'project',
          topics: [
            'Multi-channel content creation',
            'Consistent messaging',
            'Creative asset descriptions'
          ],
          activities: [
            'Write all campaign copy',
            'Create content calendar',
            'Design ad mockups descriptions'
          ],
          realWorldTask: 'Produce todo el contenido de la campaña (mínimo 10 piezas)'
        },
        {
          id: 'w12l3',
          title: 'Campaign Presentation Deck',
          duration: '90 min',
          type: 'project',
          topics: [
            'Deck structure and design',
            'Storytelling narrative',
            'Anticipated results and KPIs'
          ],
          activities: [
            'Create presentation slides',
            'Write speaker notes',
            'Practice presentation'
          ],
          realWorldTask: 'Crea un pitch deck profesional de 15-20 slides'
        },
        {
          id: 'w12l4',
          title: 'Final Presentation & Graduation',
          duration: '60 min',
          type: 'project',
          topics: [
            'Live presentation skills',
            'Q&A handling',
            'Professional feedback'
          ],
          activities: [
            'Present campaign to peers/instructor',
            'Receive constructive feedback',
            'Self-evaluation and reflection'
          ],
          realWorldTask: 'Presenta tu campaña completa + Q&A (15-20 minutos)'
        }
      ]
    }
  ],
  
  // Recursos adicionales
  resources: {
    vocabulary: '500+ términos especializados',
    templates: '30+ plantillas descargables',
    realExamples: '100+ ejemplos de campañas reales',
    videos: '50+ videos explicativos',
    exercises: '200+ ejercicios prácticos'
  },
  
  // Evaluación
  assessment: {
    weeklyQuizzes: true,
    midtermProject: 'Week 6: Mini-campaign presentation',
    finalProject: 'Week 12: Complete marketing campaign',
    participation: 'Active participation in discussions',
    passingGrade: '70%'
  }
};
