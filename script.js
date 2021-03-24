let count = 7;

const imgUserApi = `https://randomuser.me/api?results=${count}`;
const containerSlider = document.querySelector(".container_slider");
const dataReview = {
  query: {
    apikey: "30c388a0-8bd5-11eb-b8d3-ffda8e3b4afb",
    url: "https://www.capterra.com/p/140650/Recruitee",
    amount: "7",
  },
  reviews: [
    {
      platform: "capterra.com",
      rating: 5,
      user_name: "Peter R.",
      text: null,
      title: null,
      timestamp: "2021-03-20",
      platform_specific: {
        user_job_title: "Web developer",
        user_company_name: "GoodRequest",
        user_industry: "Computer & Network Security",
        rating_recommendation_likelihood: 9,
        rating_overall: 5,
        rating_functionality: 5,
        rating_ease_of_use: 5,
        rating_value_for_money: null,
        rating_customer_support: null,
        cons:
          "It's a bit difficult and time consuming to setup perfectly, but once setup, all the time invested into setup pays back quickly.",
        pros:
          "Recruitee helps us to streamline our recruiting and onboarding process. It forces us to follow guidelines and deadlines and make our process much more professional.",
      },
    },
    {
      platform: "capterra.com",
      rating: 5,
      user_name: "Naman G.",
      text: null,
      title: null,
      timestamp: "2021-01-12",
      platform_specific: {
        user_job_title: "US Recruiter",
        user_company_name: "NLB Services, Inc.",
        user_industry: "Human Resources",
        rating_recommendation_likelihood: 10,
        rating_overall: 5,
        rating_functionality: 5,
        rating_ease_of_use: 5,
        rating_value_for_money: 5,
        rating_customer_support: 5,
        cons:
          "Nothing like that every thing in this portal is very impressive very good and easy to understand UI easy to use.",
        pros:
          "Help us to find good and reliable Candidates for all the skills. Very Easy to Find Best and genuine profiles ",
      },
    },
    {
      platform: "capterra.com",
      rating: 1,
      user_name: "Verified Reviewer",
      text: null,
      title: null,
      timestamp: "2020-12-15",
      platform_specific: {
        user_job_title: null,
        user_company_name: null,
        user_industry: "Information Technology and Services",
        rating_recommendation_likelihood: 2,
        rating_overall: 1,
        rating_functionality: 2,
        rating_ease_of_use: 2,
        rating_value_for_money: 1,
        rating_customer_support: 1,
        cons:
          "When we tried to cancel our plan, they still billed us for additional month saying we did not cancel. You need to go through several pages do cancel your subscription and although your impression will be that you are cancelled, most likely you will be charged still.  When we discovered this one day later, they still refused to give us refund. I would avoid adding your credit card here.",
        pros:
          "Although the software is nice, they limit the functionality heavily and push you to upgrade to higher plans almost monthly. ",
      },
    },
    {
      platform: "capterra.com",
      rating: 4,
      user_name: "Erica M.",
      text: null,
      title: null,
      timestamp: "2020-12-08",
      platform_specific: {
        user_job_title: "Sr. Recruiting Manager",
        user_company_name: "DeLisaGroup, LLC.",
        user_industry: "Human Resources",
        rating_recommendation_likelihood: 10,
        rating_overall: 4,
        rating_functionality: 5,
        rating_ease_of_use: 5,
        rating_value_for_money: 5,
        rating_customer_support: 5,
        cons:
          "I don't have any dislikes at this point, the software is fantastic. ",
        pros:
          "I was looking for an ATS that included the ability the post to multiple job boards. After what seemed like months of research and demos, I finally came upon and contacted Recruitee and I was impressed from the start. I love that I can create a position and it integrates easily with other job boards, if I choose that option. Or I can simply use the free job boards that Recruitee offers. I also love that I can keep notes, all communication and various info within each job posting OR within each candidate profile. ",
      },
    },
    {
      platform: "capterra.com",
      rating: 5,
      user_name: "Audrey T.",
      text: null,
      title: null,
      timestamp: "2020-12-04",
      platform_specific: {
        user_job_title: "Head of People",
        user_company_name: "Lemonway",
        user_industry: "Financial Services",
        rating_recommendation_likelihood: 10,
        rating_overall: 5,
        rating_functionality: 5,
        rating_ease_of_use: 5,
        rating_value_for_money: null,
        rating_customer_support: 5,
        cons:
          "Prevent interviewer to see others evaluations as long as s/he didn't provide his/her. It will reduce biais.",
        pros: "Automation,Easy implementationReportsInterface",
      },
    },
    {
      platform: "capterra.com",
      rating: 5,
      user_name: "Amena T.",
      text: null,
      title: null,
      timestamp: "2020-12-04",
      platform_specific: {
        user_job_title: "People Ops Manager",
        user_company_name: "Raisa Energy",
        user_industry: "Information Technology and Services",
        rating_recommendation_likelihood: 10,
        rating_overall: 5,
        rating_functionality: 5,
        rating_ease_of_use: 5,
        rating_value_for_money: 5,
        rating_customer_support: 5,
        cons:
          "Sometimes it feels confusing navigating around the settings part. ",
        pros:
          "Everything is awesome; the public roadmap, the option to select who can see the comments, the ease of use and bulk actions, customizable everything, the customer support! And of course the careers site!",
      },
    },
    {
      platform: "capterra.com",
      rating: 4,
      user_name: "Luuk F.",
      text: null,
      title: null,
      timestamp: "2020-11-30",
      platform_specific: {
        user_job_title: "Recruitment Scientist",
        user_company_name: "GoDataDriven",
        user_industry: "Information Technology and Services",
        rating_recommendation_likelihood: 8,
        rating_overall: 4,
        rating_functionality: 4,
        rating_ease_of_use: 5,
        rating_value_for_money: 5,
        rating_customer_support: 5,
        cons:
          "The reporting feature does not work for us as we are used to a continuous hiring cycle and we do not close a job after hiring someone. This reporting feature isn't as important to us currently so it's by no means a deal breaker",
        pros:
          "Recruitee seems to have been build with the end-users in mind. As such it is very intuitive and requires very little explaination to my team. ",
      },
    },
  ],
};
async function fetchUser() {
  let data = dataReview;
  //   const userApi = `https://app.reviewapi.io/api/v1/reviews?apikey=30c388a0-8bd5-11eb-b8d3-ffda8e3b4afb&url=https://www.capterra.com/p/140650/Recruitee&amount=${count}`;
  //   if (localStorage.getItem("review")) {
  //     console.log("Data STORAGE");
  //     data = JSON.parse(localStorage.getItem("review"));
  //   } else {
  //     console.log("Data from API");
  //     data = await fetch(url).then((data) => data.json());
  //     localStorage.setItem("review", JSON.stringify(data));
  //   }
  const { results } = await fetch(imgUserApi).then((data) => data.json());
  let imgsData = results.map((obj) => obj.picture.large);

  displayData(data, imgsData);
}

