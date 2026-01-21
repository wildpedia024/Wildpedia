document.addEventListener("DOMContentLoaded", function() {
    
    function updateDateTime() {
      const dt = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dateStr = dt.toLocaleDateString('en-US', options);
      const timeStr = dt.toLocaleTimeString('en-US', {hour12: false});
      
      const element = document.getElementById('datetime');
      if(element) {
          element.innerHTML = `${dateStr} | ${timeStr}`;
      }
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    window.addEventListener("scroll", function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        let bar = document.getElementById("progress-bar");
        if (bar) bar.style.width = scrolled + "%";


        let btn = document.getElementById("backToTop");
        if (btn) {
            btn.style.display = (winScroll > 300) ? "block" : "none";
        }
    });
});


function playMusic() {
    var audio = document.getElementById("bgMusic") || document.getElementById("bg-music");
    if (audio) {
        var promise = audio.play();
        if (promise !== undefined) {
            promise.then(_ => console.log("Muzik dimainkan.")).catch(e => console.log("Klik diperlukan."));
        }
    }
}


document.body.addEventListener('click', function() {
    playMusic();
}, { once: true });


function prosesCarian() {
    playMusic(); 
    const userInput = document.getElementById('userInput');
    if (!userInput) return;

    const carian = userInput.value.toLowerCase();
    if (carian.includes("wwf") || carian === "") {
        setTimeout(() => { window.location.href = "index.html"; }, 500);
    } else {
        alert("Please type 'WWF'.");
    }
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}