const gallery = document.querySelector(".gallery");

// const li = document.createElement("li");
// li.classList.add("gallery-item");

// gallery.append(li);

// const a = document.createElement("a");
// a.classList.add("gallery-link");
// a.href = "large-image.jpg";

// li.append(a);

// const img = document.createElement("img");
// img.classList.add("gallery-image");
// img.src = "small-image.jpg";
// img.dataset.source = "large-image.jpg";
// img.alt = "Image description";

// a.append(img);

document.body.append(gallery);

const images = [
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
        description: "Hokkaido Flower",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
        description: "Container Haulage Freight",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
        description: "Aerial Beach View",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
        description: "Flower Blooms",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
        description: "Alpine Mountains",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
        description: "Mountain Lake Sailing",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        description: "Alpine Spring Meadows",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        description: "Nature Landscape",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        description: "Lighthouse Coast Sea",
    },
];

const galleryBox = document.querySelector(".gallery");

const galleryListHTML = images
    .map(
        ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");

galleryBox.insertAdjacentHTML("beforeend", galleryListHTML);

const style = document.createElement("style");
style.textContent = `
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 0;
    list-style: none;
    justify-content: center;
    margin: 24px auto;
    max-width: 1128px;
  }
  .gallery-item {
    width: calc((100% - 24px * 2) / 3);
    box-sizing: border-box;
    overflow: hidden;
    transition: transform 0.5s;
  }
  .gallery-item:hover {
    transform: scale(1.05);
  }
  .gallery-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  .gallery-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: opacity 0.3s;
  }
  .gallery-image:hover {
    opacity: 0.8;
  } 
  
`;
document.head.appendChild(style);

galleryBox.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(event);

    const clickedImg = event.target;

    if (clickedImg.nodeName !== "IMG") return;

    const bigImageURL = clickedImg.dataset.source;

    const modal = basicLightbox.create(`
        <img src="${bigImageURL}" width="800" height="600">
    `);
    modal.show();
});
