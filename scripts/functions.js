import {titlePopup, productPopup, servicesPopup } from "./services.js";
import {$titleModal,$productModal, $servicesModal} from "./dom.js";
import {_title,_seeMore, _services,_blog,_card,_thumbnail, _col } from "./components.js";
import { render } from "./helpers.js";
import { database } from "./database.js";


const showProduct = (e) => {
    const blogId = e.dataset.id
    const blog = database.blogs.find((blog) => blog.id === blogId)
    const template = _blog(blog)
    
    render($productModal?.querySelector(".modal-body"), template)
    productPopup.show()
} 

const showCard = (button) => {
    const cardId = Number(button.dataset.id);
    const card = database.cards.find((card) => card.id === cardId);
    const template = _card(card);
    render($servicesModal?.querySelector(".modal-body"), template);
    servicesPopup.show();
}

const readMore = (e) => {
    const titleId = e.dataset.id;
    const title = database.title.find((title) => title.id === titleId)
    const template = _seeMore(title)
    
    render($titleModal?.querySelector(".modal-body"), template)
    titlePopup.show()
}


export {readMore,showProduct, showCard}
