var product_list = [
    {
        id:0,
        img_src:"./img/Products/Apple/Macbook Air M2/imgSrc.jpg",
        discount: "18",
        price:"32990000",
        desc:`
        CPU: Apple M2 100GB/s
        RAM: 8 GB
        Ổ cứng: 256 GB SSD
        Màn hình: 13.6"Liquid Retina (2560 x 1664)
        Card màn hình: Card tích hợp 8 nhân GPU
        Cổng kết nối: Jack tai nghe 3.5 mm - MagSafe 32 x Thunderbolt 3
        Đặc biệt: Có đèn bàn phím
        Hệ điều hành: Mac OS
        Thiết kế: Vỏ kim loại
        Kích thước, khối lượng: Dài 304.1 mm - Rộng 215 mm - Dày 11.3 mm - Nặng 1.24 kg
        Thời điểm ra mắt: 6/2022`,
        status:"Còn hàng",
        name :"Macbook Air M2",
        img1: "./img/Products/Apple/Macbook Air M2/1.jpg",
        img2: "./img/Products/Apple/Macbook Air M2/2.jpg",
        img3: "./img/Products/Apple/Macbook Air M2/3.jpg",
        company: "Apple",
    }, 
    {
        id:1,
        img_src:"./img/Products/MSI/MSI Creator/imgSrc.jpg",
        discount: "30",
        price:"79990000",
        desc:`
        CPU: i7 12700H 2.30 GHz
        RAM: 32 GBDDR5 2 khe (1 khe 16 GB + 1 khe 16 GB) 5200 MHz
        Ổ cứng: 2 TB SSD NVMe PCIeHỗ trợ thêm 1 khe cắm SSD M.2 PCIe mở rộng (nâng cấp tối đa 2 TB)
        Màn hình: 16"QHD+ (2560 x 1600) 165Hz
        Card màn hình: Card rời RTX 3070Ti Max-Q 8GB
        Cổng kết nối:USB Type-C - Jack tai nghe 3.5 mm - Thunderbolt 4 USB-C1 x USB 3.2
        Đặc biệt: Có màn hình cảm ứng - Có đèn bàn phím
        Hệ điều hành: Windows 11 Home SL
        Thiết kế: Vỏ kim loại
        Kích thước, khối lượng: Dài 359 mm - Rộng 256 mm - Dày 19 mm - Nặng 2.39 kg
        Thời điểm ra mắt: 2022`,
        status:"Còn hàng",  
        name :"MSI Creator",
        img1: "./img/Products/MSI/MSI Creator/1.jpg",
        img2: "./img/Products/MSI/MSI Creator/2.jpg",
        img3: "./img/Products/MSI/MSI Creator/3.jpg",
        company: "MSI",
    },
    {
        id:2,
        img_src:"./img/Products/Asus/Asus ROG Strix SCAR 18/imgSrc.jpg",
        discount: "10",
        price:"120000000",
        desc:`
        CPU: i9 13980HX 2.2GHz
        RAM: 64 GBDDR5 2 khe (1 khe 32 GB + 1 khe 32 GB) 4800 MHz
        Ổ cứng: 2 TB SSD
        Màn hình: 18 inchW QXGA (2560 x 1600) 240Hz
        Card màn hình: Card rời RTX 4090 16GB
        Cổng kết nối: HDMI - LAN - (RJ45) - 3.5 mm - 2 x USB 3.21 x Thunderbolt 4 (hỗ trợ DisplayPort / G-SYNC)1 x USB 3.2 Gen 2 Type-C (hỗ trợ DisplayPort, Power delivery, G-SYNC)
        Đặc biệt: Có đèn bàn phím
        Hệ điều hành: Windows 11 Home SL
        Thiết kế: Vỏ kim loại
        Kích thước, khối lượng: Dài 399 mm - Rộng 294 mm - Dày 23.1 ~ 30.8 mm - Nặng 3.1 kg
        Thời điểm ra mắt: 2023`,
        status:"Còn hàng",  
        name :"Asus ROG Strix SCAR 18",
        img1: "./img/Products/Asus/Asus ROG Strix SCAR 18/1.jpg",
        img2: "./img/Products/Asus/Asus ROG Strix SCAR 18/2.jpg",
        img3: "./img/Products/Asus/Asus ROG Strix SCAR 18/3.jpg",
        company: "Asus",
    },
    {
        id:3,
        img_src:"./img/Products/Acer/Acer Predator Helios PH18/imgSrc.jpg",
        discount: "5",
        price:"129990000",
        desc:`
        CPU: i7 12650H 2.30 GHz
        RAM: 8 GBDDR5 2 khe (1 khe 8 GB + 1 khe trống) 4800 MHz
        Ổ cứng: 512 GB SSD NVMe PCIe Gen 4.0
        Màn hình: 15.6" Full HD (1920 x 1080) 144Hz
        Card màn hình: Card rời RTX 4050 6GB
        Cổng kết nối: HDMI - LAN - (RJ45) - 3.5 mm - 2 x USB 3.21 x Type-C (hỗ trợ USB 3.2 Gen1, DisplayPort)
        Đặc biệt: Có đèn bàn phím
        Hệ điều hành: Windows 11 Home SL
        Thiết kế: Vỏ nhựa
        Kích thước, khối lượng: Dài 359.36 mm - Rộng 250.34 mm - Dày 21.95 ~ 22.9 mm - Nặng 1.98 kg
        Thời điểm ra mắt: 2022`,
        status:"Còn hàng",  
        name :"Acer Predator Helios PH18",
        img1: "./img/Products/Acer/Acer Predator Helios PH18/1.jpg",
        img2: "./img/Products/Acer/Acer Predator Helios PH18/2.jpg",
        img3: "./img/Products/Acer/Acer Predator Helios PH18/3.jpg",
        company: "Acer",
    },
    {
        id:4,
        img_src:"./img/Products/MSI/MSI Cyborg 15/imgSrc.jpg",
        discount: "0",
        price:"27490000",
        desc:`
        CPU: i7 12650H 2.30 GHz
        RAM: 8 GBDDR5 2 khe (1 khe 8 GB + 1 khe trống) 4800 MHz
        Ổ cứng: 512 GB SSD NVMe PCIe Gen 4.0
        Màn hình: 15.6" Full HD (1920 x 1080) 144Hz
        Card màn hình: Card rời RTX 4050 6GB
        Cổng kết nối: HDMI - LAN - (RJ45) - 3.5 mm - 2 x USB 3.21 x Type-C (hỗ trợ USB 3.2 Gen1, DisplayPort)
        Đặc biệt: Có đèn bàn phím
        Hệ điều hành: Windows 11 Home SL
        Thiết kế: Vỏ nhựa
        Kích thước, khối lượng: Dài 359.36 mm - Rộng 250.34 mm - Dày 21.95 ~ 22.9 mm - Nặng 1.98 kg
        Thời điểm ra mắt: 2022`,
        status:"Còn hàng",  
        name :" MSI Cyborg 15",
        img1: "./img/Products/MSI/MSI Cyborg 15/1.jpg",
        img2: "./img/Products/MSI/MSI Cyborg 15/2.jpg",
        img3: "./img/Products/MSI/MSI Cyborg 15/3.jpg",
        company: "MSI",
    },
    {
        id:5,
        img_src:"./img/Products/MSI/MSI Cyborg 15/imgSrc.jpg",
        discount: "0",
        price:"27490000",
        desc:`
        CPU: i7 12650H 2.30 GHz
        RAM: 8 GBDDR5 2 khe (1 khe 8 GB + 1 khe trống) 4800 MHz
        Ổ cứng: 512 GB SSD NVMe PCIe Gen 4.0
        Màn hình: 15.6" Full HD (1920 x 1080) 144Hz
        Card màn hình: Card rời RTX 4050 6GB
        Cổng kết nối: HDMI - LAN - (RJ45) - 3.5 mm - 2 x USB 3.21 x Type-C (hỗ trợ USB 3.2 Gen1, DisplayPort)
        Đặc biệt: Có đèn bàn phím
        Hệ điều hành: Windows 11 Home SL
        Thiết kế: Vỏ nhựa
        Kích thước, khối lượng: Dài 359.36 mm - Rộng 250.34 mm - Dày 21.95 ~ 22.9 mm - Nặng 1.98 kg
        Thời điểm ra mắt: 2022`,
        status:"Còn hàng",  
        name :" MSI Cyborg 15",
        img1: "./img/Products/MSI/MSI Cyborg 15/1.jpg",
        img2: "./img/Products/MSI/MSI Cyborg 15/2.jpg",
        img3: "./img/Products/MSI/MSI Cyborg 15/3.jpg",
        company: "MSI",
    },
    {
        id:6,
        img_src:"./img/Products/MSI/MSI Cyborg 15/imgSrc.jpg",
        discount: "0",
        price:"27490000",
        desc:`
        CPU: i7 12650H 2.30 GHz
        RAM: 8 GBDDR5 2 khe (1 khe 8 GB + 1 khe trống) 4800 MHz
        Ổ cứng: 512 GB SSD NVMe PCIe Gen 4.0
        Màn hình: 15.6" Full HD (1920 x 1080) 144Hz
        Card màn hình: Card rời RTX 4050 6GB
        Cổng kết nối: HDMI - LAN - (RJ45) - 3.5 mm - 2 x USB 3.21 x Type-C (hỗ trợ USB 3.2 Gen1, DisplayPort)
        Đặc biệt: Có đèn bàn phím
        Hệ điều hành: Windows 11 Home SL
        Thiết kế: Vỏ nhựa
        Kích thước, khối lượng: Dài 359.36 mm - Rộng 250.34 mm - Dày 21.95 ~ 22.9 mm - Nặng 1.98 kg
        Thời điểm ra mắt: 2022`,
        status:"Còn hàng",  
        name :" MSI Cyborg 15",
        img1: "./img/Products/MSI/MSI Cyborg 15/1.jpg",
        img2: "./img/Products/MSI/MSI Cyborg 15/2.jpg",
        img3: "./img/Products/MSI/MSI Cyborg 15/3.jpg",
        company: "MSI",
    },
    {
        id:7,
        img_src:"./img/Products/MSI/MSI Cyborg 15/imgSrc.jpg",
        discount: "0",
        price:"27490000",
        desc:`
        CPU: i7 12650H 2.30 GHz
        RAM: 8 GBDDR5 2 khe (1 khe 8 GB + 1 khe trống) 4800 MHz
        Ổ cứng: 512 GB SSD NVMe PCIe Gen 4.0
        Màn hình: 15.6" Full HD (1920 x 1080) 144Hz
        Card màn hình: Card rời RTX 4050 6GB
        Cổng kết nối: HDMI - LAN - (RJ45) - 3.5 mm - 2 x USB 3.21 x Type-C (hỗ trợ USB 3.2 Gen1, DisplayPort)
        Đặc biệt: Có đèn bàn phím
        Hệ điều hành: Windows 11 Home SL
        Thiết kế: Vỏ nhựa
        Kích thước, khối lượng: Dài 359.36 mm - Rộng 250.34 mm - Dày 21.95 ~ 22.9 mm - Nặng 1.98 kg
        Thời điểm ra mắt: 2022`,
        status:"Còn hàng",  
        name :" MSI Cyborg 15",
        img1: "./img/Products/MSI/MSI Cyborg 15/1.jpg",
        img2: "./img/Products/MSI/MSI Cyborg 15/2.jpg",
        img3: "./img/Products/MSI/MSI Cyborg 15/3.jpg",
        company: "MSI",
    },

]

