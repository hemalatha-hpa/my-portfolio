document.addEventListener('DOMContentLoaded', function () {

  // ================= AOS =================
  AOS.init({
    duration: 850,
    easing: 'ease-out-cubic',
    once: true,
  });

  // ================= PARTICLES =================
  tsParticles.load('tsparticles', {
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true }
    },
    particles: {
      color: { value: '#9b6cff' },
      links: {
        color: '#8f61ff',
        distance: 140,
        enable: true,
        opacity: 0.25,
        width: 1
      },
      move: { enable: true, speed: 1.2 },
      number: { value: 60 },
      opacity: { value: 0.35 },
      size: { value: { min: 1, max: 3 } },
    }
  });

  // ================= SCROLL BUTTON =================
  const scrollBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 350);
  });

  scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ================= NAVBAR =================
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  menuToggle.onclick = () => {
    navbar.classList.toggle('active'); // better than style change
  };

  // ================= MODAL =================
  const modal = document.getElementById('certificate-modal');
  const certificateDisplay = document.getElementById('certificate-display');
  const modalClose = document.getElementById('modal-close');

  // ================= COMMON VIEW FUNCTION =================
  
document.querySelectorAll(".view-cert-btn").forEach(button => {
  button.addEventListener("click", () => {

    const files = button.getAttribute("data-files"); // multiple files
    const singleFile = button.getAttribute("data-file"); // single file

    certificateDisplay.innerHTML = "";

    // 👉 MULTIPLE FILES
    if (files) {
      const fileArray = files.split(",");

      fileArray.forEach(file => {
        file = file.trim();

        if (file.endsWith(".pdf")) {
          certificateDisplay.innerHTML +=
            `<iframe src="${file}" width="100%" height="400px"></iframe>`;
        } else {
          certificateDisplay.innerHTML +=
            `<img src="${file}" style="max-width:100%; margin-bottom:10px;">`;
        }
      });
    }

    // 👉 SINGLE FILE (normal buttons)
    else if (singleFile) {
      if (singleFile.endsWith(".pdf")) {
        certificateDisplay.innerHTML =
          `<iframe src="${singleFile}" width="100%" height="500px"></iframe>`;
      } else {
        certificateDisplay.innerHTML =
          `<img src="${singleFile}" style="max-width:100%;">`;
      }
    }

    // open modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});
  // ================= CERTIFICATE BUTTONS =================
  document.querySelectorAll(".view-cert-btn").forEach(button => {
    button.addEventListener("click", () => {
      const file = button.getAttribute("data-file");
      openFile(file);
    });
  });

  // ================= ✅ RESUME BUTTON FIX =================
  const resumeBtn = document.querySelector('[data-file="certificates/mycertificate.pdf"]');

  if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
      openFile("certificates/mycertificate.pdf");
    });
  }

  // ================= CLOSE MODAL =================
  modalClose.onclick = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  // ================= ORBIT ANIMATION =================
  const orbitContainer = document.querySelector('.orbit-container');
  const profileContainer = document.querySelector('.profile-container');

  if (profileContainer && orbitContainer) {
    profileContainer.addEventListener('mouseenter', () => {
      orbitContainer.style.animationPlayState = 'paused';
    });

    profileContainer.addEventListener('mouseleave', () => {
      orbitContainer.style.animationPlayState = 'running';
    });
  }

});