const buttons = document.querySelectorAll('.play');
let currentAudio = null;
let currentButton = null;

const playPath = "M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z";
const pausePath = "M120 96h72v320h-72V96zm200 0h72v320h-72V96z";

const songTitleEl = document.getElementById('song-title');
const timeEl = document.getElementById('time');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const audioSrc = btn.getAttribute('data-src');
    const iconPath = btn.querySelector('.icon');
    const title = btn.closest('.card').querySelector('h4')?.innerText;

    if (currentAudio && currentButton === btn) {
      if (currentAudio.paused) {
        currentAudio.play();
        iconPath.setAttribute('d', pausePath);
      } else {
        currentAudio.pause();
        iconPath.setAttribute('d', playPath);
      }
      return;
    }

    // Pause existing audio if any
    if (currentAudio) {
      currentAudio.pause();
      const prevIcon = currentButton.querySelector('.icon');
      prevIcon.setAttribute('d', playPath);
    }

    currentAudio = new Audio(audioSrc);
    currentButton = btn;
    iconPath.setAttribute('d', pausePath);
    songTitleEl.innerText = title;

    currentAudio.addEventListener('ended', () => {
      iconPath.setAttribute('d', playPath);
      timeEl.innerText = `0:00 / 0:00`;
      songTitleEl.innerText = 'Not playing';
      currentAudio = null;
      currentButton = null;
    });

    currentAudio.addEventListener('timeupdate', () => {
      if (currentAudio) {
        const current = formatTime(currentAudio.currentTime);
        const total = formatTime(currentAudio.duration || 0);
        timeEl.innerText = `${current} / ${total}`;
      }
    });

    currentAudio.play();
  });
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function addartists(imgurl,name) {
  let html=`<div class="artist">
                    <img src="${imgurl}" alt="${name}">
                    <h4>${name}</h4>
                    <p>Artist</p>
                </div>`;
  document.querySelector(".artists").innerHTML+=html;
}
addartists("https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c","A.R. Rahaman");
addartists("https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7","Arjit Singh");
addartists("https://i.scdn.co/image/ab67616100005174bb4064bef3a825344d5eb79e","Sachin-Jigar");
addartists("https://i.scdn.co/image/ab6761610000517490b6c3d093f9b02aad628eaf","Vishal-Shekar");
addartists("https://i.scdn.co/image/ab67616100005174c40600e02356cc86f0debe84","Atif Aslam");
addartists("https://i.scdn.co/image/ab676161000051740f0be2054fe9594026a6b843","Anirudh Ravichander");
addartists("https://i.scdn.co/image/ab676161000051748de0e6e7e55d7773931ab7f4","Udit Narayan");
addartists("https://i.scdn.co/image/ab67616100005174bc7e4fffd515b47ff1ebbc1f","Yo Yo Honey Singh");
addartists("https://i.scdn.co/image/ab6761610000517459303d54ce789210e745e1a9","Shreya Ghoshal");
addartists("https://i.scdn.co/image/ab67616100005174852737800de564b2c0efe165","Jasleen Royal");
addartists("https://i.scdn.co/image/ab676161000051743db0499a689aa9b4a47ebba3","Shankar-Ehsaan-Loy");
addartists("https://i.scdn.co/image/ab67616100005174a37271f7a4862a6e99ce345f","Amit Trivedi");
addartists("https://i.scdn.co/image/ab67616100005174e34fad78221a2cb31da57946","Sachet Tandon");

function addradios(imgurl,l1,l2) {
  let html=`<div class="radio">
                    <div class="play">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 30 30">
                            <circle cx="14" cy="14" r="14" fill="#1ed760" />
                            <g transform="translate(7.5,6.5) scale(0.03)">
                                <path class="icon"
                                    d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20
                                 c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z"
                                    fill="black"/>
                            </g>
                        </svg>
                    </div>
                    <img src="${imgurl}" alt="rad">
                    <p>${l1}</p>
                    <p>${l2}</p>
                </div>`
  document.querySelector(".radios").innerHTML+=html;
};
addradios("https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/0oOet2f43PA68X5RxKobEy/en","With Atif Aslam, Salim-","Sulaiman, A.R.Rahaman and...");
addradios("https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/1mYsTxnqsietFxj1OgoGbG/en","With Hariharan, G.V. Prakash,","Sid Sriram and more");
addradios("https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/3m49WVMU4zCkaVEKb8kFW7/en","With Swarnalatha, Uma ","Ramanan, Vaali and more");
addradios("https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/5VVN3xZw1i2qihfITZlvCZ/en","With Hiphop Tamizha, Harris"," Jayaraj, Sean Roldan and...");
addradios("https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/7uIbLdzzSEqnX0Pkrb56cR/en","With Badshah, Guru ","Randhawa, Harrdy Sandhu..." )
addradios("https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4fEkbug6kZzzJ8eYX6Kbbp/en","With Mustafa Zahid, Atif","Aslam, Pritam and more");