const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var i = 0;

loadHighlightProducts = () => {
    var product = document.getElementById("highlightItem");

    for(let i = 0; i < 4; i++) {
        
        product.innerHTML += `
        <div class="col-lg-3 col-md-3">
            <div class="product-item" style="height: 300px;">
                <img src=" ${product_list[i].img_src}" alt="">

                <div class="down-content">  
                    <a href="detail.html?id=${product_list[i].id}">
                            <h6> ${product_list[i].name} </h6>
                            <span>Chi tiết</span>
                        </a>
                        <h5>${price.format(product_list[i].price)}</h5>
                        <h4>${price.format(product_list[i].price * (100-product_list[i].discount)/100)}</h4>
                    <button type="button" class="cart" onclick="addItem(${product_list[i].id})">Giỏ hàng <i class="fa fa-cart-plus"></i></button>
                </div>

            </div>
        </div>`;

    }
}

loadMainPageProducts = () => {
    var product = document.getElementById("mainPageItem");

    for(let i = 4; i < product_list.length; i++) {
        
        product.innerHTML += `
            <div class="col-lg-3 col-md-3">
                <div class="product-item" style="height: 300px;">
                    <img src="${product_list[i].img_src}" alt="">

                    <div class="down-content">  
                        <a href="detail.html?id=${product_list[i].id}">
                            <h6> ${product_list[i].name} </h6>
                            <span>Chi tiết</span>
                        </a>
                        <h5>${price.format(product_list[i].price)}</h5>
                        <h4>${price.format(product_list[i].price * (100-product_list[i].discount)/100)}</h4>
                        <button type="button" class="cart" onclick="addItem(${product_list[i].id})">Giỏ hàng <i class="fa fa-cart-plus"></i></button>
                    </div>

                </div>
            </div>`;
    }
}


