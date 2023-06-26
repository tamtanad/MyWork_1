
const getById = (id) => document.getElementById(id)
const qs = (selector) => document.querySelector(selector)
const qsAll = (selector) => document.querySelectorAll(selector)
const insertHtml = (element, position, content) => element.insertAdjacentHTML(position, content)
const render = (element, content) => element.innerHTML = content


export {
    getById, qsAll, qs, insertHtml, render
}