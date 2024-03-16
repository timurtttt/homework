window.addEventListener("load", () => {
    let tabContentBlocks = document.querySelectorAll(".tab_content_block");
    let tabContentItems = document.querySelectorAll(".tab_content_item");
    let currentIndex = 0;
  
    const showNextBlock = () => {
      tabContentBlocks[currentIndex].classList.remove("active");
      tabContentItems[currentIndex].classList.remove("tab_content_item_active");
  
      currentIndex = (currentIndex + 1) % tabContentBlocks.length;
  
      tabContentBlocks[currentIndex].classList.add("active");
      tabContentItems[currentIndex].classList.add("tab_content_item_active");
    }
  
    const startSlider = () => {
      setInterval(showNextBlock, 3000);
    }
  
    startSlider();
  });
