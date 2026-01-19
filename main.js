const portfolioData = {
  skills: [
    {
      category: 'Frontend Development',
      icon: '🎨',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS']
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      technologies: ['Node.js', 'Python', 'Express', 'Django', 'REST APIs', 'GraphQL']
    },
    {
      category: 'AI & Machine Learning',
      icon: '🤖',
      technologies: ['TensorFlow', 'PyTorch', 'Natural Language Processing', 'Computer Vision']
    },
    {
      category: 'Database & Cloud',
      icon: '☁️',
      technologies: ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      category: 'Tools & Workflows',
      icon: '🛠️',
      technologies: ['Git', 'CI/CD', 'Agile', 'Jira', 'Testing', 'DevOps']
    },
    {
      category: 'Mobile Development',
      icon: '📱',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps']
    }
  ],
  experience: [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Labs',
      period: '2022 - Present',
      description: 'Led development of scalable web applications serving 100K+ users. Implemented AI-powered features and optimized system performance by 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      title: 'Lead Developer',
      company: 'Digital Solutions Inc',
      period: '2020 - 2022',
      description: 'Managed a team of 5 developers. Architected and delivered enterprise-level solutions for Fortune 500 clients.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Software Engineer',
      company: 'StartUp Ventures',
      period: '2018 - 2020',
      description: 'Built and maintained multiple client projects. Developed RESTful APIs and modern web applications.',
      technologies: ['JavaScript', 'Express', 'React', 'MySQL']
    }
  ],
  projects: [
    {
      title: 'AI-Powered Content Generator',
      description: 'Built an intelligent content generation platform using GPT-4 and custom ML models. Serves 10,000+ monthly active users.',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      link: '#'
    },
    {
      title: 'Real-Time Collaboration Platform',
      description: 'Developed a real-time collaborative workspace with video conferencing, screen sharing, and document editing.',
      technologies: ['WebRTC', 'Socket.io', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'E-Commerce Analytics Dashboard',
      description: 'Created comprehensive analytics dashboard for e-commerce businesses with predictive insights and visualizations.',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'Designed and built a cross-platform fitness tracking app with AI-powered workout recommendations.',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
      link: '#'
    }
  ],
  achievements: [
    {
      title: 'Best Innovation Award',
      description: 'Awarded for developing groundbreaking AI solution',
      year: '2023'
    },
    {
      title: 'Tech Leadership Excellence',
      description: 'Recognized for exceptional team leadership',
      year: '2022'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to major open-source projects',
      year: 'Ongoing'
    },
    {
      title: 'Published Research Paper',
      description: 'Machine Learning applications in web development',
      year: '2021'
    },
    {
      title: 'Hackathon Winner',
      description: 'First place in National Tech Hackathon',
      year: '2020'
    },
    {
      title: 'Certified Cloud Architect',
      description: 'AWS Solutions Architect Professional',
      year: '2022'
    }
  ],
  socialLinks: [
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: '#', icon: 'twitter' }
  ]
};

