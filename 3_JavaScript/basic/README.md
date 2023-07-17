### 목차
- [변수와 연산자](#변수와-연산자)

# 자바스크립트

1. 웹 브라우저에서 읽고 실행되는 언어
2. 보안성이 없음
3. html 내에 작성
4. 대소문자의 구분 엄격

## 적용 방법
1. 내부 스크립트
- html 문서 내에 스크립트 정의 후 직접 작성
- 필요한 위치에 
```html
<script type="text/javascript">
    스크립트 내용
</script>
```
2. 외부 스크립트
- 스크립트를 다른 문서에 작성하고 "파일명.js"로 저장
- 효과를 적용할 문서에
```html
<script type="text/javascritp" src="파일명.js">
    다른 문장 작성 금지
</script>
```

<br>

# 변수와 연산자
[위로 이동](#목차)

## var, const, let
```js
var 변수명 = 값;
변수명 = 값;

const 변수명 = 값;

let 변수명 = 값;
변수명 = 값;
```

1. var : 예전 방식 (사용X)
2. const : 상수
3. let : 변수 - 값을 수정할 수 있다
- 자주 사용하는 건 const, 가끔 사용하는 건 let, 거의 사용하지 않는 건 var

## 출력
```js
console.log();
```