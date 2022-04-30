const data = {
  experience: [
    {
      post: "Software Development Engineer",
      company: "Altair Engineering Ltd.",
      link: "https://www.altair.com/",
      dates: "August 2020 - Present",
      span: "2 Years",
      stack: "C++, Tcl/Tk & Xml",
      description: `As a part of the Product's Core team, built workspace and learned about how Debugging environment is used in a Product written in C++, Python, Xml and TCL/TK files using Visual Studio.`,
    },
    {
      post: "Machine Learning Intern",
      company: "Quantiphi Inc.",
      link: "https://quantiphi.com/",
      dates: "May 2019 - July 2019",
      span: "2 Months",
      stack: "Python & TypeScript",
      description: `Developed an optimised approach of finding relation between entities from Video's Metadata.Used Statistical and Machine Learning models like Graph Visualisation Libraries, Cooccurrence Matrix and Clustering; Implemented in Python with NetworkX using Graph data structure [O(n)].`,
    },
    {
      post: "Engineering Trainee Intern",
      company: "Wood Plc.",
      link: "https://www.woodplc.com/",
      dates: "May 2018 -- June 2018",
      span: "2 Months",
      stack: "JavaScript, HTML5 & CSS",
      description: `Learnt Equipment Engineering Activities related to Oil and Gas Industries with respect to the firm. Accolade: Received Letter of recommendation for exemplary performance in the internship.`,
    },
  ],
  achievements: [
    {
      title: "IIT COLOR 2019",
      type: "award",
      css: "left: -8px",
      fa: "fa-star",
      linkTitle: "Awarded for my contribution to the IIT BHU's Film and Media Council Festivals and Management.",
      link: " ",
    },
    {
      title: "Editor-In-Chief",
      type: "ANALYTICS",
      fa: "fa-star",
      linkTitle: "Media Club IIT BHU",
      link: "",
      link2Title: "Overall Head of the Student Media Body of the Institute",
      link2: " ",
    },
    {
      title: "Scholarship under TEEP, Taiwan",
      type: "ANALYTICS",
      fa: "fa-star",
      linkTitle: "Accepted funded internship by Prof. Emily Lin in Deep Learning and automation in Finance",
      link: "",
    },
  ],
};

const experienceContainer = document.querySelector(".experience-container");
const achievementsContainer = document.querySelector(".achievements-container");

function experienceFetch(experience) {
  const result = `
            <div class="company">
                <h2>${experience.post} &nbsp;<a target="_blank" rel="noopener" href="${experience.link}"><small>@ ${experience.company}</small></a></h2>
                <div class="timespan"><span class="fa fa-calendar blue"></span> &nbsp; ${experience.dates},<small> ${experience.span}</small></div>
                <div class="experience-description">
                    <span class="stack blue">Stack: ${experience.stack}</span><br>
                    ${experience.description}
                </div>
            </div>
            `;

  return result;
}

function achievementFetch(achievement) {
  const result = `
            <div class="achievement">
                <span class="achievement-ico fa ${
                  achievement.fa
                } w3-xlarge dblue" style="${
    achievement.css || "left: -6px"
  };"></span>
                <h2> ${achievement.title}</h2>
                <span class="link">${
                  achievement.linkTitle
                }: <a class="blue" href="${achievement.link}">${
    achievement.link
  }</a></span><br/>
                ${
                  achievement.link2
                    ? `<span class="link">${achievement.link2Title}: <a class="blue" href="${achievement.link2}">${achievement.link2}</a></span>`
                    : ""
                }
            </div>
            `;

  return result;
}

achievementsContainer.innerHTML = data.achievements
  .map(achievementFetch)
  .join("");
experienceContainer.innerHTML = data.experience.map(experienceFetch).join("");
