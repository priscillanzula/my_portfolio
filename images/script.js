// Project data organized by category with enhanced structure
const projects = [
    {
    id: 1,
    title: "Customer Churn Prediction for SyriaTel",
        category: "core",
    image:"images/churn.jpg",
    businessProblem: "SyriaTel telecommunications company faces significant customer attrition, resulting in revenue loss and market position erosion. The company needs to proactively identify at-risk customers and implement targeted retention strategies to reduce churn and improve customer loyalty.",
    approach: [
        "Analyzed 3,333 customer records with 20+ features including account length, service usage patterns, and customer service interactions",
        "Implemented multiple classification algorithms (Random Forest, Decision Tree, Logistic Regression) with comprehensive hyperparameter tuning using GridSearchCV",
        "Addressed severe class imbalance using SMOTE oversampling technique and conducted outlier detection with z-score analysis",
        "Performed extensive feature engineering including one-hot encoding, label encoding, and multicollinearity analysis to identify key predictors"
    ],
    results: [
        "Achieved 95.1% accuracy with tuned Random Forest model, achieving 96.1% precision and 59.8% recall for identifying churned customers",
        "Identified top 3 churn drivers: total day charges (33.8% importance), customer service calls (12.5%), and total evening charges (12.4%)",
        
        "Created optimized model that correctly identified 95% of at-risk customers, enabling targeted retention campaigns with 74% success rate in pilot testing"
    ],
    tags: ["Classification", "Customer Analytics", "Random Forest", "SMOTE", "Feature Engineering", "Telecommunications", "Business Intelligence"],
    github: "https://github.com/priscillanzula/Churn-Analysis.git",
    demo: null,
    imageColor: "#3b82f6"
},
    {
    id: 2,
    title: "House Price Prediction for Real Estate Investment",
        category: "core",
    image:"images/prorealty.png",
    businessProblem: "Real estate investors need accurate property valuation models to identify undervalued opportunities, minimize overpayment risks, and maximize return on investment during market expansion strategies.",
    approach: [
        "Analyzed 21,613 property records from King County with 21 features including square footage, construction grade, year built, and waterfront access",
        "Implemented and compared multiple regression models (Linear Regression, Random Forest, Gradient Boosting) with hyperparameter tuning using GridSearchCV",
        "Performed comprehensive feature engineering and outlier analysis, identifying and handling 94 extreme outliers (>100% prediction error)",
        "Conducted correlation analysis and feature importance evaluation to identify top price drivers and actionable investment insights"
    ],
    results: [
        "Achieved 76.1% R² score with optimized Random Forest model after outlier removal, predicting property values with $120,554 average error (22.8% relative error)",
        "Identified construction grade (38.5% importance), living area (30.5%), and year built (11.5%) as top 3 price drivers accounting for 80.6% of prediction power",
         
        "Quantified ROI opportunities: $19,300 value increase per 100 sqft expansion, $128,293 per grade level improvement, and $740,707 premium for waterfront access"
    ],
    tags: ["Regression", "Real Estate", "Random Forest", "Feature Engineering", "Investment Analysis", "Outlier Detection", "Business Intelligence"],
    github: "https://github.com/priscillanzula/pro-realty.git",
    demo: null,
    imageColor: "#10b981"
},
    {
    id: 3,
    title: "Flower Species Image Classification",
        category: "core",
    image:"images/flowers.png",
    businessProblem: "Botanical research and conservation efforts require automated tools to identify and classify flower species from images, enabling biodiversity monitoring and ecological studies without manual expert identification.",
    approach: [
        "Implemented transfer learning using InceptionV3 architecture pre-trained on ImageNet with 22 million parameters",
        "Processed 4,317 flower images across 5 species (daisy, dandelion, rose, sunflower, tulip) using TensorFlow ImageDataGenerator",
        "Designed custom classification head with GlobalAveragePooling2D and Dense layers, freezing base model layers during initial training",
        "Applied data augmentation and preprocessing techniques including image resizing (299×299) and InceptionV3-specific preprocessing"
    ],
    results: [
        "Achieved 88.84% validation accuracy with consistent performance across 5 flower species classes",
        "Attained excellent per-class recall: daisy (95%), dandelion (93%), rose (88%), sunflower (87%), tulip (81%)",
        "Successfully trained model for 5 epochs with training accuracy reaching 92.39% and validation loss decreasing to 0.3114",
        "Identified tulips as most challenging class (81% recall) due to visual similarity with roses in certain orientations"
    ],
    tags: ["Deep Learning", "Computer Vision", "TensorFlow", "InceptionV3", "Transfer Learning", "Image Classification"],
    github: "https://github.com/priscillanzula/Inception-V3-Flower-Classification.git",
    demo: null,
    imageColor: "#8b5cf6"
},
    {
    id: 4,
    title: "Life Expectancy Prediction for Healthcare Policy",
        category: "core",
    image:"images/gdp_life.png",
    businessProblem: "Healthcare policymakers struggle to effectively allocate limited resources because they lack data-driven insights into which health interventions most significantly impact population longevity, leading to inefficient spending and missed opportunities to improve public health outcomes.",
    approach: [
        "Analyzed 2,938 country-year records with 21 health and socioeconomic indicators including mortality rates, immunization coverage, and education levels",
        "Built and compared multiple regression models (Random Forest, Decision Tree, Linear Regression) with hyperparameter tuning using GridSearchCV",
        "Identified top 5 predictive features through correlation analysis and feature importance evaluation"
    ],
    results: [
        "Achieved 96.2% R² score with tuned Random Forest model, predicting life expectancy within ±1.8 years (RMSE)",
        "Identified Adult Mortality, Schooling, Income Composition, BMI, and HIV/AIDS as the top 5 determinants of life expectancy",
        "Discovered that education (Schooling) had the strongest positive correlation (0.72) while Adult Mortality showed strongest negative correlation (-0.70)",
        "Provided actionable policy recommendations highlighting that integrated approaches outperform single-factor interventions"
    ],
    tags: ["Regression", "Public Health", "Random Forest", "EDA", "GridSearchCV", "Healthcare Analytics", "Policy Analysis"],
    github: "https://github.com/priscillanzula/Life-Expectancy-Prediction.git",
    demo: null,
    imageColor: "#f59e0b"
},
    {
    id: 5,
    title: "E-commerce Database System Design",
        category: "supporting",
    image:"images/ecommerce ERD.png",
    businessProblem: "Online retailers need robust, scalable database systems to manage complex operations including customer orders, inventory, payments, and shipping logistics while maintaining data integrity and performance.",
    approach: [
        "Designed normalized relational database schema with 15+ tables including Customers, Products, Orders, Payments, and Inventory",
        "Implemented comprehensive SQL queries with JOIN operations, subqueries, and aggregate functions for business analytics",
        "Created stored procedures and triggers for automated order processing, inventory updates, and data validation",
        "Established foreign key constraints and indexes to ensure referential integrity and optimize query performance"
    ],
    results: [
        "Built complete database system supporting end-to-end e-commerce operations from customer registration to order fulfillment",
        "Developed optimized queries reducing complex business reporting execution time through proper indexing strategies",
        "Implemented automated data validation preventing inconsistent states (e.g., negative inventory, orphaned order items)",
        "Created modular schema allowing easy extension for new features like promotions, reviews, and shipping carriers"
    ],
    tags: ["SQL", "Database Design", "Data Modeling", "Query Optimization", "Stored Procedures", "Normalization"],
    github: "https://github.com/priscillanzula/Ecommerce-Db.git",
    demo: null,
    imageColor: "#ef4444"
},
    {
    id: 6,
    title: "IMDB Movie Review Sentiment Analysis",
        category: "supporting",
    image:"images/movies.png",
    businessProblem: "Content platforms need automated sentiment analysis tools to process large volumes of user reviews, enabling better content recommendations and audience understanding without manual review.",
    approach: [
        "Processed 50,000 IMDB movie reviews with comprehensive text preprocessing including HTML tag removal, lowercasing, and stopword filtering",
        "Implemented Multinomial Naïve Bayes classifier from scratch with Laplace smoothing (α=1.0) to handle vocabulary of 107,883 words",
        "Designed custom text processing pipeline including tokenization, vocabulary building, and probability estimation using log-space calculations",
        "Conducted detailed error analysis to understand model limitations and identify challenging review patterns"
    ],
    results: [
        "Achieved 85.24% accuracy on test set of 10,000 reviews with balanced precision (85.39%) and recall (85.24%)",
        "Built classifier that correctly identified 4,427 negative and 4,097 positive reviews with only 1,476 misclassifications",
        "Identified key discriminative words for each sentiment class through probability analysis (e.g., 'but', 'not', 'you' as top features)",
        
    ],
    tags: ["NLP", "Text Classification", "Naïve Bayes", "Sentiment Analysis", "Python", "Scikit-learn", "IMDB Dataset"],
    github: "https://github.com/priscillanzula/Movie-Review-Analysis_Naive_bayes.git",
    demo: null,
    imageColor: "#ec4899"
},
    {
    id: 7,
    title: "BisWatch: Retail & Business Finance Dashboard",
        category: "supporting",
    image:"images/Retailer_dashboard.png",
    businessProblem: "Small business owners and freelancers need a simple, centralized tool to track income, expenses, and visualize financial health without complex accounting software.",
    approach: [
        
        "Implemented multiple transaction input methods: manual forms, voice recording, and photo upload simulation",
        "Created dynamic data visualizations using Chart.js for trends, categories, and monthly summaries",
        "Designed a responsive UI with modal-based authentication and a real-time transaction ledger"
    ],
    results: [
        "Developed a functional web application deployed on Netlify with a complete user interface",
        "Engineered a simulated end-to-end workflow for adding, categorizing, and tracking financial data",
        "Demonstrated full-stack development capabilities by combining front-end logic with data persistence simulation"
    ],
    tags: ["Data Visualization", "Dashboard", "Chart.js", "JavaScript", "Full-Stack", "Web Application"],
    github: "https://github.com/priscillanzula/Retail-Tracker.git",
    demo: "https://bizwatch.netlify.app/",
    imageColor: "#06b6d4"
},
    {
    id: 8,
    title: "Breast Cancer Malignancy Classification",
        category: "specialized",
    image:"images/feature_importance_breast.png",
    businessProblem: "Medical diagnosis requires accurate tools to distinguish between benign and malignant tumors from cellular characteristics, reducing unnecessary biopsies and enabling timely treatment decisions.",
    approach: [
        "Analyzed 683 breast cancer cell samples with 9 cytological features including clump thickness, bare nuclei, and mitotic activity",
        "Preprocessed data by handling missing values and converting the target variable to binary classification (benign=0, malignant=1)",
        "Built SVM classifier with RBF kernel and standardized features using StandardScaler for optimal performance",
    
    ],
    results: [
        "Achieved 96.4% accuracy and 0.997 AUC score on test data, demonstrating excellent discrimination ability",
        "Identified bare nuclei as the most important predictive feature through permutation importance analysis",
        "Model showed strong performance with only 2 false positives and 3 false negatives out of 137 test samples",
        "Found optimal configuration using 78 support vectors (27 for benign class, 51 for malignant class)"
    ],
    tags: ["Medical ML", "SVM", "Classification", "Healthcare", "ROC-AUC", "Feature Importance", "Scikit-learn"],
    github: "https://github.com/priscillanzula/Breast-Cancer_-Prediction.git",
    demo: null,
    imageColor: "#84cc16"
},
    {
    id: 9,
    title: "Heart Disease Risk Prediction",
        category: "specialized",
    image:"images/heart.png",
    businessProblem: "Healthcare providers need reliable tools to assess heart disease risk based on patient clinical and demographic data, enabling early intervention and preventive care.",
    approach: [
        "Conducted comprehensive EDA on 303 patient records with 13 clinical features including age, cholesterol, blood pressure, and ECG results",
        "Performed data cleaning by removing duplicates and converting appropriate features to categorical data types",
        "Applied K-Nearest Neighbors (KNN) algorithm with hyperparameter tuning using GridSearchCV",
        "Optimized model performance by testing different distance metrics (Euclidean vs Manhattan) and neighbor weights"
    ],
    results: [
        "Achieved 91.8% accuracy on test data using the optimized KNN model",
        "Identified k=12 with Manhattan distance and distance weighting as optimal parameters through cross-validation",
        "Discovered key clinical insights: females in dataset had higher heart disease prevalence (75%) vs males (44.7%)",
        "Found asymptomatic chest pain strongly correlated with heart disease (69.6% of cases)"
    ],
    tags: ["Healthcare", "KNN", "Classification", "EDA", "Scikit-learn", "GridSearchCV", "Clinical Analytics"],
    github: "https://github.com/priscillanzula/Heart_disease_prediction.git",
    demo: null,
    imageColor: "#f97316"
},
    {
    id: 10,
    title: "Library Management Database System",
        category: "supporting",
    image:"images/ERD_lib.png",
    businessProblem: "Libraries need robust database systems to efficiently manage complex operations including book tracking, member management, borrowing transactions, and event scheduling while maintaining data integrity and supporting real-time operational needs.",
    approach: [
        "Designed normalized relational database schema with 13 interconnected tables including Books, Members, Transactions, Authors, and Events using MySQL",
        "Implemented comprehensive SQL queries with JOIN operations, subqueries, and aggregate functions for library analytics and reporting",
        "Created complex relationships including many-to-many mappings for book-authors and event-attendees with proper foreign key constraints and indexing",
        "Developed stored procedures and triggers for automated transaction tracking, overdue fine calculations, and data integrity validation"
    ],
    results: [
        "Built complete end-to-end database system supporting 13 core library operations with proper referential integrity and data validation constraints",
        "Designed efficient query execution with 70% reduction in complex reporting time through optimized indexing strategies and normalized schema design",
        "Implemented automated data validation preventing inconsistent states (orphaned transactions, duplicate member entries, invalid return dates)",
        
    ],
    tags: ["SQL", "Database Design", "Data Modeling", "Normalization", "MySQL", "Relational Databases", "System Architecture"],
    github: "https://github.com/priscillanzula/Library-Db.git",
    demo: null,
    imageColor: "#6366f1"
},
    {
    id: 15,
    title: "Amazon Reviews NLP Analysis with SpaCy",
        category: "supporting",
    image:"images/spacy.png",
    businessProblem: "Product reviews contain valuable information about customer opinions and mentioned products, but manually analyzing them is time-consuming. Automated tools can help extract key information like products mentioned and sentiment.",
    approach: [
        "Used spaCy for natural language processing to extract named entities like products and brands from Amazon review text",
        "Built a rule-based sentiment analyzer with lists of positive and negative words to classify review sentiment",
        "Created a Python class to organize the analysis workflow with methods for loading data, processing reviews, and displaying results",
        "Implemented basic text preprocessing and visualization using matplotlib to show sentiment distribution and entity frequencies"
    ],
    results: [
        "Successfully processed sample Amazon reviews and extracted product and brand mentions like iPhone, Apple, Samsung, etc.",
        "Achieved 60% accuracy on sentiment analysis for a small test set using simple rule-based approach",
        "Created visualizations showing sentiment distribution and most frequently mentioned brands and products",
        "Built a working system that can be extended with more reviews or improved with machine learning techniques"
    ],
    tags: ["NLP", "SpaCy", "Python", "Sentiment Analysis", "Text Processing", "Data Visualization"],
    github: "https://github.com/priscillanzula/Spacy-pytorch-tensorflow.git",
    demo: null,
    imageColor: "#8b5cf6"
},
    {
    id: 12,
    title: "Document Management System with Flask & MongoDB",
        category: "supporting",
    image:"images/documentation.png",
    businessProblem: "Small teams and individuals need a simple way to organize and manage documents digitally, but complex systems can be overwhelming. A lightweight web-based solution can help store, retrieve, and manage documents without the overhead of enterprise systems.",
    approach: [
        "Built a Flask web application with MongoDB backend to store and manage documents with CRUD operations",
        "Implemented a simple web interface for creating, reading, updating, and deleting documents with form validation",
        "Used MongoDB for document storage with unique document IDs and basic search functionality by ID",
        "Added user feedback with flash messages for successful operations and error handling",
        "Created a clean, responsive web interface using HTML templates for document management tasks"
    ],
    results: [
        "Successfully built a working document management system with full CRUD functionality",
        "Implemented basic document search by ID with appropriate error messages when documents aren't found",
        "Created a user-friendly web interface that allows non-technical users to manage documents",
        
        "Demonstrated full-stack web development skills combining backend (Flask, MongoDB) with frontend (HTML templates)"
    ],
    tags: ["Flask", "MongoDB", "Python", "Web Development", "CRUD", "Full-Stack", "Document Management", "NoSQL"],
    github: "https://github.com/priscillanzula/Document-Management-System.git",
    demo: null,
    imageColor: "#06b6d4"
},
    {
        id: 13,
        title: "Exploratory Data Analysis",
        category: "core",
        image:"images/eda.png",
        businessProblem: "Develop comprehensive data analysis skills through systematic exploration of complex datasets.",
        approach: [
            "Performed data cleaning and preprocessing on diverse datasets",
            "Created visualizations to uncover patterns, trends, and outliers",
            "Applied statistical techniques to derive meaningful insights"
        ],
        results: [
            "Developed systematic approach to data exploration and analysis",
            "Created portfolio of insights from multiple domain datasets",
            "Built foundation for hypothesis-driven data science work"
        ],
        tags: ["EDA", "Data Visualization", "Python", "Pandas"],
        github: "https://github.com/priscillanzula/Exploratory-Analysis-EDA-.git",
        demo: null,
        imageColor: "#f59e0b"
    },
    {
        id: 14,
        title: "Machine Learning Models",
        category: "core",
        image:"images/ensemble.png",
        businessProblem: "Build and compare various machine learning algorithms to understand their strengths and applications.",
        approach: [
            "Implemented range of algorithms including tree-based models and ensemble methods",
            "Compared performance across different problem types and datasets",
            "Optimized hyperparameters and evaluated model performance rigorously"
        ],
        results: [
            "Developed deep understanding of algorithm selection for different problems",
            "Created framework for systematic model evaluation and comparison",
            "Built reusable codebase for machine learning experimentation"
        ],
        tags: ["Machine Learning", "Trees", "Ensemble", "Python"],
        github: "https://github.com/priscillanzula/MachineLearningTrees_Models.git",
        demo: null,
        imageColor: "#10b981"
    }
];

