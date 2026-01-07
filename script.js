// Project data organized by category
const projects = [
    {
        id: 1,
        title: "Customer Churn Analysis",
        category: "core",
        description: "Classification project to predict customer churn for a telecom company, analyzing factors that influence customer retention.",
        tags: ["Classification", "Business Impact", "Python", "Scikit-learn"],
        github: "https://github.com/priscillanzula/Churn-Analysis.git",
        demo: null,
        imageColor: "#3b82f6"
    },
    {
        id: 2,
        title: "House Price Prediction",
        category: "core",
        description: "Regression model to predict house prices based on features like location, size, and amenities with extensive feature engineering.",
        tags: ["Regression", "Feature Engineering", "Python", "Random Forest"],
        github: "https://github.com/priscillanzula/pro-realty.git",
        demo: null,
        imageColor: "#10b981"
    },
    {
        id: 3,
        title: "Flower Image Classification",
        category: "core",
        description: "Deep learning project using InceptionV3 to classify flower species from images with transfer learning techniques.",
        tags: ["Deep Learning", "Computer Vision", "TensorFlow", "InceptionV3"],
        github: "https://github.com/priscillanzula/Inception-V3-Flower-Classification.git",
        demo: null,
        imageColor: "#8b5cf6"
    },
    {
        id: 4,
        title: "Life Expectancy Prediction",
        category: "core",
        description: "Regression analysis predicting life expectancy based on socio-economic and health factors with insights into policy implications.",
        tags: ["Regression", "Socio-economic", "Python", "EDA"],
        github: "https://github.com/priscillanzula/Life-Expectancy-Prediction.git",
        demo: null,
        imageColor: "#f59e0b"
    },
    {
        id: 5,
        title: "E-commerce Database Design",
        category: "supporting",
        description: "SQL database design and implementation for an e-commerce platform with optimized queries and data modeling.",
        tags: ["SQL", "Data Engineering", "Database Design"],
        github: "https://github.com/priscillanzula/Ecommerce-Db.git",
        demo: null,
        imageColor: "#ef4444"
    },
    {
        id: 6,
        title: "Movie Review Sentiment Analysis",
        category: "supporting",
        description: "NLP project classifying movie reviews as positive or negative using Naive Bayes and text preprocessing techniques.",
        tags: ["NLP", "Text Classification", "Naive Bayes", "Python"],
        github: "https://github.com/priscillanzula/Movie-Review-Analysis_Naive_bayes.git",
        demo: null,
        imageColor: "#ec4899"
    },
    {
        id: 7,
        title: "Retail Tracker Dashboard",
        category: "supporting",
        description: "Interactive dashboard for tracking retail sales performance with visualizations of key business metrics.",
        tags: ["Data Visualization", "Dashboard", "Power BI", "Python"],
        github: "https://github.com/priscillanzula/Retail-Tracker.git",
        demo: null,
        imageColor: "#06b6d4"
    },
    {
        id: 8,
        title: "Breast Cancer Prediction",
        category: "specialized",
        description: "Medical ML project to predict breast cancer with careful model evaluation and interpretation of clinical relevance.",
        tags: ["Medical ML", "Classification", "Model Evaluation", "Healthcare"],
        github: "https://github.com/priscillanzula/Breast-Cancer_-Prediction.git",
        demo: null,
        imageColor: "#84cc16"
    },
    {
        id: 9,
        title: "Heart Disease Prediction",
        category: "specialized",
        description: "Health analytics project predicting heart disease risk factors with classification algorithms and feature importance analysis.",
        tags: ["Health Analytics", "Classification", "Feature Importance", "Python"],
        github: "https://github.com/priscillanzula/Heart_disease_prediction.git",
        demo: null,
        imageColor: "#f97316"
    },
    {
        id: 10,
        title: "Library Database System",
        category: "supporting",
        description: "Complete database system for library management with SQL queries, transactions, and data integrity constraints.",
        tags: ["SQL", "Database", "Data Modeling"],
        github: "https://github.com/priscillanzula/Library-Db.git",
        demo: null,
        imageColor: "#6366f1"
    },
    {
        id: 11,
        title: "Spacy PyTorch TensorFlow",
        category: "supporting",
        description: "Advanced NLP project using SpaCy, PyTorch and TensorFlow for text processing and deep learning applications.",
        tags: ["NLP", "PyTorch", "TensorFlow", "SpaCy"],
        github: "https://github.com/priscillanzula/Spacy-pytorch-tensorflow.git",
        demo: null,
        imageColor: "#8b5cf6"
    },
    {
        id: 12,
        title: "Document Management System",
        category: "supporting",
        description: "System for organizing and managing documents with search capabilities and metadata tracking.",
        tags: ["System Design", "Database", "Python"],
        github: "https://github.com/priscillanzula/Document-Management-System.git",
        demo: null,
        imageColor: "#06b6d4"
    },
    {
        id: 13,
        title: "Exploratory Data Analysis",
        category: "core",
        description: "Comprehensive EDA project demonstrating data cleaning, visualization, and insights extraction from complex datasets.",
        tags: ["EDA", "Data Visualization", "Python", "Pandas"],
        github: "https://github.com/priscillanzula/Exploratory-Analysis-EDA-.git",
        demo: null,
        imageColor: "#f59e0b"
    },
    {
        id: 14,
        title: "Machine Learning Models",
        category: "core",
        description: "Implementation and comparison of various machine learning algorithms including tree-based models and ensemble methods.",
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
                <p>${project.description}</p>
                <div class="project-links">
                    ${githubLink}
                    ${demoLink}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Update project count display
    updateProjectCount(category, filteredProjects.length);
}

// Function to update project count
function updateProjectCount(category, count) {
    const categoryText = category === 'all' ? '' : 
                        category === 'core' ? 'Core ' :
                        category === 'supporting' ? 'Supporting ' : 'Specialized ';
    
    const countElement = document.querySelector('.section-intro p');
    if (countElement) {
        countElement.textContent = `Showing ${count} ${categoryText}project${count !== 1 ? 's' : ''}. Each project includes a description, technologies used, and links to the code repository.`;
    }
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