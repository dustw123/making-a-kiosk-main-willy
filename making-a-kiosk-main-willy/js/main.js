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

        // let menuCoffeeTab = document.getElementById('tab_menu_coffee');
        // let menuTeaTab = document.getElementById('tab_menu_tea');
        // let menuSandwichTab = document.getElementById('tab_menu_sandwich');

        let menuCoffee = document.getElementById('menu_coffee');
        let menuTea = document.getElementById('menu_tea');
        let menuSandwich = document.getElementById('menu_sandwich');

        // 스코프 확인!!

        /*switch문이란 ? 
            case를 만들어서 보여주는 것
            현재 case 3개가 필요하다. 
        */
        function showMenu(subMenu){

            switch(subMenu){
                case 1: 
                menuCoffee.style.display = "block";
                break;

                case 2:
                menuTea.style.display = "block";  
                break;

                case 3:
                menuSandwich.style.display = "block";  
                break;
            }
        }
        showMenu();
        console.log(showMenu);

    }

    // console.log(ul);





} //for in 끝


} //window.onload 끝