loadProducts = () => {
    const company = urlParams.get('company')
    var items = document.getElementById("items");

    if(company == null) {
        for (let i = 0; i < product_list.length; i++) {
            items.innerHTML += `
            <div class="col-lg-3 col-md-3">
                <div class="product-item" style="height: 300px;">
                    <img src="${product_list[i].img_src}" alt="">

                    <div class="down-content">  
                        <a href="detail.html?id=${product_list[i].id}">
                            <h6> ${product_list[i].name} </h6>
                            <span>Chi tiết</span>
                        </a>
                        <h5>${price.format(product_list[i].price)}</h5>
                        <h4>${price.format(product_list[i].price * (100-product_list[i].discount)/100)}</h4>
                        <button type="button" class="cart" onclick="addItem(${product_list[i].id})">Giỏ hàng <i class="fa fa-cart-plus"></i></button>
                    </div>

                </div>
            </div>`;            
        }
    } else {
        for (let i = 0; i < product_list.length; i++) {
            if(product_list[i].company == company) {
                items.innerHTML += `
                    <div class="col-lg-3 col-md-3">
                        <div class="product-item" style="height: 300px;">
                            <img src="${product_list[i].img_src}" alt="">

                            <div class="down-content">  
                                <a href="detail.html?id=${product_list[i].id}">
                                    <h6> ${product_list[i].name} </h6>
                                    <span>Chi tiết</span>
                                </a>
                                <h5>${price.format(product_list[i].price)}</h5>
                                <h4>${price.format(product_list[i].price * (100-product_list[i].discount)/100)}</h4>
                                <button type="button" class="cart" onclick="addItem(${product_list[i].id})">Giỏ hàng <i class="fa fa-cart-plus"></i></button>
                            </div>

                        </div>
                    </div>`;    
            }        
        }
    }
}

