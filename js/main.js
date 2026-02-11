// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1500);
    });

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });
        
        function animateFollower() {
            const distX = mouseX - followerX;
            const distY = mouseY - followerY;
            followerX += distX / 5;
            followerY += distY / 5;
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
            requestAnimationFrame(animateFollower);
        }
        animateFollower();
        
        const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, .project-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursorFollower.style.transform = 'scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
            });
        });
    }

    // Navigation
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });
    
    const sections = document.querySelectorAll('section[id]');
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    }
    window.addEventListener('scroll', highlightNavigation);

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // Typewriter Effect
    const typewriterElement = document.getElementById('typewriter');
    const texts = ['Full-Stack Developer', 'Problem Solver', 'AI Enthusiast', 'Open Source Contributor'];
    let textIndex = 0, charIndex = 0, isDeleting = false, typeSpeed = 100;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        setTimeout(typeWriter, typeSpeed);
    }
    typeWriter();

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    // Scroll Animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .stat-item, .education-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Contact Form (guarded in case the form is commented out)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            console.log('Form submitted:', data);
        });

        const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }

    // Sliding Puzzle (3x3) interactions
    const slidingPuzzle = document.getElementById('sliding-puzzle');
    if (slidingPuzzle) {
        const size = parseInt(slidingPuzzle.dataset.size, 10) || 3;
        const board = document.getElementById('puzzle-board');
        const shuffleBtn = document.getElementById('puzzle-shuffle');
        const resetBtn = document.getElementById('puzzle-reset');
        const puzzleModal = document.getElementById('puzzle-modal');
        const puzzleClose = document.getElementById('puzzle-close');
        const copyEmailBtn = document.getElementById('copy-email');
        const imgSrc = 'assets/images/profile.jpg';

        const total = size * size;
        let positions = Array.from({ length: total }, (_, i) => i); // positions[pos] = tileIndex or emptyIndex
        const emptyIndex = total - 1;

        function createBoard() {
            board.innerHTML = '';
            positions.forEach((tileIndex, pos) => {
                const tile = document.createElement('div');
                tile.className = 'puzzle-tile slide';
                tile.dataset.pos = pos;
                if (tileIndex === emptyIndex) {
                    tile.classList.add('empty');
                    tile.setAttribute('aria-hidden', 'true');
                } else {
                    const row = Math.floor(tileIndex / size);
                    const col = tileIndex % size;
                    tile.style.backgroundImage = `url(${imgSrc})`;
                    tile.style.backgroundSize = `${size * 100}% ${size * 100}%`;
                    tile.style.backgroundPosition = `${(col / (size - 1)) * 100}% ${(row / (size - 1)) * 100}%`;
                    tile.setAttribute('role', 'button');
                    tile.setAttribute('tabindex', '0');
                }
                tile.addEventListener('click', () => handleTileClick(pos));
                tile.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleTileClick(pos); });
                board.appendChild(tile);
            });
        }

        function getNeighbors(pos) {
            const neighbors = [];
            const r = Math.floor(pos / size);
            const c = pos % size;
            const pushIf = (nr, nc) => {
                if (nr >= 0 && nr < size && nc >= 0 && nc < size) neighbors.push(nr * size + nc);
            };
            pushIf(r - 1, c);
            pushIf(r + 1, c);
            pushIf(r, c - 1);
            pushIf(r, c + 1);
            return neighbors;
        }

        function handleTileClick(pos) {
            const emptyPos = positions.indexOf(emptyIndex);
            const neighbors = getNeighbors(pos);
            if (neighbors.includes(emptyPos)) {
                // swap
                const tmp = positions[pos];
                positions[pos] = positions[emptyPos];
                positions[emptyPos] = tmp;
                createBoard();
                if (isSolved()) showModal();
            }
        }

        function isSolved() {
            for (let i = 0; i < total; i++) {
                if (positions[i] !== i) return false;
            }
            return true;
        }

        function shuffle() {
            // perform many random legal moves from solved state to guarantee solvability
            positions = Array.from({ length: total }, (_, i) => i);
            let emptyPos = positions.indexOf(emptyIndex);
            const moves = 100;
            for (let i = 0; i < moves; i++) {
                const neighbors = getNeighbors(emptyPos);
                const pick = neighbors[Math.floor(Math.random() * neighbors.length)];
                // swap emptyPos and pick
                positions[emptyPos] = positions[pick];
                positions[pick] = emptyIndex;
                emptyPos = pick;
            }
            // ensure not already solved
            if (isSolved()) shuffle();
            createBoard();
        }

        function reset() {
            positions = Array.from({ length: total }, (_, i) => i);
            createBoard();
            if (puzzleModal) { puzzleModal.classList.remove('open'); puzzleModal.setAttribute('aria-hidden', 'true'); }
        }

        function showModal() {
            if (puzzleModal) {
                puzzleModal.classList.add('open');
                puzzleModal.setAttribute('aria-hidden', 'false');
            }
        }

        // controls
        shuffleBtn && shuffleBtn.addEventListener('click', shuffle);
        resetBtn && resetBtn.addEventListener('click', reset);
        if (puzzleClose) puzzleClose.addEventListener('click', () => { puzzleModal.classList.remove('open'); puzzleModal.setAttribute('aria-hidden', 'true'); });
        if (puzzleModal) puzzleModal.addEventListener('click', (e) => { if (e.target === puzzleModal) { puzzleModal.classList.remove('open'); puzzleModal.setAttribute('aria-hidden', 'true'); } });

        if (copyEmailBtn) {
            copyEmailBtn.addEventListener('click', () => {
                const email = 'itshreeja@gmail.com';
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(email).then(() => {
                        const original = copyEmailBtn.textContent;
                        copyEmailBtn.textContent = 'Copied!';
                        setTimeout(() => copyEmailBtn.textContent = original, 1500);
                    }).catch(() => {
                        alert('Copy failed. Email: ' + email);
                    });
                } else {
                    alert('Copy not supported. Email: ' + email);
                }
            });
        }

        // keyboard arrows move tile into empty slot if adjacent
        document.addEventListener('keydown', (e) => {
            if (!slidingPuzzle) return;
            const emptyPos = positions.indexOf(emptyIndex);
            const r = Math.floor(emptyPos / size), c = emptyPos % size;
            let target = null;
            if (e.key === 'ArrowUp') target = (r + 1 < size) ? (r + 1) * size + c : null;
            if (e.key === 'ArrowDown') target = (r - 1 >= 0) ? (r - 1) * size + c : null;
            if (e.key === 'ArrowLeft') target = (c + 1 < size) ? r * size + (c + 1) : null;
            if (e.key === 'ArrowRight') target = (c - 1 >= 0) ? r * size + (c - 1) : null;
            if (target !== null) {
                // swap target and empty
                positions[emptyPos] = positions[target];
                positions[target] = emptyIndex;
                createBoard();
                if (isSolved()) showModal();
            }
        });

        // initialize
        createBoard();
    }

        /* ------------------ Playground: Login, Games, Leaderboard, Coding Widget ------------------ */
        const loginBtn = document.getElementById('login-btn');
        const logoutBtn = document.getElementById('logout-btn');
        const usernameDisplay = document.getElementById('username-display');
        const leaderboardKey = 'pp_leaderboard_v1';

        function getUser() {
            return localStorage.getItem('pp_user') || null;
        }
        function setUser(name) {
            if (name) localStorage.setItem('pp_user', name);
            else localStorage.removeItem('pp_user');
            usernameDisplay.textContent = getUser() || 'Guest';
            loginBtn.style.display = getUser() ? 'none' : 'inline-block';
            logoutBtn.style.display = getUser() ? 'inline-block' : 'none';
        }

        // simple prompt-based login (replace with proper auth later)
        if (loginBtn) loginBtn.addEventListener('click', () => {
            const name = prompt('Enter a display name (used for leaderboard):');
            if (name && name.trim()) setUser(name.trim());
        });
        if (logoutBtn) logoutBtn.addEventListener('click', () => { setUser(null); });
        setUser(getUser());

        // Leaderboard helpers
        function loadLeaderboard() {
            try { return JSON.parse(localStorage.getItem(leaderboardKey) || '[]'); } catch(e) { return []; }
        }
        function saveScore(name, score) {
            if (!name) name = 'Guest';
            const list = loadLeaderboard();
            list.push({ name, score, ts: Date.now() });
            list.sort((a,b) => b.score - a.score);
            localStorage.setItem(leaderboardKey, JSON.stringify(list.slice(0,50)));
            renderLeaderboard();
        }
        function renderLeaderboard() {
            const el = document.getElementById('leaderboard-list');
            if (!el) return;
            const list = loadLeaderboard();
            el.innerHTML = '';
            list.slice(0,10).forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} — ${item.score}`;
                el.appendChild(li);
            });
        }
        renderLeaderboard();

        // Number Guessing Game
        let secret = Math.floor(Math.random()*100)+1;
        let attempts = 0;
        const guessInput = document.getElementById('guess-input');
        const guessBtn = document.getElementById('guess-btn');
        const newGameBtn = document.getElementById('newgame-btn');
        const guessFeedback = document.getElementById('guess-feedback');

        function newGame() { secret = Math.floor(Math.random()*100)+1; attempts = 0; if (guessInput) guessInput.value=''; if (guessFeedback) guessFeedback.textContent='Good luck!'; }
        if (guessBtn) guessBtn.addEventListener('click', () => {
            const val = parseInt(guessInput.value,10);
            if (!val || val<1||val>100) { guessFeedback.textContent='Enter a number between 1 and 100'; return; }
            attempts++;
            if (val === secret) {
                guessFeedback.textContent = `Correct! Attempts: ${attempts}`;
                // score: inverse of attempts, scaled
                const score = Math.max(1, Math.floor(1000 / attempts));
                saveScore(getUser() || 'Guest', score);
            } else if (val < secret) guessFeedback.textContent = 'Too low';
            else guessFeedback.textContent = 'Too high';
        });
        if (newGameBtn) newGameBtn.addEventListener('click', newGame);

        // Quick Quiz (client-side) — small sample
        const quizData = [
            { q: 'Which is a JavaScript data type?', choices:['Integer','String','Float'], answer:1 },
            { q: 'What HTML tag for script?', choices:['<script>','<js>','<code>'], answer:0 }
        ];
        let currentQuiz = 0; let quizScore = 0;
        function renderQuiz() {
            const area = document.getElementById('quiz-area');
            const ctrl = document.getElementById('quiz-controls');
            if (!area || !ctrl) return;
            area.innerHTML = '';
            ctrl.innerHTML = '';
            const item = quizData[currentQuiz];
            const h = document.createElement('h5'); h.textContent = item.q; area.appendChild(h);
            item.choices.forEach((c, idx) => {
                const btn = document.createElement('button'); btn.className='btn btn-secondary'; btn.textContent = c; btn.addEventListener('click', () => {
                    if (idx === item.answer) quizScore += 10;
                    currentQuiz++;
                    if (currentQuiz >= quizData.length) {
                        area.innerHTML = `<p>Quiz finished — score: ${quizScore}</p>`;
                        saveScore(getUser() || 'Guest', quizScore);
                        ctrl.innerHTML = '<button class="btn btn-secondary" id="quiz-restart">Restart Quiz</button>';
                        document.getElementById('quiz-restart').addEventListener('click', () => { currentQuiz=0; quizScore=0; renderQuiz(); });
                    } else renderQuiz();
                });
                area.appendChild(btn);
            });
        }
        renderQuiz();

        // Tabs
        document.querySelectorAll('.playground-tabs .tab').forEach(t => {
            t.addEventListener('click', () => {
                document.querySelectorAll('.playground-tabs .tab').forEach(x=>x.classList.remove('active'));
                t.classList.add('active');
                const tab = t.dataset.tab;
                document.getElementById('games-tab').style.display = tab==='games' ? 'block' : 'none';
                document.getElementById('coding-tab').style.display = tab==='coding' ? 'block' : 'none';
            });
        });

        // Coding widget: Monaco loader fallback and run in iframe
        const editorContainer = document.getElementById('editor-container');
        const runBtn = document.getElementById('run-code');
        const resetCodeBtn = document.getElementById('reset-code');
        const challengeSelect = document.getElementById('challenge-select');
        const loadTemplateBtn = document.getElementById('load-template');
        const iframe = document.getElementById('code-output');
        let monacoEditor = null;

        const templates = {
            reverse: `// Return the reversed digits of n as string\nfunction solve(n){\n    return String(n).split('').reverse().join('');\n}\nconsole.log(solve(12345));`,
            palindrome: `function solve(s){\n    const t = String(s);\n    return t === t.split('').reverse().join('');\n}\nconsole.log(solve('madam'));`,
            validateEmail: `function solve(email){\n    return /\\S+@\\S+\\.\\S+/.test(email);\n}\nconsole.log(solve('test@example.com'));`
        };

        function writeToIframe(code) {
            const doc = iframe.contentWindow.document;
                if (!iframe) return;
                const html = `<!doctype html><html><body><pre id="out"></pre><script>try{\n${code}\n}catch(e){document.getElementById('out').textContent = 'Error: '+e.message;}<\/script></body></html>`;
                // use srcdoc to avoid cross-origin/sandbox access issues
                try {
                    iframe.srcdoc = html;
                } catch (e) {
                    // fallback to document.write when srcdoc isn't supported
                    const doc = iframe.contentWindow.document;
                    doc.open();
                    doc.write(html);
                    doc.close();
                }
        }

        function initEditor() {
            if (!editorContainer) return;
            // If Monaco already loaded, create editor. Otherwise load loader and initialize.
            const createMonaco = () => {
                try {
                    monacoEditor = monaco.editor.create(editorContainer, { value: templates.reverse, language: 'javascript', minimap:{enabled:false} });
                    console.log('Monaco editor created');
                } catch (e) {
                    editorContainer.innerHTML = '<textarea id="fallback-editor" style="width:100%;height:100%" autofocus>' + templates.reverse + '</textarea>';
                    console.warn('Monaco failed to initialize, using fallback textarea');
                }
            };

            if (window.monaco) {
                createMonaco();
                return;
            }

            // load Monaco loader script
            const s = document.createElement('script');
            s.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.38.0/min/vs/loader.min.js';
            s.onload = () => {
                if (typeof require !== 'undefined') {
                    try {
                        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.38.0/min/vs' }});
                        require(['vs/editor/editor.main'], () => { createMonaco(); });
                    } catch (e) {
                        editorContainer.innerHTML = '<textarea id="fallback-editor" style="width:100%;height:100%">'+templates.reverse+'</textarea>';
                    }
                } else {
                    editorContainer.innerHTML = '<textarea id="fallback-editor" style="width:100%;height:100%">'+templates.reverse+'</textarea>';
                }
            };
            s.onerror = () => { editorContainer.innerHTML = '<textarea id="fallback-editor" style="width:100%;height:100%">'+templates.reverse+'</textarea>'; };
            document.body.appendChild(s);
        }
        initEditor();

        // Fallback creator to ensure typing works if Monaco fails to initialize
        function createFallbackEditor(reason) {
            if (!editorContainer) return;
            if (document.getElementById('fallback-editor')) return;
            editorContainer.innerHTML = '';
            const ta = document.createElement('textarea');
            ta.id = 'fallback-editor';
            ta.style.width = '100%';
            ta.style.height = '100%';
            ta.autofocus = true;
            ta.value = templates.reverse;
            editorContainer.appendChild(ta);
            const status = document.createElement('div');
            status.id = 'editor-status';
            status.style.fontSize = '12px';
            status.style.marginTop = '6px';
            status.style.color = 'var(--muted-color, #9ca3af)';
            status.textContent = reason ? 'Using plain editor: ' + reason : 'Using plain editor (Monaco unavailable)';
            editorContainer.appendChild(status);
            console.warn('Created fallback textarea editor:', reason);
        }

        // If Monaco doesn't appear within 3s, create fallback so user can type immediately
        setTimeout(() => {
            if (!monacoEditor && !document.getElementById('fallback-editor')) {
                createFallbackEditor('timeout waiting for Monaco');
            }
        }, 3000);

        // Make editor container focusable and forward clicks to Monaco or fallback textarea
        if (editorContainer) {
            editorContainer.setAttribute('tabindex', '0');
            editorContainer.addEventListener('click', () => {
                if (monacoEditor && typeof monacoEditor.focus === 'function') {
                    try { monacoEditor.focus(); } catch (e) { console.warn('monaco.focus failed', e); }
                } else {
                    const fb = document.getElementById('fallback-editor');
                    if (fb) fb.focus();
                }
            });
        }

        // If fallback textarea exists, allow Ctrl+Enter to run code
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                const active = document.activeElement;
                if (active && active.id === 'fallback-editor') {
                    e.preventDefault();
                    if (runBtn) runBtn.click();
                }
            }
        });

        if (loadTemplateBtn) loadTemplateBtn.addEventListener('click', () => {
            const v = (challengeSelect && templates[challengeSelect.value]) ? templates[challengeSelect.value] : templates.reverse;
            if (monacoEditor) monacoEditor.setValue(v);
            else {
                const fb = document.getElementById('fallback-editor');
                if (fb) fb.value = v;
            }
        });

        if (runBtn) runBtn.addEventListener('click', () => {
            const code = monacoEditor ? monacoEditor.getValue() : (document.getElementById('fallback-editor') && document.getElementById('fallback-editor').value) || 'console.log("no editor")';
            writeToIframe(code);
        });

        if (resetCodeBtn) resetCodeBtn.addEventListener('click', () => {
            const v = templates[challengeSelect.value] || templates.reverse;
            if (monacoEditor) monacoEditor.setValue(v); else document.getElementById('fallback-editor').value = v;
        });

        // render leaderboard initially
        renderLeaderboard();

    // Parallax Effect
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // Project Cards Tilt
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Stats Counter - FIXED VERSION
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    const countUp = (element) => {
        const target = parseFloat(element.dataset.value);
        const increment = target / 100;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.innerText = target % 1 !== 0 ? target.toFixed(2) : target;
                clearInterval(timer);
            } else {
                element.innerText = current % 1 !== 0 ? current.toFixed(2) : Math.floor(current);
            }
        }, 20);
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                stats.forEach(stat => {
                    if (!stat.dataset.value) {
                        stat.dataset.value = stat.innerText;
                    }
                    stat.innerText = '0';
                    countUp(stat);
                });
                stats.forEach(stat => statsObserver.unobserve(stat));
            }
        });
    }, { threshold: 0.5 });
    
    if (stats.length > 0) {
        statsObserver.observe(stats[0]);
    }

    // Console Easter Egg
    console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%cLooking at the code? I like your curiosity!', 'font-size: 14px; color: #64748b;');
    console.log('%cLet\'s connect: itshreeja@gmail.com', 'font-size: 14px; color: #6366f1;');
});