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
        title: "Computer Science Engineering Student",
        education: {
            institution: "The National Institute of Engineering",
            degree: "B.E. in Computer Science",
            gpa: "9.29",
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
            programming: ["Python", "Java", "JavaScript", "SQL"],
            backend: ["Django REST Framework", "RESTful API Design", "Authentication", "Token-based Auth"],
            frontend: ["React.js", "HTML5", "CSS3", "ES6+"],
            databases: ["MySQL", "PostgreSQL", "SQLite"],
            ai: ["NLP Chatbot Development", "Python Automation", "Machine Learning"],
            tools: ["Git", "GitHub", "VS Code", "Eclipse", "Netlify", "Vercel", "Railway"],
            concepts: ["Data Structures", "Algorithms", "OOP", "OS", "DBMS", "System Design"]
        },
        projects: [
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
                name: "Scriptly — Web IDE",
                tech: ["HTML5", "CSS3", "JavaScript"],
                description: "Browser-based interactive code editor with real-time preview and live editing features",
                date: "Jan 2026",
                github: "https://github.com/Shreeja-88/scriptly.git"
            },
            {
                name: "Pyra — Smart AI Assistant",
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
            "UnsaidTalks Empathy Encryption Hackathon — 🥇 Top 1 Rank (Feb 2026)",
            "UnsaidTalks GitHub Analyzer Hackathon — Top 10 Rank (Feb 2026)",
            "Flipkart Girls Wanna Code 7.0 — Shortlisted to QA Round (Feb 2026)",
            "Global Sustainability Challenge — South Asia Regional Finalist (Dec 2025–Feb 2026)",
            "Hacktoberfest 2025 — Super Contributor (6+ accepted PRs) (Oct 2025)",
            "Code4EdTech Hackathon 2025 — Participant (Sep 2025)"
        ],
        certifications: [
            "Data Structures - Coursera",
            "GfG Python Skill Up - GeeksforGeeks",
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
            return `Hello! 👋 I'm Shreeja's AI assistant. I can help you learn about her skills, projects, achievements, or how to get in touch. What would you like to know?`;
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
            return `Yes! Shreeja is proficient in Python and has used it for:\n• Building AI assistants (Pyra project)\n• Web development with Django REST Framework\n• Automation and scripting\n• Data structures and algorithms\n\nShe also has a GfG Python Skill Up certification!`;
        }

        // JavaScript/React specific
        if (message.includes('javascript') || message.includes('react')) {
            return `Shreeja has strong JavaScript skills including:\n• React.js for building interactive UIs\n• ES6+ modern JavaScript features\n• Frontend development (HTML5, CSS3)\n• Building full-stack applications with React frontend\n\nCheck out her Trainer's Search App and Scriptly projects!`;
        }

        // Django/Backend
        if (message.includes('django') || message.includes('backend') || message.includes('api')) {
            return `Shreeja specializes in backend development with:\n• Django REST Framework for building APIs\n• RESTful API design principles\n• Token-based authentication & authorization\n• Database management (MySQL, PostgreSQL, SQLite)\n\nHer Trainer's Search App showcases these skills perfectly!`;
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
        if (message.includes('github portfolio') || message.includes('portfolio analyzer')) {
            const p = portfolioData.projects[0];
            return `**${p.name}** is an AI-inspired developer evaluation tool that:\n• Analyzes GitHub profiles using recruiter-style metrics\n• Scores repository quality, contribution consistency & tech stack diversity\n• Suggests improvements for stronger hiring visibility\n• Automates profile parsing and structured feedback generation\n\n🔗 GitHub: ${p.github}`;
        }

        if (message.includes('empathy encryption') || message.includes('password')) {
            const p = portfolioData.projects[1];
            return `**${p.name}** is a full-stack security tool that:\n• Evaluates password strength using entropy-based scoring\n• Provides real-time feedback and security guidance\n• Features a user-friendly interactive UI\n• Helps improve password hygiene with human-centered design\n\n🔗 GitHub: ${p.github}`;
        }

        if (message.includes('trainer') || message.includes('search app')) {
            const p = portfolioData.projects[2];
            return `**${p.name}** is a full-stack web application featuring:\n• RESTful APIs to manage and retrieve trainer data\n• Dynamic search functionality\n• React frontend integrated with Django backend\n• Responsive UI with optimized API calls\n\n🔗 GitHub: ${p.github}`;
        }

        if (message.includes('scriptly')) {
            const p = portfolioData.projects[3];
            return `**${p.name}** is a browser-based interactive IDE that provides:\n• Real-time code preview functionality\n• Dynamic rendering and live editing features\n• Clean, focused UI/UX design\n• Efficient client-side performance\n\n🔗 GitHub: ${p.github}`;
        }

        if (message.includes('pyra') || message.includes('ai assistant')) {
            const p = portfolioData.projects[4];
            return `**${p.name}** is a Python-based virtual assistant with:\n• Voice recognition and text-to-speech synthesis\n• Google/YouTube/Wikipedia search integration\n• System commands and app launches\n• Entertainment features (jokes, quotes)\n• Built with SpeechRecognition, pyttsx3, and Tkinter\n\n🔗 GitHub: ${p.github}`;
        }

        if (message.includes('transit') || message.includes('optimizer')) {
            const p = portfolioData.projects[5];
            return `**${p.name}** is a Java CLI tool that:\n• Evaluates public transit routes for origin–destination pairs\n• Optimizes using travel time, fare, and capacity heuristics\n• Demonstrates clean OOP design patterns\n• Shows strong algorithmic problem-solving skills\n\n🔗 GitHub: ${p.github}`;
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
            return `Shreeja earned the **Hacktoberfest 2025 Super Contributor** badge by:\n• Submitting 6+ accepted pull requests\n• Contributing to various open-source projects\n• Demonstrating version control proficiency\n• Collaborating in global communities\n\nThis shows her commitment to open-source development!`;
        }

        // UnsaidTalks wins
        if (message.includes('unsaidtalks') || message.includes('rank 1') || message.includes('top 10') || message.includes('top 1')) {
            return `Shreeja has two standout results from UnsaidTalks hackathons:\n\n🥇 **Empathy Encryption Hackathon — Top 1 Rank** (Feb 2026)\n• Designed an AI-driven solution balancing security, empathy, and usability.\n\n🏆 **GitHub Analyzer Hackathon — Top 10 Rank** (Feb 2026)\n• Built automated GitHub profile evaluation with strong innovation and accuracy.\n\nThese wins highlight her problem-solving skills and ability to deliver high-impact solutions fast!`;
        }

        // Education inquiries
        if (message.includes('education') || message.includes('college') || message.includes('university') || message.includes('gpa')) {
            return `🎓 **Education:**\n${portfolioData.education.degree}\n${portfolioData.education.institution}\nGPA: ${portfolioData.education.gpa}\nGraduating in ${portfolioData.education.graduation}\n\nShe also holds certifications in:\n• Data Structures (Coursera)\n• Python (GeeksforGeeks)\n• Version Control with Git (Coursera)`;
        }

        // Contact inquiries
        if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('get in touch')) {
            return `**Get in touch with Shreeja:**\n\n📧 Email: ${portfolioData.contact.email}\n\n🔗 **Social Links:**\nLinkedIn: ${portfolioData.contact.linkedin}\nGitHub: ${portfolioData.contact.github}\nLeetCode: ${portfolioData.contact.leetcode}\nTwitter: ${portfolioData.contact.twitter}\n\nFeel free to reach out for collaborations or opportunities!`;
        }

        // Experience level
        if (message.includes('experience') || message.includes('intern')) {
            return `Shreeja is currently seeking **SDE Intern** opportunities. She has:\n• Strong foundation in full-stack development\n• Multiple project implementations\n• Hackathon experience\n• Open-source contributions\n• Academic excellence (9.29 GPA)\n\nShe's eager to contribute to scalable software solutions while learning modern engineering practices!`;
        }

        // Work preference
        if (message.includes('looking for') || message.includes('seeking') || message.includes('opportunity')) {
            return `Shreeja is looking for:\n1) SDE Intern positions\n2) Full-stack development roles\n3) Backend engineering opportunities\n✅ AI/ML related projects\n✅ Collaborative team environments\n\nShe's passionate about building scalable solutions and continuously learning!`;
        }

        // Strengths
        if (message.includes('strength') || message.includes('best at') || message.includes('good at')) {
            return `Shreeja's key strengths include:\n1) Full-stack development (Django + React)\n2) Problem-solving and algorithmic thinking\n3) Building RESTful APIs\n4) UI/UX implementation\n5) Quick learning and adaptability\n6) Team collaboration (hackathons)\n7) Open-source contribution\n\nHer 9.29 GPA and multiple successful projects demonstrate her technical excellence!`;
        }

        // Resume
        if (message.includes('resume') || message.includes('cv')) {
            return `You can download Shreeja's resume from the About section on this portfolio website. It includes detailed information about her education, skills, projects, and achievements.\n\nOr feel free to reach out directly at: ${portfolioData.contact.email}`;
        }

        // Thank you
        if (message.includes('thank')) {
            return `You're welcome! 😊 Feel free to ask me anything else about Shreeja's work, skills, or how to get in touch!`;
        }

        // Goodbye
        if (message.includes('bye') || message.includes('goodbye')) {
            return `Goodbye! Thanks for checking out Shreeja's portfolio. Feel free to come back anytime! 👋`;
        }

        // GitHub/LeetCode
        if (message.includes('github')) {
            return `📂 Check out Shreeja's GitHub for all her projects:\n${portfolioData.contact.github}\n\nShe has repositories for all her major projects including Django apps, React applications, Python tools, and more!`;
        }

        if (message.includes('leetcode') || message.includes('coding')) {
            return `💻 Shreeja actively practices DSA on LeetCode:\n${portfolioData.contact.leetcode}\n\nShe also has a strong foundation in data structures and algorithms, demonstrated through her projects and academic performance!`;
        }

        // Default response
        return `I can help you with information about:\n• Shreeja's skills and technologies\n• Her projects and GitHub repositories\n• Achievements and hackathons\n• Education and certifications\n• Contact information\n\nWhat would you like to know?`;
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
                addMessage(`I can answer questions about:\n• Programming skills\n• Project details\n• Hackathon achievements\n• Contact information\n\nTry asking something specific!`, false);
            }, 500);
        }
    });

});