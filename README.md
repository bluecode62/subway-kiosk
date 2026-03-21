# 🥪 써브웨이 키오스크 (개인)
: React 기반으로 제작한 써브웨이 키오스크입니다. 
React와 Redux Toolkit을 활용하여 제작한 키오스크 웹 애플리케이션입니다.  
샌드위치 옵션 선택, 장바구니 관리, 동일 옵션 상품 병합 로직 등을 구현하며 실제 키오스크의 주문식으로 구현했습니다.

### 🛠 사용 기술
* React
* Redux Toolkit
* Styled-components
* JavaScript
* CSS

###  📂 페이지 구성
* 메인 홈화면 페이지(Home.js)
* 메뉴화면 페이지(Menu.js)
* 카트화면 페이지(Cart.js)
* 주문완료 페이지(Paid.js)

### ✨ 주요 기능
#### 1. 주문 상태 관리 (Home.js/Menu.js/Cart.js)
  * 주문 단계(step), 선택된 옵션, 장바구니를 전역 상태로 관리
  * 주문 완료 시 상태 초기화 처리

#### 2. 메뉴 선택 및 장바구니 담기 (Menu.js)
  * 메뉴 클릭 시 장바구니에 즉시 추가
  * 동일한 메뉴는 수량 증가 방식으로 처리

#### 3. 샌드위치 커스터마이징 (Menu.js)
  * 빵, 치즈, 야채, 소스를 단계별로 선택하는 구조
  * 선택 상태를 Redux로 관리하여 단계 이동 시 유지

#### 4. 동일 옵션 상품 병합 처리 (Menu.js)
  * 메뉴 + 토핑 조합을 기준으로 고유 key 생성
  * 동일한 조합일 경우 새로운 항목이 아닌 수량 증가 처리

<hr >

<h1> 주문 상태 관리</h1>
<img width="1018" height="765" alt="키오스크 전역상태01" src="https://github.com/user-attachments/assets/94caa040-a219-438c-b970-00adc98e355f" />
<img width="1126" height="886" alt="키오스크 전역상태02" src="https://github.com/user-attachments/assets/7a6c0ace-8265-4d1e-a94f-786089a9d502" />
<img width="1133" height="894" alt="키오스크 전역상태03" src="https://github.com/user-attachments/assets/25cd0c8d-ad6f-45e3-a83f-d9cdea93df04" />
<img width="843" height="723" alt="키오스크 전역상태04" src="https://github.com/user-attachments/assets/7bc42462-1bbd-4d3e-8b16-2676307e4821" /><br>
<img width="1124" height="899" alt="키오스크 전역상태05" src="https://github.com/user-attachments/assets/fec46875-f11a-4803-b839-fa433be8571c" />

