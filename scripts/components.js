/**
 * 
 * @param {{id: string | number, description:string, title: string}} _ 
 * @returns {string}
 */
const _title = (_) => {
  const {id, description,title } = _
  return `
  <div class="title" id=${id}>
          <div class="button-col">
            <h5 class="h5">${description}</h5>
            <h1 class="h1">
            ${title}
            </h1>
            <button class="btn-header" data-id="${id}" onclick="readMore(this)">READ MORE</button>
          </div>
        </div>
  `
}
/**
 * 
 * @param 
 * @returns {string}
 */

const _seeMore = (_) => {
  const date = new Date();
  const UTCDate = date.getUTCDate()
  return `
  <div class="card text-bg-dark">
  <img src="images/card/kitchen/img6.jpg" class="card-img" alt="...">
  <div class="card-img-overlay mt-5">
    <h5 class="card-title fs-1">Our Vision</h5>
    <p class="card-text fs-3">For us, as for the architects and designers, new solutions, processes and groundbreaking researches are on the horizon. Design innovations create a new balanced, sustainable environment.</p>
    <p class="card-text"><small>Last updated ${UTCDate} mins ago</small></p>
  </div>
</div>
  <div class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasDarkLabel">Art Deco Interior Design</h5>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>
      Art Deco is a style in architecture, design, and visual art that 
      emerged in France before World War I and became the predominant 
      design movement for the next two decades. Its name is a shorthand 
      derivation of “Arts Decoratifs”, from the Exposition Internationale 
      des Arts Decoratifs et Industriels Modernes, where the style was first exhibited in Paris in 1925.
      A combination that combined unique aesthetics, emphasized elegance and glamour. This style was partly 
      inspired by the world’s growing industrialization and mass production.
      Art Deco is a style in architecture, design, and visual art that 
      emerged in France before World War I and became the predominant 
      design movement for the next two decades. Its name is a shorthand 
      derivation of “Arts Decoratifs”, from the Exposition Internationale 
      des Arts Decoratifs et Industriels Modernes, where the style was first exhibited in Paris in 1925.
      A combination that combined unique aesthetics, emphasized elegance and glamour. This style was partly 
      inspired by the world’s growing industrialization and mass production.
    </p>
  </div>
</div>`
}

/**
 * 
 * @param {{id: string | number, image: string, title: string, description: string}} _ 
 * @returns {string}
 */

const _services = (_) => {
    const { id, image, title, description} = _
    return `<div class="box box-services" id=${id} >            
                <div class="box-services-icon">     
                    <img  src="images/products/${image}">
                </div>                          
                <div class="box-services-content">    
                    <h1 class="box-content-title" data-id="${id}" onclick="showCard(this)">${title}</h1>
                    <p class="box-content-description">
                    ${description}
                    </p>
                </div>    
            </div>`
}

/**
 * 
 * @param {{id: string | number, image: string, title: string, description: string, thumbnails: array | null,}} _ 
 * @returns {string}
 */

const _card = (_) => {
const { id, images, title, description, thumbnail,} = _
const thumbnails = images.map((image) => _thumbnail({id:crypto.randomUUID(), image:image, cardId: id}))
                      .map((image) => _col(image, ["col-4", "mb-4","h-auto", "d-block"]))
                      .join("")
                      
  return  `
<div class="card" id="${id}" >
  <div class="row">
    <div class="col-md-4 mb-2">
      <img src="${thumbnail}"  class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body mt-0">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
      </div>
    </div>
    <div class="card-footer" ">
      <div class="row">
        ${thumbnails}
      </div>
    </div>
  </div>
</div>
`
}


/**
 * 
 * @param { { id:string | number, image:string, productId: string | number } } _ 
 * @returns {String}
 */
const _thumbnail = (_) => {
    const {id, image, cardId} = _
    return `<a href="${image}" data-fancybox="p-${cardId}">
              <img src="${image}" class="rounded w-100 product-thumbnail" alt="..." />
            </a>`
            
  }

/**
 * @param {{id: string | number, image: string, productId: string | number}}
 * @returns {string}
 */
const _galleries = (_) => {
    const {id , image, productId} = _
    return `<a data-fancybox="p-${productId}" data-src="images/gallery/${image}" class="img">
                <img class="gallery-img"  src="images/gallery/${image}">
            </a>`
}

/**
 * @param {{id: string | number, image: string, title: string, description: string,}}
 * @returns {string}
 */
const _blog = (_) => {
    const { id, image, title, description, } = _
    const date = new Date();
    const monthDay = date.getDate()
    const fullYears = date.getFullYear()
    const month = date.getMonth()
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec']
    const fullDate = `${monthDay} ${months[month]} ${fullYears} ` 
    return `<div class="card" id=${id}>
    <img src="images/blog/${image}" class="card-img-blog" >
    <div class="card-body p-0">
        <h5 class="card-title">
            ${title}
        </h5>
        <p class="card-description">
            ${description}
        </p>
        <p class="card-date">
            <small class="text-body-secondary">
                ${fullDate}
            </small>
        </p>
        </div>
    </div>
    <button type="button" class=" btn-blog" data-id="${id}" onclick="showProduct(this)">SEE ALL</button>`
    
}


/**
 * 
 * @param {string} component 
 * @param {string[]} classes 
 * @returns {string}
 */
const _col = (component, classes) => {
    return `<div class="${classes.join(" ")}">
        ${component}
    </div>`
}
export {_title,_seeMore,_services, _card ,_thumbnail, _galleries, _blog, _col}