
document.addEventListener('DOMContentLoaded', function() {
  const content = document.querySelector('.content');
  const footer = document.querySelector('.footer');
  
  if (!content || !footer) return;
  
  function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const footerTop = footer.offsetTop;
    
    const shrinkStart = footerTop - 400;
    const shrinkEnd = footerTop + 100;
    const scrollProgress = Math.max(0, Math.min(1, 
      (scrollPosition - shrinkStart) / (shrinkEnd - shrinkStart)
    ));
    
    if (scrollProgress > 0) {
      const scale = 1 - (scrollProgress * 0.2);
      const margin = scrollProgress * 100;
      const borderRadius = scrollProgress * 32;
      
      content.style.transform = `scale(${scale})`;
      content.style.marginLeft = `${margin}px`;
      content.style.marginRight = `${margin}px`;
      content.style.borderRadius = `${borderRadius}px`;
      content.style.overflow = 'hidden';
      content.style.boxShadow = scrollProgress > 0.1 
        ? `0 20px 60px rgba(0, 0, 0, ${0.1 * scrollProgress})` 
        : 'none';
    } else {
      content.style.transform = 'scale(1)';
      content.style.marginLeft = '0';
      content.style.marginRight = '0';
      content.style.borderRadius = '0';
      content.style.boxShadow = 'none';
    }
  }
  
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
  handleScroll();

  // Project Modal Functionality
  const projects = [
    {
      title: 'DFS Visualizer',
      date: 'June 21, 2025',
      description: 'An interactive visualizer that teaches Depth-First Search through step-by-step traversal and user interaction. Designed to help beginners understand recursion and graph exploration by making abstract concepts tangible. Built with education and accessibility in mind, emphasizing clarity over complexity.',
      tech: 'Python · Tkinter · Graph Traversal · Recursion',
      links: [
        { text: 'GitHub', url: 'https://github.com/SheaAnastasiaThomopoulos/dfs-visualizer-project' }
      ]
    },
    {
      title: 'Racing Agents (CarRacing-v3)',
      date: 'December 1, 2025',
      description: 'Trained reinforcement learning agents to drive in the Gymnasium CarRacing-v3 environment. Implemented and evaluated a DQN-based pipeline, experimenting with reward shaping and training stability. Analyzed performance trade-offs and documented insights from experimentation.',
      tech: 'Python · Reinforcement Learning · DQN · Gymnasium',
      links: [
        { text: 'GitHub', url: 'https://github.com/steve-w-chan/gymnasium_carracingv3_rl' },
        { text: 'Report', url: 'https://docs.google.com/document/d/1n8C3Sh8r-F5EjK8AMAiqjOFKr-7fNd6kRXUhCNVByl4/edit?tab=t.0' }
      ]
    },
    {
      title: 'WebReg Redesign',
      date: 'July 10, 2025',
      description: 'Redesigned the UC Irvine WebReg course registration system to improve usability, accessibility, and clarity for students. Conducted user research and interface analysis to identify pain points in course search, scheduling, and error feedback. Proposed design solutions focused on reducing cognitive load and improving the overall registration experience.',
      tech: 'UX Research · Interface Design · Accessibility · Figma',
      links: [
        { text: 'Interactive Figma', url: 'https://www.figma.com/proto/o6AzV17Lv8nhaKQClyWCjB/Project-3--mock-ups?node-id=1-25&p=f&t=oBODo33U9l4Vu8rW-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A25' },
        { text: 'Report', url: 'https://docs.google.com/document/d/1lDqnZ46HU2DxMCFQJ_sA5iBW6pmBJOYL97gBZH9pR7k/edit?tab=t.0#heading=h.88fvyhyt9rzm' }
      ]
    }
  ];

  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDate = document.getElementById('modalDate');
  const modalDescription = document.getElementById('modalDescription');
  const modalTech = document.getElementById('modalTech');
  const modalLinks = document.getElementById('modalLinks');
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  const projectTitles = document.querySelectorAll('.project-title');

  function openModal(projectIndex) {
    const project = projects[projectIndex];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalDate.textContent = project.date;
    modalDescription.textContent = project.description;
    modalTech.innerHTML = `<strong>${project.tech}</strong>`;
    
    modalLinks.innerHTML = '';
    if (project.links && project.links.length > 0) {
      project.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.text;
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        modalLinks.appendChild(linkElement);
      });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  projectTitles.forEach(title => {
    title.addEventListener('click', function() {
      const projectIndex = parseInt(this.getAttribute('data-project'));
      openModal(projectIndex);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});