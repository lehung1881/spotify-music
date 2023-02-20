const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const songPlayName = $(".song-play-name");
const songSinger = $(".song-play-singer");
const songPlayImg = $(".song-play__img");
const myAudio = $("#audio");
const togglePlay = $(".control-pause-play");
const songProgress = $(".progress");
const nextSongBtn = $(".next-song");
const prevSongBtn = $(".prev-song");
const randomSongBtn = $(".random-song");
const playPause = $(".control-pause-play");
const heart = $(".song-play-icon");
const volumeMute = $(".control-play-right-volume");
const progessVolume = $(".progress-2");
const repeatBtn = $(".control-play-repeat");

const app = {
    currentIndex: 0,
    isPlaying: false,
    songs: [
        {
            id: 1,
            name: "Cánh thiệp đầu xuân",
            singer: "Phương Anh",
            img: "./asset/img/ctdx.jpg",
            audioPath: "./asset/audio/ctdx.mp3",
            isNew: true,
            isLike: false,
        },
        {
            id: 2,
            name: "Ai là kẻ đáng thương",
            singer: "Lê Hùng M4U",
            img: "./asset/img/alkdt.jpg",
            audioPath: "./asset/audio/alkdt.mp3",
            isNew: false,
            isLike: true,
        },
        {
            id: 3,
            name: "Why not me?",
            singer: "Snoop Dog",
            img: "./asset/img/wnm.jpg",
            audioPath: "./asset/audio/wnm.mp3",
            isNew: false,
            isLike: true,
        },
        {
            id: 4,
            name: "Có chàng trai viết lên cây",
            singer: "Phan Mạnh Quỳnh",
            img: "./asset/img/anh1.jpg",
            audioPath: "./asset/audio/cctvlc.mp3",
            isNew: false,
            isLike: true,
        },
        {
            id: 5,
            name: "Xin lỗi tình yêu",
            singer: "Đàm Vĩnh Hưng",
            img: "./asset/img/anh2.jpg",
            audioPath: "./asset/audio/xlty.mp3",
            isNew: true,
            isLike: true,
        },
        {
            id: 6,
            name: "Cà phê quán quen",
            singer: "Nhật Kim Anh",
            img: "./asset/img/anh3.jpg",
            audioPath: "./asset/audio/cpqq.mp3",
            isNew: true,
            isLike: false,
        },
        {
            id: 7,
            name: "Huyết hoa rơi remix",
            singer: "Phúc Du",
            img: "./asset/img/anh4.jpg",
            audioPath: "./asset/audio/hhr.mp3",
            isNew: true,
            isLike: true,
        },
        {
            id: 8,
            name: "Kiếp má hồng remix",
            singer: "Đen Vâu",
            img: "./asset/img/anh5.jpg",
            audioPath: "./asset/audio/kmh.mp3",
            isNew: true,
            isLike: true,
        },
        {
            id: 9,
            name: "Nơi đảo xa",
            singer: "Trọng Tấn",
            img: "./asset/img/ndx.jpg",
            audioPath: "./asset/audio/ndx.mp3",
            isNew: true,
            isLike: false,
        },
        {
            id: 10,
            name: "Lý do là gì remix",
            singer: "Trình Đình Quang",
            img: "./asset/img/ldlg.jpg",
            audioPath: "./asset/audio/ldlg.mp3",
            isNew: true,
            isLike: true,
        },
        {
            id: 11,
            name: "Xin lỗi vì những lời hứa",
            singer: "Min",
            img: "./asset/img/xlvnlh.jpg",
            audioPath: "./asset/audio/xlvnlh.mp3",
            isNew: true,
            isLike: false,
        },
    ],
    defindProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },
    renderNewSong: function () {
        const newsongs = this.songs.map((song) => {
            if (song.isNew) {
                return `
                    <div data-value="${song.id}" class="song-container">
                        <div class="song-img" style="background-image: url('${song.img}');"></div>
                        <p class="song-name">${song.name}</p>
                        <p class="song-singer">${song.singer}</p>
                        <div class="play-hov">
                            <i class="play-hov-icon fa-solid fa-play"></i>
                        </div>
                    </div>`;
            }
        });
        $(".new-song").innerHTML = newsongs.join("");
    },

    renderListsSong: function () {
        const listsong = this.songs.map((song) => {
            return `
                <div data-value="${song.id}" class="song-container">
                    <div class="song-img" style="background-image: url('${song.img}');"></div>
                    <p class="song-name">${song.name}</p>
                    <p class="song-singer">${song.singer}</p>
                    <div class="play-hov">
                        <i class="play-hov-icon fa-solid fa-play"></i>
                    </div>
                </div>`;
        });
        $(".list-song").innerHTML = listsong.join("");
    },

    renderLikeSong: function () {
        const listLikeSong = this.songs.map((song) => {
            if (song.isLike) {
                return `
                <div data-value="${song.id}" class="song-container">
                    <div class="song-img" style="background-image: url('${song.img}');"></div>
                    <p class="song-name">${song.name}</p>
                    <p class="song-singer">${song.singer}</p>
                    <div class="play-hov">
                        <i class="play-hov-icon fa-solid fa-play"></i>
                    </div>
                </div>`;
            }
        });
        $(".like-song").innerHTML = listLikeSong.join("");
    },
    loadCurrentSong: function () {
        songPlayName.textContent = this.currentSong.name;
        songSinger.textContent = this.currentSong.singer;
        songPlayImg.style.backgroundImage = `url('${this.currentSong.img}')`;
        myAudio.src = this.currentSong.audioPath;
    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    randomSong: function () {
        this.currentIndex = Math.floor(Math.random() * (this.songs.length - 1));
        this.loadCurrentSong();
    },
    handleEvent: function () {
        const _this = this;
        // Thả tim bài hát
        var isHeart = false;
        heart.onclick = function () {
            if (isHeart) {
                isHeart = false;
                heart.classList.remove("heart--active");
            } else {
                isHeart = true;
                heart.classList.add("heart--active");
            }
        };
        // Tăn giảm âm lượng
        var isMute = false;
        volumeMute.onclick = function () {
            if (isMute) {
                isMute = false;
                volumeMute.classList.remove("volume--active");
                progessVolume.value = myAudio.volume * 100;
                myAudio.muted = false;
                console.log(audio.volume);
            } else {
                isMute = true;
                volumeMute.classList.add("volume--active");
                progessVolume.value = 0;
                myAudio.muted = true;
            }
        };
        progessVolume.onchange = function () {
            const vol = progessVolume.value / 100;
            myAudio.volume = vol;
            if (vol === 0) {
                volumeMute.classList.add("volume--active");
            } else {
                volumeMute.classList.remove("volume--active");
            }
        };
        // Lặp lại bài hát
        var isRepeat = false;
        repeatBtn.onclick = function () {
            if (isRepeat) {
                isRepeat = false;
                myAudio.loop = false;
                repeatBtn.classList.remove("repeat--active");
            } else {
                isRepeat = true;
                myAudio.loop = true;
                repeatBtn.classList.add("repeat--active");
            }
        };
        // Hết bài chuyển sang bài khác
        myAudio.onended = function () {
            _this.nextSong();
            myAudio.play();
        };

        // Tạm dừng và tiếp tục
        togglePlay.onclick = function () {
            if (_this.isPlaying) {
                myAudio.pause();
            } else {
                myAudio.play();
            }
        };
        // Ẩn hiện nút pause
        myAudio.onplay = function () {
            _this.isPlaying = true;
            playPause.classList.add("play--active");
        };
        myAudio.onpause = function () {
            _this.isPlaying = false;
            playPause.classList.remove("play--active");
        };
        // Tiến độ bài hát
        myAudio.ontimeupdate = function () {
            if (audio.duration) {
                const timeParcent =
                    (myAudio.currentTime / myAudio.duration) * 100;
                songProgress.value = Math.floor(timeParcent);
            }
        };
        // Tua bài hát
        songProgress.onchange = function () {
            const seekTime = (myAudio.duration * songProgress.value) / 100;
            myAudio.currentTime = seekTime;
        };
        // Next, lùi và phát ngẫu nhiên bài
        nextSongBtn.onclick = function () {
            _this.nextSong();
            myAudio.play();
        };
        prevSongBtn.onclick = function () {
            _this.prevSong();
            myAudio.play();
        };
        randomSongBtn.onclick = function () {
            _this.randomSong();
            myAudio.play();
        };
        // Phát bài hát khi chọn
        const listSong = document.querySelectorAll(".song-container");
        // Now it's an Array.
        listSong.forEach(function (songElement) {
            songElement.onclick = function () {
                const idx = Number(songElement.getAttribute("data-value"));
                _this.currentIndex = _this.songs.findIndex(
                    (song) => song.id === idx
                );
                _this.loadCurrentSong();
                myAudio.play();
            };
        });
    },
    start: function () {
        this.defindProperties();
        this.renderNewSong();
        this.renderListsSong();
        this.renderLikeSong();
        this.loadCurrentSong();
        this.handleEvent();
    },
};

app.start();
