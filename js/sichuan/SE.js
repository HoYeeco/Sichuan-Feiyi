      // 导航栏滚动效果
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          navbar.classList.add('bg-primary', 'shadow-lg');
          navbar.classList.remove('bg-transparent');
        } else {
          navbar.classList.remove('bg-primary', 'shadow-lg');
          navbar.classList.add('bg-transparent');
        }
      });
      
      // 作品过滤
      const filterButtons = document.querySelectorAll('.filter-btn');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // 移除所有按钮的活动状态
          filterButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-primary', 'text-white');
            btn.classList.add('bg-secondary', 'text-dark');
          });
          
          // 添加当前按钮的活动状态
          button.classList.add('active', 'bg-primary', 'text-white');
          button.classList.remove('bg-secondary', 'text-dark');
          
          // 这里可以添加实际的过滤逻辑
          const filter = button.textContent.trim();
          console.log(`筛选: ${filter}`);
        });
      });
      
      // 图片懒加载
      document.addEventListener("DOMContentLoaded", function() {
        const lazyImages = [].slice.call(document.querySelectorAll("img"));
        
        if ("IntersectionObserver" in window) {
          let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.classList.add("fade-in");
                lazyImageObserver.unobserve(lazyImage);
              }
            });
          });
          
          lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
          });
        }
      });