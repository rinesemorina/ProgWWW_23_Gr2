async function getProductsData(){
    try{
        let response = await fetch('../assets/data/products.json')
        all_data = await response.json()

        let wishlist = JSON.parse(localStorage.getItem('user')).wishlist || []
        all_data.forEach(item => {
            item.isInWishlist = wishlist.find(product => product === item.id)
        })

    } catch (e) {
        console.error(e)
    }
}

function getProductCard(item) {
    let item_html = document.createElement('div')
    item_html.className = 'card'
    item_html.innerHTML = `
                <div class="center mb-20 small-icon-container">
                    ${item.isInWishlist ? '<img src="../assets/icons/shopping-bag.png" alt="" class="icon small-wishlist">' : ''}
                    <img class="img" src="${item.images && item.images.length > 0 ? item.images[0] : '../../assets/images/no-img.png'}" alt="">
                </div>
                <div>
                    <p class="bold mb-10">${item.brand} ${item.model}</p>
                    <p class="description">${formattedDescription(item)}</p>
                    <div class="footer">
                        <p class="bold mb-0">${item.price}</p>
                        <p class="more-link fs-14 mb-0" onclick="showDetails('${item.id}')">More Details -></p>
                    </div>
                </div>`
    return item_html
}

function injectProductsDataInto(div_id, filters, limit) {
    let list = document.getElementById(div_id)
    list.innerHTML = ''

    let filteredData = filters ? getFilteredData(filters) : all_data
    if (filteredData.length === 0) {
        list.innerHTML = `<p class="no-data">No data available.</p>`
    }

    if (limit) filteredData = filteredData.slice(0, limit)

    filteredData.forEach(item => {
        list.append(getProductCard(item))
    })
}

function getFilteredData(filters) {
    let data = JSON.parse(JSON.stringify(all_data))

    if (filters === 'wishlist') {
        return data.filter(item => item.isInWishlist)
    } else if (filters.length === 0)
        return data

    filters.forEach(filter_type => {
        let query = filter_type?.options.filter(i => i.checked)?.map(i => i.code)
        if (query.length > 0) {
            data = data.filter(opt => {
                if (Array.isArray(opt[filter_type.code]))
                    return opt[filter_type.code].find(i => query.includes(i))
                return query.includes(opt[filter_type.code])
            })
        }
    })
    return data
}

function formattedDescription(item) {
    return `${item.cpu}, ${item.ram}GB, ${item.space > 1024 ? item.space % 1024 + 'TB' : item.space + 'GB'}, ${item.display}"`
}

function getAllFeatures(all_filters) {
    all_data.forEach(item => {
        all_filters.forEach(filter => {
            filter.options.push(item[filter.code])
        })
    })
}

function getById(id) {
    return all_data.find(item => item.id == id)
}

function showDetails(id) {
    lastSelectedItem = getById(id)

    document.getElementById('slider').innerHTML = ''
    navigateTo('#tab-content', '/tabs/products/details-page.html');
}