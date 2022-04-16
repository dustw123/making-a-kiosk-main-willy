


window.onload = () => {

/*================================= 01. 메뉴 객체 만들기 ====================================*/

let menu = [];

menu = {
    coffee : [
        { name : "아메리카노", price : 3000, num : 1 },
        { name : "아이스 아메리카노", price : 3500, num : 1 },
        { name : "카페라떼", price : 4000, num : 1 },
        { name : "아이스 카페라떼", price : 4500, num : 1 },
        { name : "바닐라빈라떼", price : 4000, num : 1},
        { name : "아이스 바닐라빈라떼", price : 4000, num : 1},
        { name : "캐러멜라떼", price : 4500, num : 1 },
        { name : "아이스 캐러멜라떼", price : 4500, num : 1 },
        { name : "카페모카", price : 4500, num : 1 },
        { name : "아이스 카페모카", price : 4500, num : 1 }
    ],
    tea: [
        { name : "얼그레이", price : 3000, num : 1 },
        { name : "아이스 얼그레이", price : 3500, num : 1 },
        { name : "잉글리쉬브랙퍼스트", price : 3000, num : 1 },
        { name : "아이스 잉글리쉬브랙퍼스트", price : 3500, num : 1 },
        { name : "애플티", price : 3000, num : 1},
        { name : "아이스 애플티", price : 3500, num : 1},
        { name : "캐모마일", price : 3000, num : 1},
        { name : "아이스 캐모마일", price : 3500, num : 1},
        { name : "루이보스", price : 3000, num : 1},
        { name : "아이스 루이보스", price : 3500, num : 1},
        { name : "진저레몬", price : 3000, num : 1},
        { name : "아이스 진저레몬", price : 3500, num : 1},
        { name : "핫초콜릿", price : 3000, num : 1},
        { name : "아이스 초콜릿", price : 3500, num : 1}
    ],
    sandwich: [
        { name : "잠봉뵈르", price : 6000, num : 1 },
        { name : "치킨클럽샌드위치", price : 6500, num : 1 },
        { name : "BLT샌드위치", price : 6500, num : 1}
    ]
};

// console.log(menu);
// console.log(menu.menuCoffee[3]);

for(key in menu){

    let ul = document.createElement('ul');
    ul.className = 'menu_area';
    ul.id = `menu_${key}`;


    for( let i = 0; i < menu[key].length; i++){

        let li = document.createElement('li');
        li.className = 'menu';

        let menuName = document.createElement('p');
        menuName.className = 'menu_name';
        menuName.innerText = menu[key][i].name;
        

        let menuPrice = document.createElement('p');
        menuPrice.className = 'menu_price';
        menuPrice.innerText = menu[key][i].price;
        
        li.appendChild(menuName);
        li.appendChild(menuPrice);

        ul.appendChild(li);

        // let menuCoffeeTab = document.getElementById('tab_menu_coffee');
        // let menuTeaTab = document.getElementById('tab_menu_tea');
        // let menuSandwichTab = document.getElementById('tab_menu_sandwich');

        // 스코프 확인!!

        /*switch문이란 ? 
            case를 만들어서 보여주는 것
            현재 case 3개가 필요하다. 
        */


    } //for문 끝

    console.log(ul);
} //for in 끝


} //window.onload 끝





function showMenu(subMenu){

    let menuCoffee = document.getElementsByClassName('menu_coffee');
    let menuTea = document.getElementsByClassName('menu_tea');
    let menuSandwich = document.getElementsByClassName('menu_sandwich');

    switch(subMenu){
        case 1: 
        menuCoffee[0].style.display = "block";//엘리먼트가 배열이라 이렇게 뽑아준다.
        break;

        case 2:
        menuTea[0].style.display = "block";  
        break;

        case 3:
        menuSandwich[0].style.display = "block";  
        break;
    }



} //showMenu() onclick함수 끝
