import { getById } from "./helpers.js";

/**
 * @type { HTMLElement | null}
 */
const $title = getById('title')

const $titleModal = getById('title-modal')

const $services = getById('services');

const $servicesModal = getById('services-modal');

const $galleries = getById('gallery');

const $blogs = getById('blogs');

const $productModal = getById('product-modal');



export {$title,$titleModal, $services, $servicesModal, $galleries, $blogs , $productModal}