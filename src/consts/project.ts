import uikit from "@image/Frame 1.png";
import petple from "@image/petple.png";
import { ui, eofficeImg, fansPickImg } from "./image";

export const projects = [
  {
    title: "React-ui-kit",
    subTitle: ["React를 기반으로 한 UI 컴포넌트 라이브러리입니다."],
    description: [
      "재사용이 가능한 UI컴포넌트이며, 사용자가 커스텀한 디자인을 적용할 수 있습니다.",
    ],
    thumbnail: uikit,
    github: "https://github.com/ahyeonbaek/react-ui-kit",
    personnel: "personal",
    period: "2024.10.29 ~ ",
    skill: ["React", "TypeScript"],
    component: [
      { name: "Accordion", image: ui.accordion },
      { name: "Pagination", image: ui.pagination },
      { name: "Calendar", image: ui.calendar },
      { name: "Popover", image: ui.popover },
      { name: "Select", image: ui.select },
      { name: "Tab", image: ui.tab },
      { name: "Trigger", image: ui.trigger },
    ],
    mainFunction: [
      {
        name: "Accordion, Pagination, Calendar, Popover, Select, Tab, Trigger, Modal",
      },
      { name: "Context API 기반으로 한 전역 상태 관리", description: "" },
      { name: "props를 이용한 커스터마이징 지원", description: "" },
      { name: "재사용성과 확장성을 중심으로 설계", description: "" },
      { name: "사용자가 디자인을 자유롭게 설정 가능", description: "" },
    ],
    image: [],
  },
  {
    title: "E-office",
    subTitle: ["사내 회의실 예약, 회의 내용 정리 프로그램입니다."],
    thumbnail: eofficeImg.home,
    github: "https://github.com/ahyeonbaek/eoffice-front",
    personnel: "team 3",
    period: "2024.11.26 ~ 2024.12.9",
    skill: ["React", "TypeScript", "Node.js", "MongoDB"],
    mainFunction: [
      {
        name: "로그인&로그아웃",
        description:
          "로컬 로그인과 oauth2.0을 통한 구글 소셜 로그인이 있습니다.",
      },
      {
        name: "회의실 등록",
        description:
          "사용자가 회의실 이름, 위치, 인원 정보를 입력하여 회의실을 등록합니다.",
      },
      {
        name: "회의실 예약",
        description: "회의 날짜와 시간을 입력하여 회의실을 예약합니다.",
      },
      {
        name: "회의실 수정&삭제",
        description: "등록한 회의실을 수정,삭제할 수 있습니다.",
      },
      {
        name: "회의 내용 기록",
        description: "회의 내용을 정리하고, 기록할 수 있습니다.",
      },
    ],
    image: [
      eofficeImg.main,
      eofficeImg.home,
      eofficeImg.list,
      eofficeImg.regist,
      eofficeImg.deleteImg,
    ],
    myFunction: [
      {
        name: "헤더",
        description: [
          "로컬스토리지에 있는 토큰을 담아 fetch로 서버에 유저 정보를 가져오는 api 요청을 보내고, 로그인이 확인 되면 프로필 사진을 띄웁니다.",
        ],
      },
      {
        name: "이미지업로드 공통 컴포넌트",
        description: [
          "사용자가 등록했던 이미지가 있으면 보여주고, 없으면 기본 사각형 이미지를 보여줍니다. input의 type을 file로 설정해 이미지를 클릭했을 때 이미지 파일을 선택할 수 있습니다.",
        ],
      },
      {
        name: "사이드바 공통 컴포넌트",
        description: [
          "useLocation를 사용해 현재 페이지의 path와 사이드바에서 선택한 메뉴가 같으면 style을 다르게 보여줍니다. ",
        ],
      },
      {
        name: "회의실 등록",
        description: [
          "사용자가 입력한 회의실 이름, 위치, 인원 정보를 FormData로 수집하여 객체 형태로 서버에 전달합니다.",
        ],
      },
      {
        name: "회의실 예약",
        description: [
          "사용자가 입력한 회의 날짜, 인원정보를 FormData로 수집하여 객체 형태로 서버에 전달합니다.",
        ],
      },
      {
        name: "회의실 수정&삭제",
        description: [
          "PUT,DELETE method를 사용해 회의실정보를 수정하고 삭제합니다.",
        ],
      },
      {
        name: "회의실 목록",
        description: [
          "서버에 등록된 회의실목록을 가져와 보여줍니다. 수정&삭제페이지와 예약페이지로 넘어갈 수 있습니다. ",
        ],
      },
    ],
  },
  {
    title: "FansPick",
    subTitle: [
      "판매자 등록부터 구매까지 가능한 통합형 굿즈 이커머스 웹사이트입니다.",
    ],
    description: [
      "회원가입 시 판매자 or 사용자 중 이용할 type을 선택하면, 역할에 따라 접근할 수 있는 페이지가 나누어집니다.",
      "판매자는 상품을 등록하고, 관리할 수 있으며, 사용자는 결제 시스템을 통해 상품을 구매할 수 있습니다.",
    ],
    thumbnail: fansPickImg.fanspick,
    personnel: "team 4",
    period: "2025.01.3 ~ 2025.01.16",
    skill: [
      "React",
      "TypeScript",
      "React-Hook-Form",
      "Module.CSS",
      "Axios",
      "Node.js",
      "MongoDB",
      "Express",
      "AWS S3",
    ],
    mainFunction: [
      {
        name: "로그인&로그아웃",
        description: [
          "사용자 or 판매자 역할을 선택할 수 있는 로컬로그인과 oauth2.0을 통한 구글,카카오,네이버 소셜로그인이 가능합니다.",
        ],
      },
      {
        name: "프로필 관리 기능",
        description: [
          "사용자가 프로필 정보를 수정 및 저장할 수 있습니다.",
          "AWS S3를 이용한 프로필 이미지를 업로드합니다.",
          "react-daum-postcode을 이용해 배송 주소를 저장합니다.",
        ],
      },
      {
        name: "장바구니 기능",
        description: [
          "비로그인 상태에서 장바구니를 담을 수 있으며, 로그인 시에도 남아있습니다. ",
          "구매할 상품들을 선택하고 결제페이지로 넘어갈 수 있습니다.",
        ],
      },
      {
        name: "즐겨찾기 기능",
        description: [
          "즐겨찾기 항목을 확인할 수 있으며, 선택한 상품들을 장바구니에 담을 수 있습니다.",
        ],
      },
      {
        name: "주문 및 결제 기능",
        description: ["선택한 상품을 구매할 수 있습니다."],
      },
      {
        name: "구매 상품 리뷰 기능",
        description: [
          "사용자가 구매한 상품의 리뷰를 작성할 수 있으며, 사용자의 마이페이지나 상품의 리뷰페이지에서 확인할 수 있습니다.",
        ],
      },
      {
        name: "판매자 전용 기능",
        description: ["판매하고자 하는 상품을 등록하여 관리할 수 있습니다."],
      },
    ],
    image: [
      fansPickImg.login,
      fansPickImg.fanspick,
      fansPickImg.cart,
      fansPickImg.heart,
      fansPickImg.pay,
      fansPickImg.review,
      fansPickImg.manager,
    ],
    myFunction: [
      {
        name: "장바구니 기능",
        description: [
          "로그인 여부에 따라 장바구니를 localStorage에서 사용자별(cart_{userId})로 저장하고,불러옵니다.",
          "상품이 localstorage에 담길 때와 상품의 현재 상세페이지나 가격이 달라질 것을 대비하여, 상품의 고유아이디로 상세 정보를 서버에서 조회 합니다.",
          "상품의 수량을 증가/감소 시킬 수 있습니다.",
          "개별 또는 전체 상품을 삭제할 수 있습니다.",
          "선택한 상품의 총 금액을 계산합니다.",
          "상품을 선택하고 결제하기 버튼을 누를 때, 결제페이지로 상품의 상세정보와 수량 총 가격을 보냅니다.",
          "페이지네이션을 적용해 상품목록을 분할하여 보여줍니다.",
        ],
      },
      {
        name: "즐겨찾기 기능",
        description: [
          "localstorage에서 유저의 즐겨찾기 목록을 가져옵니다.",
          "상품들의 상세 정보를 서버에 요청합니다.",
          "즐겨찾기의 상태가 변경될 때마다 로컬스토리지에 반영합니다.",
          "개별 또는 전체 상품을 삭제할 수 있습니다.",
          "선택한 상품을 장바구니에 추가합니다. 이미 장바구니에 존재하는 상품이면 수량을 증가시킵니다.",
        ],
      },
      {
        name: "구매내역 조회 기능",
        description: [
          "로그인한 사용자의 id를 기반으로 API호출을 통해 데이터를 요청합니다.",
          "서버에서 받은 데이터를 구매내역에 보여줄 orderList와 페이지네이션에 사용할 totalOrder 에 각각 저장합니다. ",
          "각 구매내역은 결제 날짜 기준으로 묶여 표시됩니다. 상품 명을 클릭하면 해당 상품페이지로 이동합니다.",
          "구매한 상품마다 리뷰등록하기 버튼이 있고, 클릭 시 /add-review 경로로 상품 정보를 넘겨 리뷰작성페이지로 이동합니다.",
          "localStorage에서 reviews_${userId} 키로 저장된 리뷰 목록을 불러와 이미 리뷰를 작성한 상품인지 체크합니다.",
          "이미 리뷰를 작성한 상품은 버튼이 비활성화 되어 보이지 않게 처리됩니다.",
          "주문 내역이 1개 이상 있을 경우 페이지네이션 UI를 보여주며, 페이지 변경 시 데이터를 재요청합니다.",
        ],
      },
    ],
  },
  {
    title: "PetPle",
    subTitle: [
      " 실시간 채팅부터 산책 기록, 정보 공유 게시판등 반려인을 위한 올인원 커뮤니티 웹사이트입니다.",
    ],
    description: [
      "반려동물과의 일상, 정보공유 등 다양한 주제로 소통할 수 있습니다.",
    ],
    thumbnail: petple,
    personnel: "team 3",
    period: "2025.02.11 ~ 2025.03.04",
    skill: [
      "React",
      "TypeScript",
      "React-Hook-Form",
      "TanstackQuery",
      "Zustand",
      "Zod",
      "Module.CSS",
      "Axios",
      "Node.js",
      "MongoDB",
      "Express",
      "Jwt",
      "Socket.io",
      "AWS S3",
    ],
    mainFunction: [
      {
        name: "로그인 & 로그아웃 기능",
        description:
          "oauth2.0을 통한 구글,카카오,네이버 소셜로그인이 가능합니다.",
      },
      {
        name: "프로필 기능",
        description:
          "사용자, 반려동물의 프로필 정보를 수정하고 저장할 수 있으며, 작성한 게시물과 좋아요 버튼을 누른 게시물 조회가 가능합니다.",
      },
      {
        name: "게시판 기능",
        description:
          "게시물 조회, 작성, 수정, 삭제가 가능하며, 메인화면에서 인기 게시물을 확인할 수 있습니다.",
      },
      {
        name: "채팅 기능",
        description: "다른 사용자와 1:1 실시간 채팅이 가능합니다.",
      },
      {
        name: "산책 기록 기능",
        description: "산책한 거리를 측정하고, 기록할 수 있습니다.",
      },
      {
        name: "API 모듈화",
        description:
          "API 요청 함수들을 /apis 디렉토리에 모듈화 하여 기능별로 정리했고, 각 컴포넌트에서 해당 API 모듈을 불러와 사용하여 재사용성을 높였습니다.",
      },
      {
        name: "SEO를 위한 HelmetTag 컴포넌트",
        description:
          "검색 엔진 최적화를 위해 각 페이지에 맞는 title과 mesta description을 설정해주는 컴포넌트입니다.",
      },
    ],
    myFunction: [
      {
        name: "로그인 & 로그아웃 기능 (FE,BE)",
        description: [
          "로그인 시 쿠키 token, loginstatus 두가지를 받게 됩니다.",
          "token: 웹브라우저에서 접근이 불가하며, jwt를 사용해 생성한 토큰값이 들어있습니다.",
          "loginStatus: 웹브라우저에서 접근이 가능하며, boolean값을 담고있습니다. true일 때, api요청으로 유저의 정보를 받습니다.",
          "유저의 정보는 tanstack-query를 사용해 react-query에 캐싱되고, zustand에 저장합니다.",
          "로그아웃시 캐싱된 데이터를 삭제하고, zustand를 초기화 시킵니다.",
          "첫 로그인(회원가입)시 랜덤 닉네임을 발급합니다.",
        ],
      },
      {
        name: "사용자 프로필 기능 (FE,BE)",
        description: [
          "닉네임 변경시 zod타입 검사를 통해 10자 이하인지 확인합니다.",
          "닉네임 중복 방지를 위해 중복검사 api요청을 합니다. 중복확인을 하지 않으면 저장은 불가합니다.",
          "프로필 이미지 변경시 이미지 미리보기를 제공합니다. AWS S3를 사용한 imageUpload 유틸을 사용해 이미지를 업로드합니다.",
          "주소 선택 시 모달(다음 주소 API)이 열립니다. 좌표 정보를 포함한 주소를 저장합니다.",
          "수정한 정보를 서버에 전송하고, 이를 zustand에 업데이트 합니다.",
          "toast로 성공/실패 메시지를 표시합니다.",
          "정보 수정 후, 저장버튼을 누르지 않거나 취소버튼을 누르면 이전 정보로 리셋 가능합니다.",
        ],
      },
      {
        name: "반려동물 프로필 기능 (FE,BE)",
        description: [
          "react-hook-form과 zod로 유효성 검사를 합니다.",
          "zustand 에서 사용자의 반려동물 리스트를 가져와 보여줍니다.",
          "반려동물 프로필 이미지 변경시 이미지 미리보기를 제공합니다. AWS S3를 사용한 imageUpload 유틸을 사용해 이미지를 업로드합니다.",
          "PUT 메서드로 반려동물 프로필 수정, DELETE 메서드로 삭제 요청을 합니다.",
          "수정 완료시 zustand에 반영하고 toast로 성공/실패 메시지를 표시합니다.",
        ],
      },
      {
        name: "작성한 게시물과 좋아요한 게시물 (FE,BE)",
        description: [
          "zustand에 저장 된 유저의 닉네임으로 게시물데이터를 요청하여 가져옵니다.",
          "캐시 지속시간은 1분이며, 시간이 지나면 재요청합니다.",
          "Tab 전환으로 작성한 게시물과 좋아요 게시물을 보여줍니다.",
          "페이지네이션을 적용해 한 페이지당 9개씩 최신순으로 보여줍니다.",
        ],
      },
      {
        name: "Cookie 유틸 함수",
        description: [
          "쿠키 문자열에서 특정 키의 값을 추출합니다.",
          "쿠키 파싱 로직을 함수로 만들어 재사용이 가능하게 만들었습니다.",
        ],
      },
    ],
  },
];
