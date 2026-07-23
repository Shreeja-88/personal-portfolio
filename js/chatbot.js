// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Chatbot Elements
    // ===================================
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input-field');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const suggestionButtons = document.querySelectorAll('.suggestion-btn');

    // ===================================
    // Toggle Chatbot
    // ===================================
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
        if (chatbotWindow.classList.contains('active')) {
            chatbotInput.focus();
        }
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });

    // Close chatbot when clicking outside
    document.addEventListener('click', (e) => {
        if (!chatbotWindow.contains(e.target) && !chatbotToggle.contains(e.target)) {
            chatbotWindow.classList.remove('active');
        }
    });

    // ===================================
    // Portfolio Knowledge Base
    // ===================================
    const portfolioData = {
        name: "Shreeja Hebbar",
        title: "Backend Software Engineering Intern",
        education: {
            institution: "The National Institute of Engineering",
            degree: "B.E. in Computer Science",
            gpa: "9.32/10",
            graduation: "2028"
        },
        contact: {
            email: "itshreeja@gmail.com",
            phone: "+91 9448546093",
            linkedin: "https://www.linkedin.com/in/shreejahebbar676/",
            github: "https://github.com/Shreeja-88",
            leetcode: "https://leetcode.com/u/ShreejaHebbar676/",
            twitter: "https://x.com/its_shreeja21"
        },
        skills: {
            programming: ["Java", "Python", "JavaScript", "SQL"],
            backend: ["Spring Boot", "REST APIs", "JDBC", "JUnit", "Django REST Framework"],
            frontend: ["React.js", "HTML5", "CSS3", "ES6+"],
            databases: ["MySQL", "PostgreSQL", "SQLite"],
            ai: ["Generative AI Fundamentals", "Prompt Engineering", "GitHub API Integration", "NLP Chatbot Development"],
            tools: ["Git", "GitHub", "Maven", "Gradle", "VS Code", "Eclipse", "Postman", "Netlify", "Vercel", "Railway", "GitHub Pages"],
            concepts: ["Data Structures", "Algorithms", "OOP", "OS", "DBMS", "CN", "SDLC"]
        },
        projects: [
            {
                name: "FlashEngine",
                tech: ["Java", "Java Networking", "Java Streams", "Concurrency"],
                description: "High-concurrency flash sale processing system with lock-free inventory allocation, embedded REST endpoints, and 100-request contention simulation",
                date: "2026",
                github: "https://github.com/Shreeja-88"
            },
            {
                name: "GitHub Portfolio Analyzer",
                tech: ["Python", "GitHub API", "Data Analysis"],
                description: "AI-inspired developer evaluation tool analyzing GitHub profiles using recruiter-style metrics",
                date: "Feb 2026",
                github: "https://github.com/Shreeja-88/github-portfolio-analyzer.git"
            },
            {
                name: "Empathy Encryption Engine",
                tech: ["Node.js", "Express.js", "JavaScript"],
                description: "Full-stack security tool with entropy-based password strength evaluation and real-time feedback",
                date: "Feb 2026",
                github: "https://github.com/Shreeja-88/empathy-encryption-engine.git"
            },
            {
                name: "Trainer's Search App",
                tech: ["Django REST Framework", "React.js", "SQL"],
                description: "Full-stack web application with RESTful APIs for trainer management and dynamic search",
                date: "Nov 2025",
                github: "https://github.com/Shreeja-88/Trainer-s-Search-App.git"
            },
            {
                name: "Scriptly - Web IDE",
                tech: ["HTML5", "CSS3", "JavaScript"],
                description: "Browser-based interactive code editor with real-time preview and live editing features",
                date: "Jan 2026",
                github: "https://github.com/Shreeja-88/scriptly.git"
            },
            {
                name: "Pyra - Smart AI Assistant",
                tech: ["Python", "NLP", "Tkinter"],
                description: "Python-based virtual assistant with voice/text I/O, web search, entertainment, and system control",
                date: "Aug 2025",
                github: "https://github.com/Shreeja-88/Pyra-Your-Smart-AI-Assistant-"
            },
            {
                name: "TransitOptimizer",
                tech: ["Java", "OOP", "CLI"],
                description: "Java CLI tool evaluating public transit routes using travel time, fare, and capacity heuristics",
                date: "Oct 2025",
                github: "https://github.com/Shreeja-88/TransitOptimizer-Java-based-Transit-Route-Evaluator.git"
            }
        ],
        achievements: [
            "Infosys Springboard Pragati: Path to Future | Cohort 9 - Present",
            "UnsaidTalks Empathy Encryption Hackathon - Top 1 Rank (Feb 2026)",
            "UnsaidTalks GitHub Analyzer Hackathon - Top 10 Rank Holder (Feb 2026)",
            "Flipkart Girls Wanna Code 7.0 - Shortlisted to QA Round (Feb 2026)",
            "Global Sustainability Challenge - South Asia Regional Finalist (Dec 2025-Feb 2026)",
            "Hacktoberfest 2025 - Super Contributor (6+ accepted PRs) (Oct 2025)",
            "Code4EdTech Hackathon 2025 - Participant (Sep 2025)"
        ],
        certifications: [
            "Data Structures - Coursera",
            "GfG Python Skill Up - GeeksforGeeks",
            "Design and Analysis of Algorithms - CodeChef",
            "Version Control with Git - Coursera"
        ]
    };

    // ===================================
    // AI Response Logic
    // ===================================
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();

        // Greeting responses
        if (message.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/)) {
            return `Hello! I'm Shreeja's AI assistant. I can help you learn about her skills, projects, achievements, or how to get in touch. What would you like to know?`;
        }

        // Skills inquiries
        if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
            let response = `Shreeja has expertise in:\n\n`;
            response += `**Programming:** ${portfolioData.skills.programming.join(', ')}\n\n`;
            response += `**Backend:** ${portfolioData.skills.backend.join(', ')}\n\n`;
            response += `**Frontend:** ${portfolioData.skills.frontend.join(', ')}\n\n`;
            response += `**Databases:** ${portfolioData.skills.databases.join(', ')}\n\n`;
            response += `**AI/ML:** ${portfolioData.skills.ai.join(', ')}`;
            return response;
        }

        // Python specific
        if (message.includes('python')) {
            return `Yes. Shreeja uses Python for AI assistants, automation, GitHub API analysis, data structures, and backend-adjacent scripting. She also has a GfG Python Skill Up certification.`;
        }

        // JavaScript/React specific
        if (message.includes('javascript') || message.includes('react')) {
            return `Shreeja has JavaScript experience with React.js, ES6+, HTML5, CSS3, live browser interactions, and full-stack frontend integration. Check out her Trainer's Search App and Scriptly projects.`;
        }

        // Django/Backend
        if (message.includes('django') || message.includes('backend') || message.includes('api')) {
            return `Shreeja focuses on backend development with Spring Boot, REST APIs, JDBC, JUnit, Django REST Framework, and databases including MySQL, PostgreSQL, and SQLite. FlashEngine and Trainer's Search App are strong backend examples.`;
        }

        // Projects inquiries
        if (message.includes('project')) {
            let response = `Here are Shreeja's featured projects:\n\n`;
            portfolioData.projects.forEach((project, index) => {
                response += `${index + 1}. **${project.name}** (${project.date})\n`;
                response += `   ${project.description}\n`;
                response += `   Tech: ${project.tech.join(', ')}\n\n`;
            });
            response += `Would you like to know more about any specific project?`;
            return response;
        }

        // Specific project inquiries
        if (message.includes('flashengine') || message.includes('flash engine') || message.includes('concurrency')) {
            const p = portfolioData.projects[0];
            return `**${p.name}** is a high-concurrency Java flash sale processing system that simulates 100 concurrent client requests, prevents overselling, uses CAS and AtomicInteger for lock-free inventory allocation, and includes embedded REST endpoints.\n\nGitHub: ${p.github}`;
        }

        if (message.includes('github portfolio') || message.includes('portfolio analyzer')) {
            const p = portfolioData.projects[1];
            return `**${p.name}** is an AI-inspired developer evaluation tool that:\n- Analyzes GitHub profiles using recruiter-style metrics\n- Scores repository quality, contribution consistency, and tech stack diversity\n- Suggests improvements for stronger hiring visibility\n- Automates profile parsing and structured feedback generation\n\nGitHub: ${p.github}`;
        }

        if (message.includes('empathy encryption') || message.includes('password')) {
            const p = portfolioData.projects[2];
            return `**${p.name}** is a full-stack security tool that:\n- Evaluates password strength using entropy-based scoring\n- Provides real-time feedback and security guidance\n- Features a user-friendly interactive UI\n- Helps improve password hygiene with human-centered design\n\nGitHub: ${p.github}`;
        }

        if (message.includes('trainer') || message.includes('search app')) {
            const p = portfolioData.projects[3];
            return `**${p.name}** is a full-stack web application featuring:\n- RESTful APIs to manage and retrieve trainer data\n- Dynamic search functionality\n- React frontend integrated with Django backend\n- Responsive UI with optimized API calls\n\nGitHub: ${p.github}`;
        }

        if (message.includes('scriptly')) {
            const p = portfolioData.projects[4];
            return `**${p.name}** is a browser-based interactive IDE that provides:\n- Real-time code preview functionality\n- Dynamic rendering and live editing features\n- Clean, focused UI/UX design\n- Efficient client-side performance\n\nGitHub: ${p.github}`;
        }

        if (message.includes('pyra') || message.includes('ai assistant')) {
            const p = portfolioData.projects[5];
            return `**${p.name}** is a Python-based virtual assistant with:\n- Voice recognition and text-to-speech synthesis\n- Google/YouTube/Wikipedia search integration\n- System commands and app launches\n- Entertainment features including jokes and quotes\n- Built with SpeechRecognition, pyttsx3, and Tkinter\n\nGitHub: ${p.github}`;
        }

        if (message.includes('transit') || message.includes('optimizer')) {
            const p = portfolioData.projects[6];
            return `**${p.name}** is a Java CLI tool that:\n- Evaluates public transit routes for origin-destination pairs\n- Optimizes using travel time, fare, and capacity heuristics\n- Demonstrates clean OOP design patterns\n- Shows strong algorithmic problem-solving skills\n\nGitHub: ${p.github}`;
        }

        // Achievements inquiries
        if (message.includes('achievement') || message.includes('hackathon') || message.includes('award')) {
            let response = `Shreeja's notable achievements include:\n\n`;
            portfolioData.achievements.forEach((achievement, index) => {
                response += `${achievement}\n\n`;
            });
            return response;
        }

        // Hacktoberfest
        if (message.includes('hacktoberfest') || message.includes('open source')) {
            return `Shreeja earned the **Hacktoberfest 2025 Super Contributor** badge by submitting 6+ accepted pull requests, contributing to open-source projects, using Git collaboratively, and working with global communities.`;
        }

        // UnsaidTalks wins
        if (message.includes('unsaidtalks') || message.includes('rank 1') || message.includes('top 10') || message.includes('top 1')) {
            return `Shreeja has two standout results from UnsaidTalks hackathons:\n\n**Empathy Encryption Hackathon - Top 1 Rank** (Feb 2026)\n- Designed an AI-driven solution balancing security, empathy, and usability.\n\n**GitHub Analyzer Hackathon - Top 10 Rank** (Feb 2026)\n- Built automated GitHub profile evaluation with strong innovation and accuracy.\n\nThese wins highlight her problem-solving skills and ability to deliver high-impact solutions fast.`;
        }

        // Education inquiries
        if (message.includes('education') || message.includes('college') || message.includes('university') || message.includes('gpa')) {
            return `**Education:**\n${portfolioData.education.degree}\n${portfolioData.education.institution}\nCGPA: ${portfolioData.education.gpa}\nGraduating in ${portfolioData.education.graduation}\n\nShe also holds certifications in Data Structures, Python, Design and Analysis of Algorithms, and Version Control with Git.`;
        }

        // Contact inquiries
        if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('get in touch')) {
            return `**Get in touch with Shreeja:**\n\nEmail: ${portfolioData.contact.email}\nPhone: ${portfolioData.contact.phone}\n\n**Social Links:**\nLinkedIn: ${portfolioData.contact.linkedin}\nGitHub: ${portfolioData.contact.github}\nLeetCode: ${portfolioData.contact.leetcode}\nTwitter: ${portfolioData.contact.twitter}\n\nFeel free to reach out for collaborations or opportunities.`;
        }

        // Experience level
        if (message.includes('experience') || message.includes('intern')) {
            return `Shreeja is currently seeking **Software Engineering Internship** opportunities. She has backend and full-stack project experience, Java concurrency work, hackathon experience, open-source contributions, and academic excellence with a 9.32/10 CGPA.`;
        }

        // Work preference
        if (message.includes('looking for') || message.includes('seeking') || message.includes('opportunity')) {
            return `Shreeja is looking for software engineering internships, backend engineering opportunities, full-stack development roles, AI/ML-related projects, and collaborative engineering teams.`;
        }

        // Strengths
        if (message.includes('strength') || message.includes('best at') || message.includes('good at')) {
            return `Shreeja's key strengths include:\n1. Backend engineering with Java, REST APIs, Spring Boot, and JDBC\n2. Problem-solving and algorithmic thinking\n3. Concurrent systems and lock-free design from FlashEngine\n4. Full-stack implementation with Django REST Framework and React\n5. Generative AI fundamentals and prompt engineering\n6. Open-source and hackathon collaboration\n\nHer 9.32/10 CGPA and project work demonstrate strong technical consistency.`;
        }

        // Resume
        if (message.includes('resume') || message.includes('cv')) {
            return `You can download Shreeja's resume from the About section on this portfolio website. It includes detailed information about her education, skills, projects, and achievements.\n\nOr feel free to reach out directly at: ${portfolioData.contact.email}`;
        }

        // Thank you
        if (message.includes('thank')) {
            return `You're welcome. Feel free to ask me anything else about Shreeja's work, skills, or how to get in touch.`;
        }

        // Goodbye
        if (message.includes('bye') || message.includes('goodbye')) {
            return `Goodbye. Thanks for checking out Shreeja's portfolio.`;
        }

        // GitHub/LeetCode
        if (message.includes('github')) {
            return `Check out Shreeja's GitHub for her projects:\n${portfolioData.contact.github}\n\nHer work includes Java systems, Django apps, React applications, Python tools, and AI-powered utilities.`;
        }

        if (message.includes('leetcode') || message.includes('coding')) {
            return `Shreeja actively practices DSA on LeetCode:\n${portfolioData.contact.leetcode}\n\nShe also has a strong foundation in data structures and algorithms, shown through her projects and academic performance.`;
        }

        // Default response
        return `I can help you with information about:\n- Shreeja's skills and technologies\n- Her projects and GitHub repositories\n- Achievements and hackathons\n- Education and certifications\n- Contact information\n\nWhat would you like to know?`;
    }

    // ===================================
    // Message Handling
    // ===================================
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        const p = document.createElement('p');
        
        // Convert markdown-style formatting to HTML
        const formattedMessage = message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
        p.innerHTML = formattedMessage;
        
        content.appendChild(p);
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    // ===================================
    // Form Submission
    // ===================================
    chatbotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userMessage = chatbotInput.value.trim();
        if (userMessage === '') return;
        
        // Add user message
        addMessage(userMessage, true);
        chatbotInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate AI thinking time
        setTimeout(() => {
            removeTypingIndicator();
            const botResponse = getBotResponse(userMessage);
            addMessage(botResponse, false);
        }, 1000 + Math.random() * 1000);
    });

    // ===================================
    // Suggestion Buttons
    // ===================================
    suggestionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const message = button.dataset.message;
            chatbotInput.value = message;
            chatbotForm.dispatchEvent(new Event('submit'));
        });
    });

    // ===================================
    // Welcome message when user opens chatbot
    // ===================================
    chatbotToggle.addEventListener('click', () => {
        // show tip only when window is first opened and only initial bot greeting exists
        if (chatbotWindow.classList.contains('active') && chatbotMessages.children.length === 1) {
            setTimeout(() => {
                addMessage(`I can answer questions about:\n- Programming skills\n- Project details\n- Hackathon achievements\n- Contact information\n\nTry asking something specific.`, false);
            }, 500);
        }
    });

});
