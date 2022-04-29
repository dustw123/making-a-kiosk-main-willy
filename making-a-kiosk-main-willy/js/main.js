let totalCount = 0;
let totalPrice = 0;

let menuArray = [];
let selectedArr = [];

window.onload = () => {

/*================================= 01. 메뉴 객체 만들기 ====================================*/

menu = {
    coffee : [
        { id:1, name : "아메리카노", price : 3000, num : 1 },
        { id:2, name : "아이스 아메리카노", price : 3500, num : 1 },
        { id:3, name : "카페라떼", price : 4000, num : 1 },
        { id:4, name : "아이스 카페라떼", price : 4500, num : 1 },
        { id:5, name : "바닐라빈라떼", price : 4000, num : 1},
        { id:6, name : "아이스 바닐라빈라떼", price : 4000, num : 1},
        { id:7, name : "캐러멜라떼", price : 4500, num : 1 },
        { id:8, name : "아이스 캐러멜라떼", price : 4500, num : 1 },
        { id:9, name : "카페모카", price : 4500, num : 1 },
        { id:10, name : "아이스 카페모카", price : 4500, num : 1 }
    ],
    tea: [
        { id:11, name : "얼그레이", price : 3000, num : 1 },
        { id:12, name : "아이스 얼그레이", price : 3500, num : 1 },
        { id:13, name : "잉글리쉬브랙퍼스트", price : 3000, num : 1 },
        { id:14, name : "아이스 잉글리쉬브랙퍼스트", price : 3500, num : 1 },
        { id:15, name : "애플티", price : 3000, num : 1},
        { id:16, name : "아이스 애플티", price : 3500, num : 1},
        { id:17, name : "캐모마일", price : 3000, num : 1},
        { id:18, name : "아이스 캐모마일", price : 3500, num : 1},
        { id:19, name : "루이보스", price : 3000, num : 1},
        { id:20, name : "아이스 루이보스", price : 3500, num : 1},
        { id:21, name : "진저레몬", price : 3000, num : 1},
        { id:22, name : "아이스 진저레몬", price : 3500, num : 1},
        { id:23, name : "핫초콜릿", price : 3000, num : 1},
        { id:24, name : "아이스 초콜릿", price : 3500, num : 1}
    ],
    sandwich: [
        { id:25, name : "잠봉뵈르", price : 6000, num : 1 },
        { id:26, name : "치킨클럽샌드위치", price : 6500, num : 1 },
        { id:27, name : "BLT샌드위치", price : 6500, num : 1}
    ]
};

// console.log(menu);
// console.log(menu.menuCoffee[3]);

for(key in menu){

    let chooseItem = menu[key];
    let itemWrap = document.createElement('ul');
    itemWrap.className = `menu_area wrap__left menu_${key}`;
    itemWrap.id = `menu_${key}`;

    // console.log(chooseItem);

    for( let i = 0; i < chooseItem.length; i++){

        //탭메뉴 리스트 만들기
        let itemList = document.createElement('li');
        itemList.className = 'menu';

        //아이템 이름
        let menuName = document.createElement('p');
        menuName.className = 'menu_name';
        menuName.innerText = chooseItem[i].name;
        
        //아이템 가격
        let menuPrice = document.createElement('p');
        menuPrice.className = 'menu_price';
        menuPrice.innerText = chooseItem[i].price;
        
        //탭메뉴 리스트에 이름,가격 넣기
        itemList.appendChild(menuName);
        itemList.appendChild(menuPrice);

    
        // showClickItem.appendChild(showItemName);        
        // console.log(showClickItem);
        console.log(chooseItem[i].name, chooseItem[i].price, chooseItem[i].num);

        itemList.addEventListener('click', function(){
            clickMenu( {menuClickId:chooseItem[i].id, menuClickName:chooseItem[i].name, price:chooseItem[i].price, num : 1});
            // showChooseMenu();
        });
        itemWrap.appendChild(itemList);
        // 스코프 확인!!
    } //for문 끝

    let menuWrap = document.getElementById('tabList');
    menuWrap.appendChild(itemWrap);

    // console.log(menuWrap);
} //for in 끝


/*-----------클릭이벤트리스너 함수----------*/
function clickMenu(e){
    // console.log(e);
    if(menuArray.length == 0){
        menuArray.push(e);
        console.log(menuArray);
        showChooseMenu(e)
        
    }else{
        const addchooseItem = menuArray.find((addMenu) => addMenu.menuClickName === e.menuClickName);
        console.log(addchooseItem);
        if(addchooseItem === undefined){
            menuArray.push(e);
            console.log(menuArray);
            showChooseMenu(e)
        }
    }
}//클릭이벤트리스너 함수 끝




/*-----------선택 메뉴 Dom 출력함수----------*/
function showChooseMenu(select){
    // console.log(select);
    //우측 선택 메뉴 리스트 만들기
    let showClickItem = document.getElementsByClassName('wrap__cart');

    let html = `
                <div id="cart_item_${select.menuClickId}" class="cart_item">
                    <div class="top">
                        <span>${select.menuClickName}</span>
                        <button type="button" class="delete">X</button>
                    </div>
                    <div class="middle">
                        <span>수량</span>
                        <div class="wrap__quantity">
                            <button type="button" class="plus" onclick="plus(${select.menuClickId})">+</button>
                            <span id="item_quantity_${select.menuClickId}" class="item_quantity">${select.num}</span>
                            <button type="button" class="minus" onclick="minus(${select.menuClickId})">-</button>
                        </div>
                    </div>
                    <div class="bottom">
                        <span>가격</span>
                        <span id="item_price_${select.menuClickId}" class="item_price">${select.price}원</span>
                    </div>
                </div>
    `;

showClickItem[0].insertAdjacentHTML("beforeend",html);

// console.log(html);
}//선택 메뉴 Dom 출력함수 끝


} /*====================window.onload 끝 =======================*/



