## Purchasing Agent Mediation
상품 판매자와 구매자간 구매대행 중개 서비스

#### 목차
- [프로젝트 설명](https://github.com/wlsgml719/cryptoBuiltInBoard/edit/main/README.md#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%A4%EB%AA%85)
  - 개발기간
  - 사용기술  
  - 패키지 구조
  - 프로젝트 실행
  - [요구사항 분석](https://github.com/wlsgml719/cryptoBuiltInBoard/edit/main/README.md#%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%B6%84%EC%84%9D)
- [데이터 모델링](https://github.com/wlsgml719/cryptoBuiltInBoard/edit/main/README.md#%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%AA%A8%EB%8D%B8%EB%A7%81)
- [REST API](https://github.com/wlsgml719/cryptoBuiltInBoard/edit/main/README.md#%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%AA%A8%EB%8D%B8%EB%A7%81)
- [테스트]()
<br/>

## 🔍 프로젝트 설명
  ### 개발기간
    2022.11.8 - 2022.11.20
  ### 사용기술  
    Node.js, Nest.js, Typescript, MongoDB
    
  ### 패키지 구조
    ``` javascript
    src
    |- auth: 인증관련
    |- common: 미들웨어 및 예외필터
    |- users: 유저(판매자)관련

    ```
  ### 프로젝트 실행 방법
    ``` javascript
    npm run start:dev
    ```
  
  ### 요구사항 분석
  
  <details>
  <summary>판매자</summary>

    - 회원가입시 (이름/이메일/비밀번호/휴대폰번호)를 입력받습니다.
    - 로그인시 (이메일/비밀번호)를 입력받습니다.
    - 일반 유저는 정산계좌 설정을 통해 판매자로 등록할 수 있습니다.
    - 판매자는 여러개의 마켓을 개설할 수 있습니다.
    - 판매자는 마켓에 여러개의 상품을 등록/수정/삭제할 수 있습니다.
  </details>
  <details>
  <summary>상품</summary>

    - 상품 정보
        - 필수항목
        (이름/이미지(썸네일)/요약설명글/가격/옵션/(옵션별)재고/등록일)
        - 선택항목
        (유의사항/상세설명글/구매일-* 식품/화장품류는 구매일 필수)
            - 설명글은 웹에디터를 통해 작성 할 수 있고,
            (동영상(링크)/글 or 이미지(파일)/글)로 구성됩니다.
    - 상품 카테고리
        - 상품은 1개의 카테고리를 가집니다.
        - 카테고리는 2레벨로 구분합니다.
        (상위 카테고리/하위 카테고리)
    - 상품 상태
        - 상품의 상태는 3가지로 구분합니다.
        (판매중/판매중지/소프트삭제)
    - 배송비
        - 기본배송비는 
        택배선불/무료배송으로 구분합니다.
        - 합배송비는
        상품의 특성에 따른 추가비용으로
        배송옵션과 합배송비가 같은 제품만 합배송이 가능합니다.
        - 구간별 배송비
        구매 수량에 따라 3단계로 설정할 수 있습니다.
</details>

<br/>

## 데이터 모델링

<br/>
  
## REST API Spec
<br/>
  
## 🛠 테스트
