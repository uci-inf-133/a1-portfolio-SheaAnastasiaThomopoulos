
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
});
