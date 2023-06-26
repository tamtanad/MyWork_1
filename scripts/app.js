import { _title,_services,_galleries,_blog ,_col } from "./components.js";
import { database } from "./database.js";
import {$title, $galleries, $services, $blogs } from "./dom.js";
import { render } from "./helpers.js";
import { COLLECTIONS } from "./config.js";
import { init } from "./storage.js";

document.addEventListener('scroll',() => {
    const col = document.getElementById('scroll');
    if (window.scrollY > 0){
        col.classList.add('bg-light');
    }else {
        col.classList.remove('bg-light');
    }
})




window.addEventListener('DOMContentLoaded', () => {
    init (COLLECTIONS)
    const {title, } = database;
    $title.innerHTML = title
                                .map((title) => _title(title))
                                .map((title) => _col(title, ["col-lg-4", "col-md-6", "col-services", "d-flex", "justify-content-center"]))
                                .join("")

    const {services, } = database;
    $services.innerHTML = services
                                .map((services) => _services(services))
                                .map((services) => _col(services, ["col-lg-4", "col-md-6", "col-services", "d-flex", "justify-content-center"]))
                                .join("")
    const {galleries, } = database;
    $galleries.innerHTML = galleries
                            .map((galleries) => _galleries(galleries))
                            .map((galleries) => _col(galleries, ["col-lg-3", "col-md-6", "col-gallery"]))
                            .join("")
    
    const {blogs, } = database;
    $blogs.innerHTML =blogs
                        .map((blog) => _blog(blog))
                        .map((blog) => _col(blog, ["col-lg-4", "col-md-6", "col-blog", "p-3"]))
                        .join("")

                        
})


