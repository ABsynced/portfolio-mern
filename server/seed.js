require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const sampleProjects = [
  {
    title: 'Electric Vehicle Population Analysis',
    description:
      'Full workflow analysis on the Electric Vehicle Population Dataset: data cleaning, EDA, visualizations, and automated reporting into PowerPoint.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'PowerPoint', 'Jupyter Notebook'],
    liveUrl: 'https://melika-niaz.vercel.app/#',
    repoUrl: 'https://github.com/melikaniaz/ev-population-analysis',
    featured: true,
    order: 1,
  },
  {
    title: 'Air Travel Dashboard',
    description:
      'Identified airlines with the highest number of flights, compared average ticket prices, visualized market share, and highlighted flight networks.',
    tags: ['MySQL', 'Database queries and views', 'Power BI Desktop', 'Dashboard and visualization'],
    liveUrl: 'https://melika-niaz.vercel.app/#',
    repoUrl: 'https://github.com/melikaniaz/-Air-Travel-Dashboard',
    featured: true,
    order: 2,
  },
  {
    title: 'AdventureWorks Sales & Customer Insights',
    description: 'Complete Business Intelligence pipeline on the AdventureWorks sample database.',
    tags: ['SQL', 'MySQL', 'Power BI', 'Data Visualization', 'ETL', 'KPIs', 'DAX'],
    liveUrl: 'https://melika-niaz.vercel.app/#',
    repoUrl: 'https://github.com/melikaniaz/AdventureWorks-Sales-Insights',
    featured: true,
    order: 3,
  },
  {
    title: 'BMW Worldwide Sales (2010–2024)',
    description:
      'Power BI dashboard analyzing global BMW KPIs: total revenue, sales volume, electric growth, regional sales trends, and fuel type insights.',
    tags: ['Power BI', 'Data Visualization', 'KPIs', 'DAX', 'Business Insights'],
    liveUrl: 'https://melika-niaz.vercel.app/#',
    repoUrl: 'https://github.com/melikaniaz/BMW-Worldwide-Sales-2010-2024-',
    featured: false,
    order: 4,
  },
  {
    title: 'Pharma ATC Portfolio & KPI Dashboard',
    description:
      'Power BI dashboard on a 6-year pharmaceutical sales dataset (2014–2019, ATC level), tracking total sales, YoY growth, portfolio coverage, and ATC market share.',
    tags: ['Power BI', 'KPIs', 'DAX', 'Pharma Sales', 'ATC Classification'],
    liveUrl: 'https://melika-niaz.vercel.app/#',
    repoUrl: 'https://github.com/melikaniaz/Pharma-ATC-Portfolio-KPI-Dashboard',
    featured: false,
    order: 5,
  },
  {
    title: 'Retail Sales Dashboard',
    description: 'Multi-page Power BI dashboard for retail sales performance and trends.',
    tags: ['Power BI', 'DAX', 'Power Query'],
    liveUrl: 'https://melika-niaz.vercel.app/#',
    repoUrl: 'https://github.com/melikaniaz/powerbi-retail-dashboard',
    featured: false,
    order: 6,
  },
];

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected. Seeding...');
    await Project.deleteMany({});
    await Project.insertMany(sampleProjects);
    console.log(`Seeded ${sampleProjects.length} projects.`);
  } catch (err) {
    console.error('Seed error:', err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

run();
