$(document).ready(function () {
    $("#toggleIcon").click(function() {
        $("ul").toggleClass("show")
    });
});


const blogBox = document.querySelector(".blog_container");
console.log(blogBox);

const save = () => {
    const blogData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        Blogate: document.getElementById("date").value,
        blogTitle: document.getElementById("placename").value,
        blogDiscription: document.getElementById("description").value
    };
    const newBlog =`
    <div class="blog_box">
                    <img src=${blogData.imageUrl} alt="Blog Image" class="blog_img" id=${blogData.id}>
                    <div class="blog_data">
                        <p class="date">
                            <i class="fa-solid fa-calender-days"></i> &nbsp; ${blogData.Blogate}
                        </p>
                        <h6 class="blog_title">${blogData.blogTitle}</h6>
                        <div class="blog_desc">
                            ${blogData.blogDiscription}
                        </div>
                        <button class="read_btn">
                            Read More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
    `;

    blogBox.insertAdjacentHTML("beforeend", newBlog);
    console.log(newBlog)
};
