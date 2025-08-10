const jobs = [
  { title: "Data Entry Operator", location: "Bangalore", description: "Basic data entry job for freshers." },
  { title: "Customer Support Executive", location: "Mumbai", description: "Handling customer queries and support." },
  { title: "Delivery Driver", location: "Delhi", description: "Responsible for local deliveries." },
  { title: "Retail Sales Associate", location: "Chennai", description: "Assist customers and manage sales." },
  { title: "Software Tester (Intern)", location: "Hyderabad", description: "Test software products and report bugs." }
];

const jobList = document.getElementById('job-list');
const jobSearch = document.getElementById('job-search');

function displayJobs(jobArray) {
  jobList.innerHTML = '';
  if (jobArray.length === 0) {
    jobList.innerHTML = '<li>No jobs found.</li>';
    return;
  }
  jobArray.forEach(job => {
    const li = document.createElement('li');
    li.classList.add('job-item');
    li.innerHTML = `
      <div class="job-title">${job.title}</div>
      <div class="job-location">${job.location}</div>
      <div class="job-description">${job.description}</div>
    `;
    jobList.appendChild(li);
  });
}

jobSearch.addEventListener('input', () => {
  const query = jobSearch.value.toLowerCase();
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(query) || job.location.toLowerCase().includes(query)
  );
  displayJobs(filteredJobs);
});

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for contacting us. We will get back to you soon!');
  e.target.reset();
});

// Initial display of all jobs
displayJobs(jobs);
