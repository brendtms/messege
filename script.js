const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");
const ring = document.getElementById("ring");
const textEl = document.getElementById("text");
const music = document.getElementById("music");

function openEnvelope() {
  
  envelope.classList.add("open");
  
  setTimeout(() => {
    letter.classList.add("show");
    typeLetter();
  }, 800);
  
}
const message = `
Happy 9th Monthsary babyy ko!💐

Hi babyyy

I don’t even know where to properly start kay daghan or there’s so much I want to say, and still it feels like words will never be enough for everything I feel for you. But karon? karon is special, so I’ll try my best to put my heart into something you can read and keep.
Nine months may not sound like very long time to others, pero sa akoa, it already means a lot. Sa ka daghan nahitabo in those months—good days, bad days, quiet days, misunderstandings, laughter, overthinking moments, and peaceful moments where everything just felt right because you were there.

Thank you for staying with me through everything. salamat kaayu for your patience when I’m difficult... You didn’t give up on me, and that’s something I will always appreciate deeply.

Happy 9th monthsary babyy!
— yours, always ❤️.

Thank you for being my peace, my joy, and my home.

I love you endlessly.
`;

let i = 0;

function typeLetter() {
  let t = setInterval(() => {
    textEl.innerHTML += message[i];
    i++;
    
    if (i >= message.length) {
      clearInterval(t);
      setTimeout(showProposal, 800);
    }
  }, 40);
}

function showProposal() {
  letter.classList.remove("show");
  proposal.classList.add("show");
  
  music.play();
  
  setTimeout(() => {
    ring.classList.add("show");
  }, 600);
}

function takeRing() {
  
  ring.style.transform = "scale(1.3)";
  ring.style.filter = "drop-shadow(0 0 40px gold)";
  
  setTimeout(() => {
    alert("Forever yours ❤️ kasal na tayo!😝 ble");
  }, 1000);
  
}