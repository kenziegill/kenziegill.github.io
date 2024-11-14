class RotationManager {
    constructor(container) {
        this.words = container.querySelectorAll(".flip-word");
        this.currentWordIndex = 0;
        this.words[this.currentWordIndex].classList.add("active");
    }

    rotate() {
        this.words[this.currentWordIndex].classList.remove("active");
        this.words[this.currentWordIndex].classList.add("exit");
        
        const nextWordIndex = (this.currentWordIndex + 1) % this.words.length;
        
        setTimeout(() => {
            this.words[this.currentWordIndex].classList.remove("exit");
            this.currentWordIndex = nextWordIndex;
            this.words[this.currentWordIndex].classList.add("active");
        }, 500);
    }
}

// Initialize rotation managers for each container
const containers = document.querySelectorAll(".word-container");
const rotationManagers = Array.from(containers).map(container => new RotationManager(container));

// Start independent rotations
rotationManagers.forEach((manager, index) => {
    setInterval(() => manager.rotate(), 3000);
});