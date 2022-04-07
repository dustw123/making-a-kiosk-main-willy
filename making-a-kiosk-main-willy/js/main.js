window.onload = () => {

/*================================= 01. 메뉴 객체 만들기 ====================================*/

let cafeMenu = {
    menuCoffee: [
        { menu : "아메리카노", price : 3000, num : 1 },
        { menu : "카페라떼", price : 4000, num : 1 },
        { menu : "바닐라빈라떼", price : 4000, num : 1},
        { menu : "캐러멜라떼", price : 4500, num : 1 },
        { menu : "카페모카", price : 4500, num : 1 }
    ],
    menuTea: [
        { menu : "얼그레이", price : 3000, num : 1 },
        { menu : "잉글리쉬브랙퍼스트", price : 3000, num : 1 },
        { menu : "애플티", price : 3000, num : 1}
    ],
    menuSandwich: [
        { menu : "잠봉뵈르", price : 6000, num : 1 },
        { menu : "치킨클럽샌드위치", price : 6500, num : 1 },
        { menu : "BLT샌드위치", price : 6500, num : 1}
    ]
};


console.log(cafeMenu);

/*================================= 02. Tab 선택 함수 ====================================*/
// 1. tab default 값 노출상태 유지
// 2. 빈 배열 만들어두기 (어떤걸 선택할지 모르기 때문)
// 3. tab click시 ul display: block


let menu = [];

function chooseMenuTab(){
    //탭 index와 li 연동
    let tab = document.getElementById('tab');
    

    //리스트 뿌려주기
    let tabList = document.getElementById('tabList');
    let tabListUl = document.createElement('ul');
    tabListUl.className = 'menu_area';


}







} //window.onload 끝
