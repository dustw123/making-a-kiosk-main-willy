window.onload = () => {

/*================================= 01. 메뉴 객체 만들기 ====================================*/

let menu = [];

menu = {
    menuCoffee : [
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
    menuTea: [
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
    menuSandwich: [
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


        // 스코프 확인!!
    }

    // console.log(ul);


} //for in 끝

/*=================탭 선택 후 리스트 매치시켜서 display================*/

// 1.for문으로 index값 넣고 매치 시켜주는 방식
// const tab = document.getElementById('tab');
// let tabList = document.createElement('li');
// tabList.className = 'tab';


// 2.각 tab에 ul의 class 매치 시켜주는 방식

let menuCoffee = document.getElementById('menu_coffee');
menuCoffee.appendChild(ul);

console.log(menuCoffee);

menuCoffee.onclick = function() {
    if (document.getElementById("menu_coffee").checked){
    modal.style.display = "none";
    } else {
    modal.style.display = "block";
    }
}



} //window.onload 끝