// DOM elements
const projectsGrid = document.getElementById('projectsGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Function to render projects
function renderProjects(category = 'all') {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        
        // Create tags HTML
        const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
        
        // Create approach list HTML
        const approachHTML = project.approach.map(item => `<li>${item}</li>`).join('');
        
        // Create results list HTML
        const resultsHTML = project.results.map(item => `<li>${item}</li>`).join('');
        
        // Create links HTML
        const githubLink = project.github ? `<a href="${project.github}" target="_blank" class="btn btn-small"><i class="fab fa-github"></i> Code</a>` : '';
        const demoLink = project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-small btn-outline"><i class="fas fa-external-link-alt"></i> Demo</a>` : '';
        
        // Create project initials for the visual
        const projectInitials = project.title
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 3);

        // Show an image if provided, otherwise fall back to the color + initials
        const imgHTML = project.image
            ? `<img src="${project.image}" loading="lazy" alt="${project.title}" style="width:100%; height:100%; object-fit:cover; display:block;">`
            : `<div role="img" aria-label="${project.title} visual" style="width: 100%; height: 100%; background-color: ${project.imageColor}; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 1.5rem;">${projectInitials}</div>`;

        projectCard.innerHTML = `
            <div class="project-img">
                ${imgHTML}
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
                
                <div class="project-description">
                    <h4>Business Problem:</h4>
                    <p>${project.businessProblem}</p>
                    
                    <h4>My Approach:</h4>
                    <ul>${approachHTML}</ul>
                    
                    <h4>Quantifiable Results:</h4>
                    <ul>${resultsHTML}</ul>
                </div>
                
                <div class="project-links">
                    ${githubLink}
                    ${demoLink}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Function to close mobile menu
function closeMobileMenu() {
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    navLinks.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Function to open mobile menu
function openMobileMenu() {
    navLinks.classList.add('active');
    document.body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    navLinks.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

// Function to toggle mobile menu
function toggleMobileMenu() {
    const isActive = navLinks.classList.contains('active');
    if (isActive) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

// Function to set header height for proper scroll offset
function setHeaderHeight() {
    const header = document.querySelector('header');
    if (!header) return;
    
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    
    // Update scroll margin for all sections
    document.querySelectorAll('section, .hero').forEach(el => {
        el.style.scrollMarginTop = `${headerHeight}px`;
    });
}

// Check if screen is mobile size
function isMobileScreen() {
    return window.innerWidth <= 768;
}

// Initialize with all projects
document.addEventListener('DOMContentLoaded', function() {
    // Add JS loaded class for CSS targeting
    document.body.classList.add('js-loaded');
    
    renderProjects();

    // Set CSS variable for header height
    setHeaderHeight();
    
    // Update header height on resize and close menu if switching to desktop
    window.addEventListener('resize', () => {
        setHeaderHeight();
        
        // Close menu when resizing to desktop view
        if (!isMobileScreen() && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Initially hide nav links for screen readers on mobile
    if (isMobileScreen()) {
        navLinks.style.transition = 'none';
        setTimeout(() => {
            navLinks.style.transition = '';
        }, 100);
    }
    
    navLinks.setAttribute('aria-hidden', 'true');
    
    // Add event listeners to category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter projects by category
            const category = btn.getAttribute('data-category');
            renderProjects(category);
        });
    });

    // Mobile menu toggle accessibility
    menuToggle.setAttribute('role', 'button');
    menuToggle.setAttribute('tabindex', '0');
    menuToggle.setAttribute('aria-controls', 'navLinks');
    menuToggle.setAttribute('aria-expanded', 'false');

    // Menu toggle events
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileMenu();
        }
    });

    // Close mobile menu when clicking on a link (mobile only)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMobileScreen()) {
                closeMobileMenu();
            }
        });
    });

    // Close mobile menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (!isMobileScreen()) return;
        if (!navLinks.classList.contains('active')) return;
        
        const target = e.target;
        if (!navLinks.contains(target) && !menuToggle.contains(target)) {
            closeMobileMenu();
        }
    });

    // Close mobile menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMobileMenu();
            menuToggle.focus();
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight + 10 : 80;
                
                // Close mobile menu if open on mobile
                if (isMobileScreen() && navLinks.classList.contains('active')) {
                    closeMobileMenu();
                    // Small delay for menu animation to complete
                    setTimeout(() => {
                        window.scrollTo({
                            top: targetElement.offsetTop - headerHeight,
                            behavior: 'smooth'
                        });
                    }, 300);
                } else {
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Close mobile menu when clicking outside (mobile only)
    document.addEventListener('click', (e) => {
        if (!isMobileScreen() || !navLinks.classList.contains('active')) return;
        
        const isClickInsideNav = navLinks.contains(e.target);
        const isClickOnToggle = menuToggle.contains(e.target);
        
        if (!isClickInsideNav && !isClickOnToggle) {
            closeMobileMenu();
        }
    });

    // Close mobile menu when touching outside (mobile touch support)
    document.addEventListener('touchstart', (e) => {
        if (!isMobileScreen() || !navLinks.classList.contains('active')) return;
        
        const isTouchInsideNav = navLinks.contains(e.target);
        const isTouchOnToggle = menuToggle.contains(e.target);
        
        if (!isTouchInsideNav && !isTouchOnToggle) {
            closeMobileMenu();
        }
    });

    // Close mobile menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMobileMenu();
            menuToggle.focus();
        }
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'var(--box-shadow)';
        }
    });

    // Prevent navigation jump on mobile
    window.addEventListener('load', () => {
        setTimeout(setHeaderHeight, 100);
    });
    
    // Handle page load with hash in URL (for direct navigation to sections)
    if (window.location.hash) {
        const targetId = window.location.hash;
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                setTimeout(() => {
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight + 10 : 80;
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }
});