function displayData({ reviews: data }, imgs) {
  let spanHtml = "";
  data.forEach(() => {
    spanHtml += '<span><i class="far fa-circle"></i></span>';
  });
  const htmlData = data
    .map(
      (
        {
          user_name: name,
          platform_specific: {
            pros: dsc,
            user_company_name: compagnie,
            user_industry: jobWork,
            user_job_title: jobTitle,
          },
        },
        i
      ) => {
        return `
     <article class="nextSlide">
          <img src="${imgs[i]}" alt="${name}" />
          <h2 class="name">${name}</h2>
          <h3>${jobWork}</h3>
          <h4>At : ${compagnie == null ? "Web devlopper" : compagnie}</h4>
          <div class="desc">
            <i class="fas fa-quote-right quote"></i>
            <p>
            ${dsc}
            </p>
            <i class="fas fa-quote-left quote lastQuote"></i>
          </div>
          <div class="bullets">
          ${spanHtml}
            
          </div>
          <ul class="socila">
            <li>
              <a href="#"><i class="fab fa-twitter-square"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-facebook-square"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
          <ul class="start">
            <li>
              <i class="fas fa-star"></i>
            </li>
            <li>
              <i class="fas fa-star"></i>
            </li>
            <li>
              <i class="fas fa-star"></i>
            </li>
            <li>
              <i class="fas fa-star"></i>
            </li>
          </ul>
          <span class="jobTitle">${
            jobTitle == null ? "*Google Could" : "* " + jobTitle
          } </span>
          </article>
          `;
      }
    )
    .join("");

  containerSlider.innerHTML = htmlData;
  initSlider();
}
let index = 0;
function initSlider(type = "next") {
  const articles = [...containerSlider.querySelectorAll("article")];

  if (type == "next") {
    index++;
  } else if (type == "prev") {
    index--;
  }

  let last = index - 1 < 0 ? articles.length - 1 : index - 1;
  let next = index + 1;

  if (index < 0) {
    index = articles.length - 1;
  } else if (index > articles.length - 1) {
    index = 0;
    last = articles.length - 1;
  }

  if (next > articles.length - 1) {
    next = 0;
  }
  if (last > articles.length - 1) {
    last = 1;
  }

  console.log(index, next, last);
  articles[last].className = "last";
  articles[next].className = "nextSlide";
  articles[index].className = "active";
  spanActive(articles[index], index);
  //   //   initialSlides(articles);
  //   articles[index].classList.add("active");
  //   let active = containerSlider.querySelector("article.active");
  //   let last =
  //     containerSlider.querySelector("article.last") ||
  //     articles[articles.length - 1];
  //   let nextSlide = active.nextElementSibling;
  //   if (type == "next") {
  //     active.classList.remove("active");
  //     active.classList.remove("nextSlide");
  //     active.classList.add("last");

  //     last.classList.remove("active");
  //     last.classList.remove("last");
  //     last.classList.add("nextSlide");

  //     nextSlide.classList.remove("last");
  //     nextSlide.classList.remove("nextSlide");
  //     nextSlide.classList.add("active");
  //   } else {
  //     console.log("prev");
  //   }
  //   console.log(last, active, nextSlide);
}
// function initialSlides(articles) {
//   let activeIndex = 0;
//   let lastIndex = 0;
//   if (!activeIndex) {
//     lastIndex = articles.length - 1;
//   }
//   articles[activeIndex].classList.remove("nextSlide");
//   articles[activeIndex].classList.add("active");
//   articles[lastIndex].classList.add("last");
//   articles[lastIndex].classList.remove("nextSlide");
// }

fetchUser();

const nextBtn = document.querySelector(".next.btn");
const prevBtn = document.querySelector(".prev.btn");
const timeMoveBar = document.querySelector(".timeMoveBar");
nextBtn.addEventListener("click", (e) => {
  initSlider("next");
  retsAll();
});
prevBtn.addEventListener("click", (e) => {
  initSlider("prev");
  retsAll();
});

function retsAll() {
  timeMoveBar.classList.remove("activeBar");
  //
  setTimeout(() => {
    timeMoveBar.classList.add("activeBar");
    ///
    clearInterval(interv);
    //
    interv = setInterval(() => {
      initSlider("next");
    }, 10000);
    ///
  }, 800);
}

let interv = setInterval(() => {
  initSlider("next");
}, 10000);
function spanActive(article, i) {
  let spans = article.querySelectorAll(".bullets span");
  console.log(spans);
  spans.forEach((span) => {
    spans[i].innerHTML = `<i class="far fa-circle"></i>`;
    span.classList.remove("active-bullet");
  });
  spans[i].classList.add("active-bullet");
  spans[i].innerHTML = `<i class="fas fa-circle"></i>`;
}
{
  /* <span class="active-bullet"><i class="far fa-circle"></i></span> */
}
