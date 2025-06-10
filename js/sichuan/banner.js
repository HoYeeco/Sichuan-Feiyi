// 轮播图控制脚本
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('banner-prev');
    const nextBtn = document.getElementById('banner-next');
    const slidesContainer = document.getElementById('banner-slides');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // 自动轮播
    let slideInterval = setInterval(nextSlide, 5000);
    
    // 下一张
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlidePosition();
    }
    
    // 上一张
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateSlidePosition();
    }
    
    // 更新轮播位置和指示器
    function updateSlidePosition() {
      // 更新轮播位置
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // 更新指示器状态
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
      
      // 更新幻灯片状态
      slides.forEach((slide, index) => {
        if (index === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
      
      // 重置自动轮播计时器
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
    
    // 设置初始状态
    updateSlidePosition();
    
    // 绑定按钮事件
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // 绑定指示器事件
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlidePosition();
      });
    });
    
    // 鼠标悬停暂停自动轮播
    const banner = document.getElementById('banner');
    banner.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    banner.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 5000);
    });
  });