var totalAmount = 0;
loadCartItem = () => {
    items = document.getElementById("item");
    let ord = 1;
    for(let i = 0; i < product_list.length; i++) {
        let quantity = parseInt(sessionStorage.getItem(i));
        let lastPrice = product_list[i].price * (100-product_list[i].discount)/100
        if(sessionStorage.getItem(i) != null){
            items.innerHTML += `
                <tr style="text-align: center;">
                    <td>${ord}</td>
                    <td><img src="${product_list[i].img_src}" style="width: 100%;" alt=""></td>
                    <td><a href="detail.html?id=${product_list[i].id}">${product_list[i].name}</a></td>
                    <td><input style="text-align:center;" class="col-9" id="quantityItemId${i}" type="number" min="0" onchange="changeQuantity(${i})" value="${quantity}"></td>
                    <td><input type="number" name="txtPriceId${i}" 
                        value="${lastPrice}" 
                        title="${price.format(lastPrice)}" 
                        readonly style="width: 100px; text-align: center;"></td>
                    <td><input type="number" id="txtTotal" name="txtTotal"
                        value="${lastPrice*quantity}"
                        title="${price.format(lastPrice*quantity)}" 
                        readonly style="width: 100px; text-align: center;"></td>
                    <td> <button type="button" class="btn text-primary" onclick="removeItem(${i})"> <i class="fa fa-trash"> </i> </button> </td>

                </tr>
            `; 
            totalAmount += (lastPrice*quantity);
        }
    }
    document.getElementById('totalAmount').value = totalAmount;
    document.getElementById('totalAmount').title = price.format(totalAmount);
    
}

