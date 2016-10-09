$(document).ready(function(){
    $.get("https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop", function(data){
       putInDom(data)
       console.log(data)
   })
})


function putInDom(data) {
    var ourData = data.results.map(function(item){
        return {
            description: item.description,
            price: item.price,
            link: item.url,
            title: item.title,
            img: item.Images[0].url_570xN,
            shopName: item.Shop.shop_name
        }
    })

    var htmlStr = "";
    ourData.forEach(function(item){
        htmlStr += `
        <div class="galleryItem">
            <a href=${item.link}> 
            <div><img src="${item.img}"/></div>
            <p class="truncate galleryDescription"> ${item.title} </p>
            <div class="galleryFooter">
                <p class="galleryShop"> ${item.shopName} </p>
                <p class="galleryPrice"> $${item.price} </p>
            </div
            </a>
        </div>
        `
    })

    $("#galleryDisplay").html(htmlStr)
}
