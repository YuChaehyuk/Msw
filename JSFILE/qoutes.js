const quote = document.querySelector("#span1");
const author = document.querySelector("#span2");
console.log(quote);

const quotes = [
    {
        quote: "과거와 후회와 미래라는 희망 속에 현재라는 기회가 존재한다.",
        author: "크리스티아누 호날두",
    },
    {
        quote: "나는 나만에 방식을 창조하고 싶다.",
        author: "루이스 피구",
    },
    {
        quote: "강한 자가 이기는 것이 아니라 이기는 자가 강한 것이다",
        author: "프란츠 바켄바우어",
    },
    { 
        quote: "인생에서 가장 행복할때는 모든것을 이룰때가 아닌 무언가를 하기위해 노력하고있는 지금이다.",
        author: "안드레아 피를로",
    },
    {
        quote: "쓰러질지언정 무릎은 꿇지 않는다.",
        author: "박지성",
    },
    {
        quote: "패배한 변명을 나에게서 찾으면, 패배의 이유가 되지만 남에게서 찾으면 변명일 뿐이다.",
        author: "로이 킨",
    },
    {
        quote: "느리지만 꾸준히 천천히",
        author: "안드레스 이니에스타",
    },
    {
        quote: "무언가를 변화시키기 위해서는 나 자신부터 바꾸어야 된다.",
        author: "펩 과드리올라",
    },
    {
        quote: "세상이 널 버렸다고 생각하는가? 세상을 널 가진 적이 없다.",
        author: "로베르트 피레스",
    },
    {
        quote: "압박감을 이겨내지 못하면 아무 것도 이룰 수 없다.",
        author: "프란츠 베켄바우어",
    },
    {
        quote: "모든 단점은, 장점이 될수 있다.",
        author: "리오넬 메시",
    },
    {
        quote: "힘든가? 하지만 오늘 걸으면 내일은 뛰어야한다.",
        author: "카를레스 푸욜"
    },
    {
        quote: "불가능? 그것은 나약한 자들의 핑계에 불과하다.",
        author: "데이비드 베컴",
    },
    {
        quote: "내가 선택한 일이 옳았다.",
        author: "거스 히딩크",
    },
    {
        quote: "추하게 이길 바에야 아름답게 지는 쪽을 택할 것이다.",
        author: "요한 크루이프",
    }
]

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = `- ${todayQuotes.author} -`;