loadDetailItem = () => {
    const id = urlParams.get('id')
    if(id == null) {
        window.location.href = "/";
    }
    item = document.getElementById("item");
    item.innerHTML = `
        <div class="section-heading">
            <h2>Chi tiết sản phẩm</h2>
            <i class="fa fa-long-arrow-right" aria-hidden="true" style="margin-left: 30px;"></i>
            <a href="products.html?company=${product_list[id].company}">${product_list[id].company}</a>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            <a href="">${product_list[id].name}</a>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="right-image">
                    <div style="width: 90%;margin-top: 80px;" id="demo" class="carousel slide" data-ride="carousel">

                        <!-- Indicators -->
                        <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                            <li data-target="#demo" data-slide-to="3"></li>
                        </ul>

                        <!-- The slideshow -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="${product_list[id].img_src}">
                            </div>

                            <div class="carousel-item">
                            <img src="${product_list[id].img1}">
                            </div>

                            <div class="carousel-item">
                            <img src="${product_list[id].img2}">
                            </div>

                            <div class="carousel-item">
                            <img src="${product_list[id].img3}">
                            </div>

                        </div>

                        <!-- Left and right controls -->
                        <a class="carousel-control-prev" href="#demo" data-slide="prev">
                            <span class="carousel-control-prev-icon bg-dark"></span>
                        </a>
                        <a class="carousel-control-next" href="#demo" data-slide="next">
                            <span class="carousel-control-next-icon bg-dark"></span>
                        </a>

                    </div>

                    <h3>Giá:${price.format(product_list[id].price)}</h3>
                    <h3>Giá khuyến mãi: ${price.format(product_list[id].price * (100-product_list[id].discount)/100)}.</h3>
                    <button type="button" onclick="addItem(${product_list[id].id})" 
                        class="btn btn-outline-primary" 
                        style="font-size: 25px; margin-left: 35%; margin-top: 35px">Giỏ hàng
                        <i class="fa fa-cart-plus"></i>
                    </button>
                </div>
            </div>
            <div? class="col-md-6">
                <div class="left-content">
                <h4>Thông số sản phẩm</h4>
                <p>${product_list[id].desc}</p>

            </div>
        </div?
    `;
}

const set = new Set();
for(x of product_list) {
    set.add(x.company);
}

loadMenu = () => {
    menu = document.getElementById("menu");
    for (x of set.values()) {
        menu.innerHTML += `<a href="products.html?company=${x}" class="dropdown-item">${x}</a>`
    }
}

