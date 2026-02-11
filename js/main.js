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

        /* Login and leaderboard removed (server-room game uses local progress only) */

        // Server Room Escape : Replace mini-games with puzzle levels
        (function initServerRoom() {
            const sr = document.getElementById('server-room');
            if (!sr) return;
            const levelTitle = document.getElementById('sr-level-title');
            const promptEl = document.getElementById('sr-prompt');
            const inputEl = document.getElementById('sr-input');
            const submitBtn = document.getElementById('sr-submit');
            const hintBtn = document.getElementById('sr-hint');
            const feedbackEl = document.getElementById('sr-feedback');
            const nextBtn = document.getElementById('sr-next');
            const resetBtn = document.getElementById('sr-reset');

            const levels = [
                {
                    id: 'decode-base64',
                    title: 'Decode Base64',
                    prompt: 'SGVsbG8gU2hyZWVqYQ==',
                    hint: 'Decode the Base64 string to plain text (case-insensitive).',
                    check: (ans) => {
                        const n = normalizeAnswer(ans);
                        return n === 'hello shreeja' || n === 'hello shreeja' || n === 'hello shreeja ';
                    }
                },
                {
                    id: 'fix-json',
                    title: 'Fix broken JSON',
                    prompt: '{\n  "user": "shreeja",\n  "score": 42,\n}',
                    hint: 'Remove trailing commas to make valid JSON. What is the value of "score"? (just the number)',
                    check: (ans) => normalizeAnswer(ans) === '42' || String(ans).trim() === '42'
                },
                {
                    id: 'sql-injection',
                    title: 'Find SQL injection flaw',
                    prompt: "Query:\nSELECT * FROM users WHERE username = '$user' AND password = '$pass';\n\nWhat payload could bypass authentication?",
                    hint: "Common payload: ' OR '1'='1 or OR 1=1 --",
                    check: (ans) => /or\s*'1'\s*=\s*'1'/i.test(ans) || /or\s*1\s*=\s*1/i.test(ans) || /--/.test(ans)
                },
                {
                    id: 'api-error',
                    title: 'Identify API error',
                    prompt: '{\n  "status": "ok",\n  "data": null,\n  "error": { "code": 200, "message": "Missing field id" }\n}',
                    hint: 'Look for inconsistent HTTP status (200) together with an error object/code.',
                    check: (ans) => (/200/.test(ans) || /status\s*200/i.test(ans)) && /error|missing|inconsistent/i.test(ans)
                }
            ];

            let current = 0;

            function render() {
                const L = levels[current];
                levelTitle.textContent = `Level ${current+1}: ${L.title}`;
                promptEl.textContent = L.prompt;
                feedbackEl.textContent = '';
                inputEl.value = '';
                nextBtn.style.display = 'none';
                updateProgress();
            }

            function updateProgress() {
                const p = document.getElementById('sr-progress');
                if (!p) return;
                p.textContent = `(${current+1}/${levels.length})`;
            }

            function saveProgress() {
                localStorage.setItem('serverroom_progress', JSON.stringify({ level: current }));
            }

            function loadProgress() {
                try {
                    const v = JSON.parse(localStorage.getItem('serverroom_progress'));
                    if (v && typeof v.level === 'number') current = Math.min(v.level, levels.length-1);
                } catch(e){}
            }

            submitBtn.addEventListener('click', () => {
                const ans = inputEl.value || '';
                const ok = levels[current].check(ans);
                if (ok) {
                    feedbackEl.textContent = 'Correct! Press Next to continue.';
                    feedbackEl.style.color = 'var(--primary-color)';
                    nextBtn.style.display = 'inline-block';
                    // success animation + sound
                    if (promptEl) {
                        promptEl.classList.add('solved');
                        setTimeout(() => promptEl.classList.remove('solved'), 1400);
                    }
                    try { playSuccessTone(); } catch (e) { /* ignore audio errors */ }
                    saveProgress();
                } else {
                    feedbackEl.textContent = 'Incorrect — try again or ask for a hint.';
                    feedbackEl.style.color = 'var(--text-secondary)';
                }
            });

            hintBtn.addEventListener('click', () => {
                feedbackEl.textContent = levels[current].hint;
                feedbackEl.style.color = 'var(--text-secondary)';
            });

            nextBtn.addEventListener('click', () => {
                if (current < levels.length - 1) {
                    current++;
                    render();
                } else {
                    feedbackEl.textContent = 'You escaped the server room! Well done.';
                    feedbackEl.style.color = 'var(--primary-color)';
                    nextBtn.style.display = 'none';
                    localStorage.removeItem('serverroom_progress');
                }
            });

            resetBtn.addEventListener('click', () => {
                current = 0; render(); localStorage.removeItem('serverroom_progress');
            });

            // helper: normalize answers (remove punctuation, lowercase)
            function normalizeAnswer(s){ return String(s || '').toLowerCase().replace(/[\W_]+/g,' ').trim(); }

            // success sound using WebAudio
            function playSuccessTone(){
                try{
                    const Ctx = window.AudioContext || window.webkitAudioContext;
                    if (!Ctx) return;
                    const ctx = new Ctx();
                    const o = ctx.createOscillator();
                    const g = ctx.createGain();
                    o.type = 'sine';
                    o.frequency.value = 880;
                    o.connect(g);
                    g.connect(ctx.destination);
                    g.gain.value = 0.0001;
                    o.start();
                    g.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.02);
                    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
                    o.stop(ctx.currentTime + 0.52);
                }catch(e){/* ignore */}
            }

            // allow Enter to submit
            if (inputEl) inputEl.addEventListener('keydown', (e)=>{ if (e.key === 'Enter') submitBtn.click(); });

            loadProgress(); render();
        })();

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

        // Coding challenges removed — kept leaderboard rendering earlier.

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