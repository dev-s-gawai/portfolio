const skills = [
  "Industrial & Production Engineering",
  "Workshop Practice",
  "Engineering Graphics",
  "Basic Mechanical Engineering",
  "MS Excel",
  "PowerPoint Presentations",
  "Technical Documentation",
  "Python Basics",
  "AI Tools & Productivity",
  "Problem Solving"
];

const workshopTools = [
  "Fitting",
  "Welding",
  "Lathe",
  "Foundry",
  "Carpentry",
  "Smithy"
];

const goals = [
  "Gain Industrial Exposure",
  "Learn Manufacturing Systems",
  "Build Practical Engineering Skills",
  "Improve Technical & Analytical Skills",
  "Explore Industrial Operations",
  "Work in Automobile & Manufacturing Industry"
];

const certificates = [
  {
    title: "Robotics & IoT Workshop",
    place: "IIT Indore",
    year: "2022",
    desc: "Participated in a technical workshop focused on robotics fundamentals and IoT concepts.",
    image: "https://raw.githubusercontent.com/dev-s-gawai/content/main/Screenshot%202026-05-23%20140730.png"
  },
  {
    title: "Competitive Programming & DSA Workshop",
    place: "IIT Indore",
    year: "2024",
    desc: "Attended workshop on programming logic, algorithms, and data structure fundamentals.",
    image: "https://raw.githubusercontent.com/dev-s-gawai/content/main/8c61a457-fa1f-4792-bb74-e76a3d2fe699.png"
  },
  {
    title: "Technical Participation Certificate",
    place: "SGSITS",
    year: "2025",
    desc: "Participated in technical and academic activities focused on engineering learning and professional development.",
    image: "https://raw.githubusercontent.com/dev-s-gawai/content/main/sgsits_certificate.png"
  }
];

const subjects = [
  "Engineering Graphics",
  "Engineering Physics",
  "Basic Mechanical Engineering",
  "Electrical Engineering",
  "Workshop Practice",
  "Programming Fundamentals",
  "Engineering Mathematics"
];

function openLinkedIn() {
  window.open(
    "https://www.linkedin.com/in/devesh-kumar-gawai-134346320",
    "_blank"
  );
}

document.addEventListener("DOMContentLoaded", () => {

  const skillsGrid = document.getElementById("skillsGrid");
  const toolsGrid = document.getElementById("toolsGrid");
  const goalsGrid = document.getElementById("goalsGrid");
  const certGrid = document.getElementById("certGrid");
  const subjectsList = document.getElementById("subjectsList");

  // Skills
  skills.forEach((skill, index) => {
    skillsGrid.innerHTML += `
      <div class="skill-card">
        <div class="skill-number">${index + 1}</div>
        <div class="skill-title">${skill}</div>
      </div>
    `;
  });

  // Tools
  workshopTools.forEach(tool => {
    toolsGrid.innerHTML += `
      <div class="tool-box">${tool}</div>
    `;
  });

  // Subjects
  subjects.forEach(subject => {
    subjectsList.innerHTML += `
      <div class="subject-item">
        <div class="subject-dot"></div>
        <div class="subject-name">${subject}</div>
      </div>
    `;
  });

  // Certificates
  certificates.forEach(cert => {
    certGrid.innerHTML += `
      <div class="cert-card">
        <div class="cert-header">
          <div>
            <div class="cert-title">${cert.title}</div>
            <div class="cert-place">${cert.place}</div>
          </div>

          <div class="cert-year">${cert.year}</div>
        </div>

        <div class="cert-desc">${cert.desc}</div>

        <img src="${cert.image}" alt="Certificate">
      </div>
    `;
  });

  // Goals
  goals.forEach((goal, index) => {
    goalsGrid.innerHTML += `
      <div class="goal-card">
        <div class="goal-number">0${index + 1}</div>
        <div class="goal-title">${goal}</div>
      </div>
    `;
  });

});