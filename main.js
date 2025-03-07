async function fetchAnime() {
    const url = 'https://kitsu.io/api/edge/anime?page[limit]=20';
    try {
        let response = await fetch(url);
        let data = await response.json();

        let container = document.getElementById("animeContainer");
        container.innerHTML = ""; 
        
        data.data.forEach((anime, index) => {
            let div = document.createElement("div");
            div.classList.add("anime-card");

            let img = document.createElement("img");
            img.src = anime.attributes.posterImage.medium;
            img.alt = anime.attributes.canonicalTitle;

            let info = document.createElement("div");
            info.classList.add("anime-info");

            let title = document.createElement("p");
            title.textContent = anime.attributes.titles["en"] || anime.attributes.canonicalTitle;

            let episodes = document.createElement("p");
            episodes.textContent = `Episodes: ${anime.attributes.episodeCount ?? "Unknown"}`;

            let rating = document.createElement("p");
            rating.textContent = `Rating: ${anime.attributes.averageRating ?? "N/A"}`;

            info.appendChild(title);
            info.appendChild(episodes);
            info.appendChild(rating);

            div.appendChild(img);
            div.appendChild(info);
            container.appendChild(div);

            
            div.addEventListener('click', () => {
                
                const selectedAnime = {
                    image: anime.attributes.posterImage.medium,
                 
                    title: anime.attributes.titles["en"] || anime.attributes.canonicalTitle,
                    episodes: anime.attributes.episodeCount ?? "Unknown",
                    rating: anime.attributes.averageRating ?? "N/A",
                    description: anime.attributes.description || "nap"
                };
                localStorage.setItem('selectedAnime', JSON.stringify(selectedAnime));

               
                window.location.href = 'details.html';
            });

      
            setTimeout(() => {
                div.classList.add("show");
            }, index * 200);
        });
    } catch (error) {
        console.error("Ошибка при загрузке аниме:", error);
    }
}

fetchAnime();


async function fetchHighQualityAnime() {
    const url = 'https://api.jikan.moe/v4/top/anime';
    try {
        let response = await fetch(url);
        let data = await response.json();
        let container = document.getElementById("anidbList"); 
        container.innerHTML = "";
        
        data.data.slice(0, 20).forEach((anime, index) => {
            let div = document.createElement("div");
            div.classList.add("anime-card");

            let img = document.createElement("img");
            img.src = anime.images.webp.large_image_url;
            img.alt = anime.title;

        
            let info = document.createElement("div");
            info.classList.add("anime-info");

            let title = document.createElement("p");
            title.textContent = anime.title;

            let episodes = document.createElement("p");
            episodes.textContent = `Episodes: ${anime.episodes ?? "Unknown"}`;

            let rating = document.createElement("p");
            rating.textContent = `Rating: ${anime.score ?? "N/A"}`;

            info.appendChild(title);
            info.appendChild(episodes);
            info.appendChild(rating);

            div.appendChild(img);
            div.appendChild(info);
            container.appendChild(div);

       
            setTimeout(() => {
                div.classList.add("show");
            }, index * 200);
        });
    } catch (error) {
        console.error("Ошибка при загрузке аниме:", error);
    }
}

fetchHighQualityAnime();




//         async function fetchShikimoriAnime() {
//     const url = 'https://shikimori.one/api/animes?page=1&limit=20';
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         let container = document.getElementById("shikimoriList");
//         container.innerHTML = "";
        
//         data.slice(0, 20).forEach((anime, index) => {
//             let div = document.createElement("div");
//             div.classList.add("anime-card");

//             let img = document.createElement("img");
//             img.src = `https://shikimori.one${anime.image.original}`;
//             img.alt = anime.russian || anime.image[english];

//             let title = document.createElement("p");
//             title.textContent = anime.russian || anime.english;

//             div.appendChild(img);
//             div.appendChild(title);
//             container.appendChild(div);
            
//             setTimeout(() => {
//                 div.classList.add("show");
//             }, index * 200);
//         });
//     } catch (error) {
//         console.error("Ошибка при загрузке аниме из Shikimori:", error);
//     }
// }
// fetchShikimoriAnime();

// async function fetchAniDBAnime() {
//     const url = 'https://api.jikan.moe/v4/top/anime';
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         let container = document.getElementById("anidbList");
//         container.innerHTML = "";
        
//         data.data.slice(0, 20).forEach((anime, index) => {
//             let div = document.createElement("div");
//             div.classList.add("anime-card");

//             let img = document.createElement("img");
//             img.src = anime.images.jpg.image_url;
//             img.alt = anime.title;

//             let title = document.createElement("p");
//             title.textContent = anime.title;

//             div.appendChild(img);
//             div.appendChild(title);
//             container.appendChild(div);
            
//             setTimeout(() => {
//                 div.classList.add("show");
//             }, index * 200);
//         });
//     } catch (error) {
//         console.error("Ошибка при загрузке аниме из AniDB:", error);
//     }
// }

// 


async function fetchTVShows() {
    const url = 'https://api.tvmaze.com/shows';
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        let container = document.getElementById("tvShowContainer");
        container.innerHTML = "";
        
        data.slice(0, 20).forEach((show, index) => {
            let div = document.createElement("div");
            div.classList.add("anime-card");

            let img = document.createElement("img");
            img.src = show.image?.medium || 'https://via.placeholder.com/210x295';
            img.alt = show.name;

            let title = document.createElement("p");
            title.textContent = show.name;
            
            div.appendChild(img);
           
            container.appendChild(div);

            setTimeout(() => {
                div.classList.add("show");
            }, index * 150);
        });
    } catch (error) {
        console.error("Ошибка при загрузке сериалов:", error);
    }
}

fetchTVShows();


function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let currentLeft = window.getComputedStyle(sidebar).left;

    if (currentLeft === "-250px") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }
}
function searchAnime() {
    let searchText = document.querySelector('#searchInput').value.toLowerCase();
    
    let animeItems = document.querySelectorAll('.anime-card');
    let tvShowItems = document.querySelectorAll('.tv-show-card');
    let movieItems = document.querySelectorAll('.movie-card');

    function filterItems(items) {
        items.forEach(item => {
            let name = item.querySelector('p').textContent.toLowerCase();
            item.style.display = name.includes(searchText) ? "block" : "none";
        });
    }

    filterItems(animeItems);
    filterItems(tvShowItems);
    filterItems(movieItems);
}

function ff(){
    window.location.href='signup.html'
}

function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.getElementById('menu');
   

    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
    
    
}
document.querySelector('.overlay').addEventListener('click', toggleMenu);