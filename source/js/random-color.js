document.addEventListener('DOMContentLoaded', function () {
    // 生成随机颜色
    function getRandomColor() {
      const colors = [
        "#FF6B6B", "#4ECDC4", "#FFEEAD", "#D4A5A5", "#96CEB4",
        "#FFCC5C", "#88D8B0", "#FF6F69", "#A8E6CF", "#FFAAA5"
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  
    // 为所有标签应用随机颜色
    document.querySelectorAll('.tag').forEach(tag => {
      tag.style.backgroundColor = getRandomColor();
    });
  });