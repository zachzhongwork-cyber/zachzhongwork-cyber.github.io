const reviewQuestions = [
  "这个月，我有没有做一件能让我更自由的事？",
  "最近的行动，是在靠近愿景，还是只是在消耗惯性？",
  "我有没有把一项能力沉淀成可复用的作品？",
  "我是否正在用自己的评价体系，而不是只用外界反馈定义自己？",
  "下一步最小、但真实的前进动作是什么？"
];

const questionNode = document.querySelector("#reviewQuestion");
const nextQuestionButton = document.querySelector("#nextQuestion");
let questionIndex = 0;

nextQuestionButton?.addEventListener("click", () => {
  questionIndex = (questionIndex + 1) % reviewQuestions.length;
  questionNode.textContent = reviewQuestions[questionIndex];
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.toggleAttribute("aria-current", isCurrent);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));
