-- ============================================
-- Solutions Dummy Data SQL Script
-- ============================================
-- This script creates the solutions table and inserts dummy data
-- Run this in Supabase SQL Editor

-- First, create the solutions table if it doesn't exist
CREATE TABLE IF NOT EXISTS solutions (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  category TEXT NOT NULL,
  display_order INTEGER,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_solutions_category ON solutions(category);
CREATE INDEX IF NOT EXISTS idx_solutions_published ON solutions(is_published);
CREATE INDEX IF NOT EXISTS idx_solutions_display_order ON solutions(display_order);

-- Clear existing data (optional - comment out if you want to keep existing data)
-- TRUNCATE TABLE solutions RESTART IDENTITY CASCADE;

-- ============================================
-- Insert Dummy Data
-- ============================================

-- HealthCare Solutions
INSERT INTO solutions (title, excerpt, content, image_url, category, display_order, is_published) VALUES
(
  'Conversational AI in Health',
  'Revolutionizing patient care with intelligent chatbots and virtual health assistants that provide 24/7 support and medical guidance.',
  '<h2>Transforming Patient Engagement</h2>
  <p>Our Conversational AI solution for healthcare enables seamless patient interactions through intelligent chatbots and virtual assistants. These AI-powered systems can handle appointment scheduling, symptom checking, medication reminders, and provide instant answers to common health questions.</p>

  <h3>Key Features</h3>
  <ul>
    <li>24/7 patient support and triage</li>
    <li>Natural language understanding for medical queries</li>
    <li>Integration with Electronic Health Records (EHR)</li>
    <li>Multi-language support for diverse patient populations</li>
    <li>HIPAA-compliant data handling</li>
  </ul>

  <h3>Benefits</h3>
  <p>Healthcare providers using our Conversational AI have seen a 60% reduction in routine administrative calls, allowing medical staff to focus on critical care. Patient satisfaction scores have improved by 45% due to instant response times and personalized care recommendations.</p>

  <h3>Use Cases</h3>
  <ul>
    <li>Virtual health assistants for telehealth platforms</li>
    <li>Post-discharge patient monitoring and follow-up</li>
    <li>Mental health support chatbots</li>
    <li>Prescription refill automation</li>
  </ul>',
  'https://placehold.co/1200x600/4F46E5/FFFFFF?text=Conversational+AI+Health',
  'HealthCare',
  1,
  true
),
(
  'Predictive Diagnostics',
  'Advanced machine learning algorithms that analyze medical data to predict diseases early and improve patient outcomes.',
  '<h2>Early Detection Saves Lives</h2>
  <p>Our Predictive Diagnostics platform leverages cutting-edge machine learning to analyze patient data, medical images, and genetic information to identify disease patterns before symptoms appear. This enables proactive treatment and significantly improves patient outcomes.</p>

  <h3>Technology Stack</h3>
  <ul>
    <li>Deep learning models trained on millions of medical records</li>
    <li>Computer vision for radiology and pathology image analysis</li>
    <li>Genomic sequencing data interpretation</li>
    <li>Real-time risk assessment algorithms</li>
  </ul>

  <h3>Clinical Applications</h3>
  <p>Successfully deployed in cancer screening programs, cardiovascular risk assessment, and diabetes prediction. Our models have achieved 92% accuracy in early-stage cancer detection and helped reduce hospital readmissions by 35%.</p>

  <h3>Integration</h3>
  <p>Seamlessly integrates with existing hospital information systems, PACS (Picture Archiving and Communication System), and laboratory management systems.</p>',
  'https://placehold.co/1200x600/10B981/FFFFFF?text=Predictive+Diagnostics',
  'HealthCare',
  2,
  true
),
(
  'Robotic Process Automation',
  'Streamline healthcare operations with intelligent automation for billing, claims processing, and administrative tasks.',
  '<h2>Automating Healthcare Administration</h2>
  <p>Transform your healthcare operations with our RPA solution designed specifically for medical facilities. Automate repetitive tasks, reduce errors, and free up staff to focus on patient care.</p>

  <h3>Automated Processes</h3>
  <ul>
    <li>Insurance claims processing and verification</li>
    <li>Medical billing and coding</li>
    <li>Patient registration and data entry</li>
    <li>Appointment scheduling and reminders</li>
    <li>Inventory management for medical supplies</li>
  </ul>

  <h3>ROI Impact</h3>
  <p>Healthcare organizations implementing our RPA solution report:</p>
  <ul>
    <li>70% reduction in claims processing time</li>
    <li>85% decrease in billing errors</li>
    <li>$500K+ annual cost savings per facility</li>
    <li>Staff productivity increase of 40%</li>
  </ul>

  <h3>Compliance & Security</h3>
  <p>Built with healthcare compliance in mind, our RPA bots are fully HIPAA compliant and include audit trails for all automated processes.</p>',
  'https://placehold.co/1200x600/F59E0B/FFFFFF?text=Healthcare+RPA',
  'HealthCare',
  3,
  true
);

-- Education Solutions
INSERT INTO solutions (title, excerpt, content, image_url, category, display_order, is_published) VALUES
(
  'Personalized Learning Paths',
  'AI-driven adaptive learning systems that customize educational content based on individual student performance and learning styles.',
  '<h2>Education Tailored to Each Student</h2>
  <p>Our Personalized Learning Paths platform uses artificial intelligence to create customized educational experiences for every student. By analyzing learning patterns, comprehension levels, and engagement metrics, the system adapts content delivery in real-time.</p>

  <h3>Adaptive Learning Engine</h3>
  <ul>
    <li>Real-time performance tracking and analysis</li>
    <li>Dynamic difficulty adjustment</li>
    <li>Multi-modal content delivery (video, text, interactive)</li>
    <li>Learning style identification and adaptation</li>
    <li>Predictive analytics for intervention</li>
  </ul>

  <h3>Student Outcomes</h3>
  <p>Schools using our platform have observed remarkable improvements:</p>
  <ul>
    <li>35% increase in student engagement</li>
    <li>28% improvement in test scores</li>
    <li>50% reduction in dropout rates</li>
    <li>Higher student satisfaction and confidence</li>
  </ul>

  <h3>Teacher Dashboard</h3>
  <p>Comprehensive analytics dashboard for educators to monitor student progress, identify struggling learners, and intervene proactively with targeted support.</p>',
  'https://placehold.co/1200x600/8B5CF6/FFFFFF?text=Personalized+Learning',
  'Education',
  1,
  true
),
(
  'AI-Powered Tutoring',
  'Virtual tutoring assistants that provide instant homework help, explain complex concepts, and adapt to student learning pace.',
  '<h2>24/7 Intelligent Tutoring Support</h2>
  <p>Our AI-Powered Tutoring system acts as a personal tutor for every student, available anytime, anywhere. Using natural language processing and advanced pedagogy algorithms, it explains concepts, answers questions, and provides practice problems.</p>

  <h3>Core Capabilities</h3>
  <ul>
    <li>Subject expertise across STEM and humanities</li>
    <li>Step-by-step problem-solving guidance</li>
    <li>Adaptive questioning to assess understanding</li>
    <li>Multiple explanation methods for different learning styles</li>
    <li>Progress tracking and performance reports</li>
  </ul>

  <h3>Subjects Covered</h3>
  <p>Comprehensive coverage including Mathematics, Science, English, History, Programming, and more. Content aligned with major curriculum standards including Common Core, IB, and AP.</p>

  <h3>Parental Insights</h3>
  <p>Parents receive weekly reports on their child''s learning activities, strengths, areas for improvement, and suggested activities to support learning at home.</p>',
  'https://placehold.co/1200x600/EC4899/FFFFFF?text=AI+Tutoring',
  'Education',
  2,
  true
),
(
  'Smart Campus Solutions',
  'Comprehensive IoT and AI integration for campus management, security, resource optimization, and student experience enhancement.',
  '<h2>The Future of Campus Management</h2>
  <p>Transform your educational institution into a smart, connected campus with our comprehensive IoT and AI solution. From energy management to student safety, we optimize every aspect of campus operations.</p>

  <h3>Smart Infrastructure</h3>
  <ul>
    <li>Intelligent HVAC and lighting control</li>
    <li>Occupancy-based resource allocation</li>
    <li>Predictive maintenance for facilities</li>
    <li>Energy consumption optimization</li>
    <li>Water usage monitoring and conservation</li>
  </ul>

  <h3>Safety & Security</h3>
  <ul>
    <li>AI-powered video surveillance</li>
    <li>Access control and visitor management</li>
    <li>Emergency notification systems</li>
    <li>Incident prediction and prevention</li>
  </ul>

  <h3>Student Experience</h3>
  <ul>
    <li>Smart parking with real-time availability</li>
    <li>Indoor navigation and wayfinding</li>
    <li>Mobile app for campus services</li>
    <li>Digital kiosks for information</li>
  </ul>

  <h3>Sustainability Impact</h3>
  <p>Institutions using our Smart Campus solution have achieved 30-40% reduction in energy costs and significantly reduced their carbon footprint.</p>',
  'https://placehold.co/1200x600/06B6D4/FFFFFF?text=Smart+Campus',
  'Education',
  3,
  true
);

-- E-Commerce Solutions
INSERT INTO solutions (title, excerpt, content, image_url, category, display_order, is_published) VALUES
(
  'Conversational AI in E-Commerce',
  'Intelligent shopping assistants that guide customers, answer questions, and provide personalized product recommendations.',
  '<h2>Elevate Your E-Commerce Experience</h2>
  <p>Our Conversational AI for E-Commerce creates engaging, personalized shopping experiences through intelligent chatbots and virtual shopping assistants. These AI agents understand customer intent, provide product recommendations, and handle customer service inquiries 24/7.</p>

  <h3>Shopping Assistant Features</h3>
  <ul>
    <li>Natural language product search</li>
    <li>Personalized recommendations based on browsing history</li>
    <li>Size and fit guidance</li>
    <li>Order tracking and updates</li>
    <li>Returns and exchange assistance</li>
    <li>Multi-channel support (web, mobile, social media)</li>
  </ul>

  <h3>Business Impact</h3>
  <p>E-commerce businesses using our solution report:</p>
  <ul>
    <li>45% increase in conversion rates</li>
    <li>60% reduction in cart abandonment</li>
    <li>80% decrease in customer service costs</li>
    <li>3x increase in customer engagement</li>
  </ul>

  <h3>Integration</h3>
  <p>Seamlessly integrates with popular e-commerce platforms including Shopify, WooCommerce, Magento, and custom solutions.</p>',
  'https://placehold.co/1200x600/EF4444/FFFFFF?text=E-Commerce+AI',
  'E-Commerce',
  1,
  true
),
(
  'Hyper-Personalization',
  'Advanced AI algorithms that create unique shopping experiences for each customer based on behavior, preferences, and context.',
  '<h2>One-to-One Customer Experiences at Scale</h2>
  <p>Our Hyper-Personalization engine uses machine learning to deliver individualized content, product recommendations, and offers to each visitor in real-time. Every interaction is tailored to maximize engagement and conversion.</p>

  <h3>Personalization Capabilities</h3>
  <ul>
    <li>Dynamic homepage customization</li>
    <li>Behavioral product recommendations</li>
    <li>Personalized email campaigns</li>
    <li>Context-aware pricing and promotions</li>
    <li>Custom product bundles</li>
    <li>Predictive search suggestions</li>
  </ul>

  <h3>AI-Driven Insights</h3>
  <p>Our platform analyzes hundreds of data points including:</p>
  <ul>
    <li>Browsing patterns and click behavior</li>
    <li>Purchase history and frequency</li>
    <li>Time on site and engagement metrics</li>
    <li>Device and location data</li>
    <li>Social media activity</li>
    <li>Seasonal trends and preferences</li>
  </ul>

  <h3>Results</h3>
  <p>Retailers leveraging hyper-personalization see average revenue increases of 25-35% and customer lifetime value improvements of 40%.</p>',
  'https://placehold.co/1200x600/14B8A6/FFFFFF?text=Hyper+Personalization',
  'E-Commerce',
  2,
  true
),
(
  'Supply Chain Optimization',
  'AI-powered supply chain management that predicts demand, optimizes inventory, and ensures timely delivery.',
  '<h2>Intelligent Supply Chain Management</h2>
  <p>Transform your supply chain with our AI-powered optimization platform. Predict demand accurately, optimize inventory levels, and streamline logistics to reduce costs while improving customer satisfaction.</p>

  <h3>Demand Forecasting</h3>
  <ul>
    <li>Machine learning models for accurate demand prediction</li>
    <li>Seasonal trend analysis</li>
    <li>External factors integration (weather, events, holidays)</li>
    <li>Real-time forecast adjustments</li>
  </ul>

  <h3>Inventory Management</h3>
  <ul>
    <li>Automated reordering based on predicted demand</li>
    <li>Multi-location inventory optimization</li>
    <li>Dead stock identification and prevention</li>
    <li>Safety stock calculations</li>
  </ul>

  <h3>Logistics Optimization</h3>
  <ul>
    <li>Route optimization for deliveries</li>
    <li>Warehouse layout optimization</li>
    <li>Shipping cost reduction</li>
    <li>Delivery time prediction</li>
  </ul>

  <h3>Operational Benefits</h3>
  <p>Companies using our supply chain solution achieve 25% reduction in inventory costs, 30% improvement in order fulfillment speed, and 99.5% order accuracy.</p>',
  'https://placehold.co/1200x600/F97316/FFFFFF?text=Supply+Chain+AI',
  'E-Commerce',
  3,
  true
);

-- Laws & Firms Solutions
INSERT INTO solutions (title, excerpt, content, image_url, category, display_order, is_published) VALUES
(
  'Legal Document Analysis',
  'AI-powered document review and analysis that extracts key information, identifies risks, and ensures compliance.',
  '<h2>Accelerate Legal Document Review</h2>
  <p>Our Legal Document Analysis platform uses advanced natural language processing to review, analyze, and extract critical information from legal documents in seconds. What traditionally takes hours now takes minutes.</p>

  <h3>Document Processing Capabilities</h3>
  <ul>
    <li>Contract clause extraction and categorization</li>
    <li>Risk and obligation identification</li>
    <li>Compliance checking against regulations</li>
    <li>Key date and deadline extraction</li>
    <li>Party identification and relationship mapping</li>
    <li>Redlining and version comparison</li>
  </ul>

  <h3>Document Types Supported</h3>
  <ul>
    <li>Commercial contracts and agreements</li>
    <li>Lease agreements</li>
    <li>Employment contracts</li>
    <li>NDAs and confidentiality agreements</li>
    <li>Court filings and legal briefs</li>
    <li>Regulatory documents</li>
  </ul>

  <h3>Efficiency Gains</h3>
  <p>Law firms using our solution report 70% reduction in document review time, 90% accuracy in information extraction, and significant cost savings on routine legal work.</p>',
  'https://placehold.co/1200x600/7C3AED/FFFFFF?text=Legal+Document+AI',
  'Laws & Firms',
  1,
  true
),
(
  'AI Case-Law Research',
  'Intelligent legal research platform that finds relevant precedents, analyzes case law, and provides litigation insights.',
  '<h2>Revolutionary Legal Research</h2>
  <p>Our AI Case-Law Research platform transforms how legal professionals conduct research. Using advanced AI, it analyzes millions of cases, identifies relevant precedents, and provides actionable insights in minutes.</p>

  <h3>Research Features</h3>
  <ul>
    <li>Natural language query interface</li>
    <li>Semantic search across case law databases</li>
    <li>Citation network analysis</li>
    <li>Judge and jurisdiction analytics</li>
    <li>Outcome prediction based on case facts</li>
    <li>Similar case identification</li>
  </ul>

  <h3>Litigation Support</h3>
  <ul>
    <li>Case strategy recommendations</li>
    <li>Strength of case analysis</li>
    <li>Opposing counsel research</li>
    <li>Expert witness identification</li>
    <li>Settlement value estimation</li>
  </ul>

  <h3>Knowledge Management</h3>
  <p>Build your firm''s knowledge base with automated case briefs, searchable precedent libraries, and collaborative research tools.</p>

  <h3>Time Savings</h3>
  <p>Legal professionals using our platform reduce research time by 60% and discover 3x more relevant precedents compared to traditional research methods.</p>',
  'https://placehold.co/1200x600/DC2626/FFFFFF?text=Legal+Research+AI',
  'Laws & Firms',
  2,
  true
),
(
  'Contract Automation',
  'Streamline contract creation, negotiation, and management with intelligent automation and templates.',
  '<h2>Smart Contract Lifecycle Management</h2>
  <p>Our Contract Automation platform handles the entire contract lifecycle from creation to execution, renewal, and archival. Generate accurate contracts in minutes, not hours.</p>

  <h3>Contract Generation</h3>
  <ul>
    <li>Intelligent templates with conditional logic</li>
    <li>Automatic clause library integration</li>
    <li>Multi-party contract assembly</li>
    <li>Compliance-checked output</li>
    <li>Custom branding and formatting</li>
  </ul>

  <h3>Negotiation Tools</h3>
  <ul>
    <li>Collaborative editing and commenting</li>
    <li>Version control and comparison</li>
    <li>Approval workflow automation</li>
    <li>Negotiation playbook suggestions</li>
    <li>Risk flagging and alerts</li>
  </ul>

  <h3>Contract Management</h3>
  <ul>
    <li>Centralized contract repository</li>
    <li>Automated renewal reminders</li>
    <li>Obligation tracking and alerts</li>
    <li>Reporting and analytics</li>
    <li>E-signature integration</li>
  </ul>

  <h3>Business Impact</h3>
  <p>Organizations using our Contract Automation solution experience 80% faster contract turnaround, 95% reduction in errors, and improved compliance tracking.</p>',
  'https://placehold.co/1200x600/0891B2/FFFFFF?text=Contract+Automation',
  'Laws & Firms',
  3,
  true
);

-- Banking & Finance Solutions
INSERT INTO solutions (title, excerpt, content, image_url, category, display_order, is_published) VALUES
(
  'Fraud Detection Systems',
  'Real-time AI-powered fraud detection that identifies suspicious transactions and prevents financial crimes.',
  '<h2>Advanced Fraud Prevention</h2>
  <p>Our Fraud Detection System uses cutting-edge machine learning to identify fraudulent transactions in real-time, protecting your business and customers from financial crimes while minimizing false positives.</p>

  <h3>Detection Capabilities</h3>
  <ul>
    <li>Real-time transaction monitoring</li>
    <li>Behavioral anomaly detection</li>
    <li>Device fingerprinting and authentication</li>
    <li>Network analysis for fraud rings</li>
    <li>Account takeover prevention</li>
    <li>Money laundering detection (AML)</li>
  </ul>

  <h3>AI Models</h3>
  <ul>
    <li>Deep learning for pattern recognition</li>
    <li>Ensemble models for high accuracy</li>
    <li>Adaptive learning from new fraud patterns</li>
    <li>Explainable AI for regulatory compliance</li>
  </ul>

  <h3>Performance Metrics</h3>
  <p>Our system achieves:</p>
  <ul>
    <li>99.7% fraud detection accuracy</li>
    <li>0.1% false positive rate</li>
    <li>Sub-second decision making</li>
    <li>$50M+ in prevented fraud annually (average client)</li>
  </ul>

  <h3>Regulatory Compliance</h3>
  <p>Fully compliant with PCI DSS, SOC 2, GDPR, and banking regulations. Includes audit trails and reporting for regulatory requirements.</p>',
  'https://placehold.co/1200x600/059669/FFFFFF?text=Fraud+Detection',
  'Banking & Finance',
  1,
  true
),
(
  'Algorithmic Trading',
  'AI-driven trading algorithms that analyze markets, identify opportunities, and execute trades with precision.',
  '<h2>Intelligent Trading Solutions</h2>
  <p>Our Algorithmic Trading platform leverages artificial intelligence and machine learning to analyze market data, identify trading opportunities, and execute trades with optimal timing and pricing.</p>

  <h3>Trading Strategies</h3>
  <ul>
    <li>Statistical arbitrage</li>
    <li>Market making and liquidity provision</li>
    <li>Trend following and momentum strategies</li>
    <li>Mean reversion trading</li>
    <li>Pairs trading and correlation analysis</li>
    <li>High-frequency trading (HFT)</li>
  </ul>

  <h3>AI-Powered Analysis</h3>
  <ul>
    <li>Sentiment analysis from news and social media</li>
    <li>Pattern recognition in price movements</li>
    <li>Predictive modeling for price forecasting</li>
    <li>Risk assessment and portfolio optimization</li>
    <li>Alternative data integration</li>
  </ul>

  <h3>Risk Management</h3>
  <ul>
    <li>Real-time position monitoring</li>
    <li>Automated stop-loss and take-profit</li>
    <li>Drawdown protection</li>
    <li>Exposure limits and controls</li>
  </ul>

  <h3>Performance</h3>
  <p>Hedge funds and trading firms using our platform report consistent alpha generation with Sharpe ratios exceeding 2.0 and maximum drawdowns under 10%.</p>',
  'https://placehold.co/1200x600/BE185D/FFFFFF?text=Algorithmic+Trading',
  'Banking & Finance',
  2,
  true
),
(
  'AI-Driven Risk Assessment',
  'Comprehensive risk evaluation using AI to analyze credit, market, operational, and regulatory risks.',
  '<h2>Enterprise Risk Intelligence</h2>
  <p>Our AI-Driven Risk Assessment platform provides comprehensive risk analysis across credit, market, operational, and compliance domains. Make informed decisions with real-time risk insights.</p>

  <h3>Credit Risk Assessment</h3>
  <ul>
    <li>Alternative credit scoring models</li>
    <li>Default probability prediction</li>
    <li>Loan portfolio risk analysis</li>
    <li>Thin-file applicant evaluation</li>
    <li>Dynamic credit limit adjustment</li>
  </ul>

  <h3>Market Risk Analysis</h3>
  <ul>
    <li>Value at Risk (VaR) calculation</li>
    <li>Stress testing and scenario analysis</li>
    <li>Volatility forecasting</li>
    <li>Correlation analysis</li>
    <li>Liquidity risk assessment</li>
  </ul>

  <h3>Operational Risk</h3>
  <ul>
    <li>Process failure prediction</li>
    <li>Cybersecurity threat detection</li>
    <li>Third-party vendor risk</li>
    <li>Fraud and compliance risk</li>
  </ul>

  <h3>Regulatory Technology (RegTech)</h3>
  <p>Automated compliance monitoring, regulatory reporting, and KYC/AML processes that keep your organization compliant with evolving regulations.</p>

  <h3>Business Value</h3>
  <p>Financial institutions using our solution have reduced credit losses by 30%, improved loan approval times by 70%, and achieved 99.9% regulatory compliance.</p>',
  'https://placehold.co/1200x600/7C3AED/FFFFFF?text=Risk+Assessment+AI',
  'Banking & Finance',
  3,
  true
);

-- Update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for auto-updating updated_at
DROP TRIGGER IF EXISTS update_solutions_updated_at ON solutions;
CREATE TRIGGER update_solutions_updated_at
    BEFORE UPDATE ON solutions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Verify data insertion
SELECT category, COUNT(*) as count
FROM solutions
GROUP BY category
ORDER BY category;

-- Show all solutions
SELECT id, title, category, display_order, is_published
FROM solutions
ORDER BY category, display_order;
