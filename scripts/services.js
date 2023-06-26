import {$titleModal, $productModal, $servicesModal } from "./dom.js";

const titlePopup = new bootstrap.Modal($titleModal, {
    keyboard: false
})

const productPopup = new bootstrap.Modal($productModal, {
    keyboard: false
})

const servicesPopup = new bootstrap.Modal($servicesModal, {
    keyboard: false
})

export {titlePopup, productPopup, servicesPopup}