/*================================= 03. 장바구니 추가 ====================================*/
//아이템 추가 함수
const plus = (id) => {

    // console.log(menuArray);

    let selectedMenu = menuArray.find((menu) => menu.menuClickId == id);
    
    if(selectedMenu.num <= 1){
        selectedMenu.price += selectedMenu.price;    
    }else{
        selectedMenu.price += selectedMenu.price/selectedMenu.num;        
    }
    selectedMenu.num += 1;

    // console.log(test);
    // const cartId = document.getElementById(id);
    let itemCount = document.getElementById('item_quantity_' + id);
    itemCount.innerText= selectedMenu.num;

    let itemPrice = document.getElementById('item_price_' + id);
    itemPrice.innerText = selectedMenu.price + '원';

    console.log(selectedMenu.price, selectedMenu.num);
    // console.log(itemCount);
    // className.appendChild(itemCount);
}

//아이템 빼기 함수
const minus = (id) =>{
    let selectedMenu = menuArray.find((menu) => menu.menuClickId == id);
    
    if(selectedMenu.num > 1){
        selectedMenu.price -= selectedMenu.price/selectedMenu.num;    
        selectedMenu.num -= 1;
    }else if(selectedMenu.num = 1){
        selectedMenu.price = selectedMenu.price;     
        selectedMenu.num = 1;
    }

    let itemCount = document.getElementById('item_quantity_' + id);
    itemCount.innerText= selectedMenu.num;

    let itemPrice = document.getElementById('item_price_' + id);
    itemPrice.innerText = selectedMenu.price + '원';

    console.log(selectedMenu.price, selectedMenu.num);

}

/*================================= 02. 탭 메뉴 뿌려주기 ====================================*/

function showMenu(subMenu){

    let menuCoffee = document.getElementsByClassName('menu_coffee');
    let menuTea = document.getElementsByClassName('menu_tea');
    let menuSandwich = document.getElementsByClassName('menu_sandwich');

    switch(subMenu){
        case 1:
        menuCoffee[0].style.display = "flex";//엘리먼트가 배열이라 이렇게 뽑아준다.
        menuTea[0].style.display = "none"; 
        menuSandwich[0].style.display = "none";  
        break;

        case 2:
        menuTea[0].style.display = "flex";  
        menuSandwich[0].style.display = "none";  
        menuCoffee[0].style.display = "none";
        break;

        case 3:
        menuSandwich[0].style.display = "flex";  
        menuCoffee[0].style.display = "none";
        menuTea[0].style.display = "none"; 
        break;


    }
    // console.log(subMenu);

} //showMenu() onclick함수 끝

/*================================= 04. 장바구니 총 합계 ====================================*/

//최상단에 작성된 문법은 window가 실행될 때 먼저 실행되고 끝난다. 그래서 click이벤트가 발생할 때 실행이 안됨.
//그래서 function으로 묶어서 click이벤트가 발생할 때 해당 function을 불러와서 사용해야 한다.
function total(totalPrice, totalcount){

    const selectedItem = document.querySelectorAll('.cart_item');

    selectedItem.forEach((item) => {
        let itemId = item.id;
        selectedArr.push(parseInt(itemId.substring(-1)));
        //array에 값 불러올 땐 해당 배열에 담겨있는 오브젝트를 비우든지
        //중복되는 id 값은 받아올 수 없게 if문을 만들든지 해야 한다. 안그러면 중복값이 생김.
    });
    

}