function renderSkills() {
  const container = document.getElementById('skills-container');
  container.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card rounded-2xl p-6 card-3d fade-in">
      <div class="text-4xl mb-4">${skill.icon}</div>
      <h3 class="text-xl font-semibold text-gray-800 mb-4">${skill.category}</h3>
      <div class="flex flex-wrap gap-2">
        ${skill.technologies.map(tech => `
          <span class="px-3 py-1 bg-white/50 rounded-full text-sm text-gray-700 border border-gray-300">
            ${tech}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderExperience() {
  const container = document.getElementById('experience-container');
  container.innerHTML = portfolioData.experience.map(exp => `
    <div class="skill-card rounded-2xl p-8 card-3d fade-in">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 class="text-2xl font-semibold text-gray-800">${exp.title}</h3>
          <p class="text-lg text-gray-600">${exp.company}</p>
        </div>
        <span class="text-gray-600 mt-2 md:mt-0">${exp.period}</span>
      </div>
      <p class="text-gray-700 mb-4 leading-relaxed">${exp.description}</p>
      <div class="flex flex-wrap gap-2">
        ${exp.technologies.map(tech => `
          <span class="px-3 py-1 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full text-sm text-gray-700">
            ${tech}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = portfolioData.projects.map(project => `
    <div class="skill-card rounded-2xl p-8 card-3d fade-in">
      <h3 class="text-2xl font-semibold text-gray-800 mb-3">${project.title}</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">${project.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${project.technologies.map(tech => `
          <span class="px-3 py-1 bg-white/50 rounded-full text-sm text-gray-700 border border-gray-300">
            ${tech}
          </span>
        `).join('')}
      </div>
      <a href="${project.link}" class="inline-block text-gray-700 font-semibold hover:text-gray-900 transition-colors">
        View Project →
      </a>
    </div>
  `).join('');
}

function renderAchievements() {
  const container = document.getElementById('achievements-container');
  container.innerHTML = portfolioData.achievements.map(achievement => `
    <div class="skill-card rounded-2xl p-6 card-3d fade-in text-center">
      <div class="text-3xl mb-3">🏆</div>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">${achievement.title}</h3>
      <p class="text-gray-600 text-sm mb-2">${achievement.description}</p>
      <span class="text-gray-500 text-xs">${achievement.year}</span>
    </div>
  `).join('');
}

function renderSocialLinks() {
  const container = document.getElementById('social-links');
  const icons = {
    github: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    linkedin: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
    twitter: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>'
  };

  container.innerHTML = portfolioData.socialLinks.map(link => `
    <a href="${link.url}" class="text-gray-700 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
      ${icons[link.icon]}
    </a>
  `).join('');
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

function setupParallax() {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');

        parallaxElements.forEach(el => {
          const speed = el.dataset.speed || 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });

        ticking = false;
      });

      ticking = true;
    }
  });
}

function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function generateSessionId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function getOrCreateSessionId() {
  let sessionId = localStorage.getItem('portfolio_chat_session_id');

  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem('portfolio_chat_session_id', sessionId);
  }

  return sessionId;
}

class Chatbot {
  constructor() {
    this.chatWindow = document.getElementById('chat-window');
    this.chatButton = document.getElementById('chat-button');
    this.closeButton = document.getElementById('close-chat');
    this.chatForm = document.getElementById('chat-form');
    this.chatInput = document.getElementById('chat-input');
    this.messagesContainer = document.getElementById('chat-messages');
    this.sessionId = getOrCreateSessionId();
    this.apiUrl = 'https://akshu-automation.app.n8n.cloud/webhook/rag-portfolio';

    this.init();
  }

  init() {
    this.chatButton.addEventListener('click', () => this.openChat());
    this.closeButton.addEventListener('click', () => this.closeChat());
    this.chatForm.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  openChat() {
    this.chatWindow.classList.add('open');
    this.chatInput.focus();
  }

  closeChat() {
    this.chatWindow.classList.remove('open');
  }

  addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = content;
    this.messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();
  }

  showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    this.messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  async handleSubmit(e) {
    e.preventDefault();

    const message = this.chatInput.value.trim();
    if (!message) return;

    this.addMessage(message, true);
    this.chatInput.value = '';

    this.showTypingIndicator();

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: this.sessionId,
          message: message
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      this.hideTypingIndicator();

if (data.output) {
  this.addMessage(data.output, false);
} else if (data.response) {
  this.addMessage(data.response, false);
} else if (data.message) {
  this.addMessage(data.message, false);
} else if (typeof data === 'string') {
  this.addMessage(data, false);
} else {
  console.warn("Unexpected response:", data);
  this.addMessage(
    'I received your message but got an unexpected response format.',
    false
  );
}


    } catch (error) {
      console.error('Chat error:', error);
      this.hideTypingIndicator();
      this.addMessage('Sorry, I encountered an error while processing your request. Please try again later.', false);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderExperience();
  renderProjects();
  renderAchievements();
  renderSocialLinks();
  setupScrollAnimations();
  setupParallax();
  setupMobileMenu();
  setupSmoothScroll();

  new Chatbot();

  setTimeout(() => {
    setupScrollAnimations();
  }, 100);
});
