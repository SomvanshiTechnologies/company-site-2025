-- ============================================
-- Technologies Dummy Data
-- ============================================

-- Web Technologies
INSERT INTO technologies (title, excerpt, content, image_url, icon, category, display_priority, is_published)
VALUES
('React', 'A JavaScript library for building user interfaces',
'<h2>React</h2><p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.</p><h3>Key Features</h3><ul><li>Component-Based Architecture</li><li>Virtual DOM for Performance</li><li>Declarative Views</li><li>Rich Ecosystem</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'SiReact', 'Web', 1, true),

('Vue.js', 'The Progressive JavaScript Framework',
'<h2>Vue.js</h2><p>Vue is a progressive framework for building user interfaces. It is designed to be incrementally adoptable and can easily scale between a library and a full-featured framework.</p><h3>Key Features</h3><ul><li>Approachable and Versatile</li><li>Performant</li><li>Progressive Framework</li><li>Excellent Documentation</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', 'SiVuedotjs', 'Web', 2, true),

('Angular', 'Platform for building mobile and desktop web applications',
'<h2>Angular</h2><p>Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.</p><h3>Key Features</h3><ul><li>Full-Featured Framework</li><li>TypeScript Support</li><li>Dependency Injection</li><li>Comprehensive CLI</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', 'SiAngular', 'Web', 3, true),

('Next.js', 'The React Framework for Production',
'<h2>Next.js</h2><p>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.</p><h3>Key Features</h3><ul><li>Server-Side Rendering</li><li>Static Site Generation</li><li>API Routes</li><li>Built-in Optimization</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 'SiNextdotjs', 'Web', 4, true),

('Tailwind CSS', 'A utility-first CSS framework',
'<h2>Tailwind CSS</h2><p>Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides low-level utility classes that let you build completely custom designs.</p><h3>Key Features</h3><ul><li>Utility-First Approach</li><li>Responsive Design</li><li>Customizable</li><li>JIT Compiler</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', 'SiTailwindcss', 'Web', 5, true);

-- Backend Technologies
INSERT INTO technologies (title, excerpt, content, image_url, icon, category, display_priority, is_published)
VALUES
('Node.js', 'JavaScript runtime built on Chrome''s V8 engine',
'<h2>Node.js</h2><p>Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript for server-side scripting.</p><h3>Key Features</h3><ul><li>Event-Driven Architecture</li><li>Non-Blocking I/O</li><li>NPM Ecosystem</li><li>Cross-Platform</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 'SiNodedotjs', 'Backend', 1, true),

('Python', 'High-level programming language for general-purpose programming',
'<h2>Python</h2><p>Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in web development, data science, automation, and artificial intelligence.</p><h3>Key Features</h3><ul><li>Simple and Readable Syntax</li><li>Extensive Standard Library</li><li>Dynamic Typing</li><li>Large Community</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'SiPython', 'Backend', 2, true),

('Django', 'High-level Python web framework',
'<h2>Django</h2><p>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the model-template-views architectural pattern.</p><h3>Key Features</h3><ul><li>Batteries-Included Framework</li><li>ORM System</li><li>Security Features</li><li>Admin Interface</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', 'SiDjango', 'Backend', 3, true),

('Express.js', 'Fast, unopinionated web framework for Node.js',
'<h2>Express.js</h2><p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p><h3>Key Features</h3><ul><li>Minimal and Flexible</li><li>Middleware Support</li><li>Routing</li><li>Template Engines</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 'SiExpress', 'Backend', 4, true);

-- Cloud Technologies
INSERT INTO technologies (title, excerpt, content, image_url, icon, category, display_priority, is_published)
VALUES
('AWS', 'Amazon Web Services - Cloud Computing Platform',
'<h2>Amazon Web Services</h2><p>AWS is a comprehensive cloud computing platform provided by Amazon. It offers a mix of infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS).</p><h3>Key Services</h3><ul><li>EC2, S3, Lambda</li><li>RDS, DynamoDB</li><li>CloudFront, Route 53</li><li>Elastic Beanstalk</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', 'SiAmazonaws', 'Cloud', 1, true),

('Google Cloud', 'Google Cloud Platform - Cloud Computing Services',
'<h2>Google Cloud Platform</h2><p>Google Cloud Platform is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.</p><h3>Key Services</h3><ul><li>Compute Engine</li><li>Cloud Storage</li><li>BigQuery</li><li>Kubernetes Engine</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', 'SiGooglecloud', 'Cloud', 2, true),

('Docker', 'Platform for developing, shipping, and running applications',
'<h2>Docker</h2><p>Docker is a platform designed to help developers build, share, and run modern applications. It handles the tedious setup, so developers can focus on the code.</p><h3>Key Features</h3><ul><li>Containerization</li><li>Portability</li><li>Isolation</li><li>Docker Hub</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 'SiDocker', 'Cloud', 3, true);

-- Database Technologies
INSERT INTO technologies (title, excerpt, content, image_url, icon, category, display_priority, is_published)
VALUES
('PostgreSQL', 'Advanced open source relational database',
'<h2>PostgreSQL</h2><p>PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development. It has earned a strong reputation for reliability, feature robustness, and performance.</p><h3>Key Features</h3><ul><li>ACID Compliance</li><li>Advanced Data Types</li><li>Full-Text Search</li><li>JSON Support</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', 'SiPostgresql', 'Database', 1, true),

('MongoDB', 'Document-oriented NoSQL database',
'<h2>MongoDB</h2><p>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database, MongoDB uses JSON-like documents with optional schemas.</p><h3>Key Features</h3><ul><li>Document-Oriented</li><li>Flexible Schema</li><li>Horizontal Scalability</li><li>Rich Query Language</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 'SiMongodb', 'Database', 2, true),

('Redis', 'In-memory data structure store',
'<h2>Redis</h2><p>Redis is an open source, in-memory data structure store, used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, and more.</p><h3>Key Features</h3><ul><li>In-Memory Performance</li><li>Data Structures</li><li>Persistence Options</li><li>Pub/Sub Messaging</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', 'SiRedis', 'Database', 3, true);

-- AI/ML Technologies
INSERT INTO technologies (title, excerpt, content, image_url, icon, category, display_priority, is_published)
VALUES
('TensorFlow', 'End-to-end open source machine learning platform',
'<h2>TensorFlow</h2><p>TensorFlow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources.</p><h3>Key Features</h3><ul><li>Deep Learning Framework</li><li>Neural Network APIs</li><li>TensorBoard Visualization</li><li>Multi-Platform Support</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', 'SiTensorflow', 'AI/ML', 1, true),

('PyTorch', 'Open source machine learning framework',
'<h2>PyTorch</h2><p>PyTorch is an open source machine learning framework that accelerates the path from research prototyping to production deployment. It is based on the Torch library.</p><h3>Key Features</h3><ul><li>Dynamic Computational Graphs</li><li>Pythonic Interface</li><li>Strong GPU Acceleration</li><li>Rich Ecosystem</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', 'SiPytorch', 'AI/ML', 2, true);

-- Mobile Technologies
INSERT INTO technologies (title, excerpt, content, image_url, icon, category, display_priority, is_published)
VALUES
('React Native', 'Framework for building native mobile apps using React',
'<h2>React Native</h2><p>React Native is an open-source mobile application framework created by Meta. It is used to develop applications for Android, iOS, and other platforms using React and native platform capabilities.</p><h3>Key Features</h3><ul><li>Cross-Platform Development</li><li>Native Performance</li><li>Hot Reloading</li><li>Large Community</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'SiReact', 'Mobile', 1, true),

('Flutter', 'Google''s UI toolkit for building natively compiled applications',
'<h2>Flutter</h2><p>Flutter is Google''s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language.</p><h3>Key Features</h3><ul><li>Single Codebase</li><li>Fast Development</li><li>Expressive UI</li><li>Native Performance</li></ul>',
'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', 'SiFlutter', 'Mobile', 2, true);
