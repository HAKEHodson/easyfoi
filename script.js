// Major UK public authorities with approximate FOI emails.
// Users should verify current contact details. WhatDoTheyKnow maintains a comprehensive, updated list.
const authorities = [
  { name: "Cabinet Office", email: "foi-team@cabinetoffice.gov.uk", category: "Central Government" },
  { name: "Home Office", email: "foi.requests@homeoffice.gov.uk", category: "Central Government" },
  { name: "Ministry of Justice", email: "data.access@justice.gov.uk", category: "Central Government" },
  { name: "Department for Work and Pensions", email: "freedom-of-information-request@dwp.gov.uk", category: "Central Government" },
  { name: "HM Revenue and Customs", email: "foi.request@hmrc.gov.uk", category: "Central Government" },
  { name: "Ministry of Defence", email: "cio-foi@mod.gov.uk", category: "Central Government" },
  { name: "Department for Education", email: "foi.requests@education.gov.uk", category: "Central Government" },
  { name: "Department of Health and Social Care", email: "foi@dhsc.gov.uk", category: "Central Government" },
  { name: "Department for Transport", email: "foi-advice-team@dft.gov.uk", category: "Central Government" },
  { name: "Department for Environment, Food & Rural Affairs", email: "defra.helpline@defra.gov.uk", category: "Central Government" },
  { name: "Foreign, Commonwealth & Development Office", email: "foi-dpa.pmcs@fcdo.gov.uk", category: "Central Government" },
  { name: "HM Treasury", email: "foirequests@hmtreasury.gov.uk", category: "Central Government" },
  { name: "Department for Science, Innovation and Technology", email: "foi-requests@dsit.gov.uk", category: "Central Government" },
  { name: "Department for Business and Trade", email: "foi@businessandtrade.gov.uk", category: "Central Government" },
  { name: "Department for Energy Security and Net Zero", email: "foi.requests@energysecurity.gov.uk", category: "Central Government" },
  { name: "Department for Culture, Media and Sport", email: "foi@dcms.gov.uk", category: "Central Government" },
  { name: "Department for Levelling Up, Housing and Communities", email: "foi@levellingup.gov.uk", category: "Central Government" },
  { name: "Information Commissioner's Office", email: "icocasework@ico.org.uk", category: "Regulator" },
  { name: "National Audit Office", email: "enquiries@nao.org.uk", category: "Audit" },
  { name: "BBC", email: "foi@bbc.co.uk", category: "Media" },
  { name: "Ofcom", email: "information.requests@ofcom.org.uk", category: "Regulator" },
  { name: "Environment Agency", email: "enquiries@environment-agency.gov.uk", category: "Agency" },
  { name: "Natural England", email: "foi@naturalengland.org.uk", category: "Agency" },
  { name: "NHS England", email: "england.foi@nhs.net", category: "NHS" },
  { name: "Metropolitan Police Service", email: "foi@met.police.uk", category: "Police" },
  { name: "Greater Manchester Police", email: "foi@gmp.police.uk", category: "Police" },
  { name: "West Midlands Police", email: "foi@west-midlands.police.uk", category: "Police" },
  { name: "Birmingham City Council", email: "foi.mailbox@birmingham.gov.uk", category: "Local Government" },
  { name: "Manchester City Council", email: "foi@manchester.gov.uk", category: "Local Government" },
  { name: "Leeds City Council", email: "foi@leeds.gov.uk", category: "Local Government" },
  { name: "Liverpool City Council", email: "foi@liverpool.gov.uk", category: "Local Government" },
  { name: "City of London Corporation", email: "information.officer@cityoflondon.gov.uk", category: "Local Government" },
  { name: "Westminster City Council", email: "foi@westminster.gov.uk", category: "Local Government" },
  { name: "Camden Council", email: "foi@camden.gov.uk", category: "Local Government" },
  { name: "Hackney Council", email: "foi@hackney.gov.uk", category: "Local Government" },
  { name: "Southwark Council", email: "foi@southwark.gov.uk", category: "Local Government" },
  { name: "Lambeth Council", email: "foi@lambeth.gov.uk", category: "Local Government" },
  { name: "Tower Hamlets Council", email: "foi@towerhamlets.gov.uk", category: "Local Government" },
  { name: "Islington Council", email: "foi@islington.gov.uk", category: "Local Government" },
  { name: "Kensington and Chelsea Council", email: "foi@rbkc.gov.uk", category: "Local Government" },
  { name: "Wandsworth Council", email: "foi@wandsworth.gov.uk", category: "Local Government" },
  { name: "Greenwich Council", email: "foi@royalgreenwich.gov.uk", category: "Local Government" },
  { name: "Lewisham Council", email: "foi@lewisham.gov.uk", category: "Local Government" },
  { name: "Newham Council", email: "foi@newham.gov.uk", category: "Local Government" },
  { name: "Brent Council", email: "foi@brent.gov.uk", category: "Local Government" },
  { name: "Ealing Council", email: "foi@ealing.gov.uk", category: "Local Government" },
  { name: "Haringey Council", email: "foi@haringey.gov.uk", category: "Local Government" },
  { name: "Barnet Council", email: "foi@barnet.gov.uk", category: "Local Government" },
  { name: "Croydon Council", email: "foi@croydon.gov.uk", category: "Local Government" },
  { name: "Enfield Council", email: "foi@enfield.gov.uk", category: "Local Government" },
  { name: "Redbridge Council", email: "foi@redbridge.gov.uk", category: "Local Government" },
  { name: "Hillingdon Council", email: "foi@hillingdon.gov.uk", category: "Local Government" },
  { name: "Hounslow Council", email: "foi@hounslow.gov.uk", category: "Local Government" },
  { name: "Kingston upon Thames Council", email: "foi@kingston.gov.uk", category: "Local Government" },
  { name: "Merton Council", email: "foi@merton.gov.uk", category: "Local Government" },
  { name: "Richmond upon Thames Council", email: "foi@richmond.gov.uk", category: "Local Government" },
  { name: "Sutton Council", email: "foi@sutton.gov.uk", category: "Local Government" },
  { name: "Waltham Forest Council", email: "foi@walthamforest.gov.uk", category: "Local Government" },
  { name: "Bromley Council", email: "foi@bromley.gov.uk", category: "Local Government" },
  { name: "Bexley Council", email: "foi@bexley.gov.uk", category: "Local Government" },
  { name: "Havering Council", email: "foi@havering.gov.uk", category: "Local Government" },
  { name: "Barking and Dagenham Council", email: "foi@lbbd.gov.uk", category: "Local Government" },
  { name: "City of Edinburgh Council", email: "foi@edinburgh.gov.uk", category: "Local Government (Scotland)" },
  { name: "Glasgow City Council", email: "foi@glasgow.gov.uk", category: "Local Government (Scotland)" },
  { name: "Cardiff Council", email: "freedomofinformation@cardiff.gov.uk", category: "Local Government (Wales)" },
  { name: "Transport for London", email: "foi@tfl.gov.uk", category: "Transport" },
  { name: "Network Rail", email: "foi@networkrail.co.uk", category: "Transport" },
  { name: "Highways England / National Highways", email: "foi@nationalhighways.co.uk", category: "Transport" },
  { name: "UK Health Security Agency", email: "informationrights@ukhsa.gov.uk", category: "Agency" },
  { name: "Care Quality Commission", email: "information.access@cqc.org.uk", category: "Regulator" },
  { name: "Ofsted", email: "informationrequest@ofsted.gov.uk", category: "Regulator" },
  { name: "Companies House", email: "enquiries@companieshouse.gov.uk", category: "Agency" },
  { name: "HM Land Registry", email: "foi@landregistry.gov.uk", category: "Agency" },
  { name: "Intellectual Property Office", email: "information@ipo.gov.uk", category: "Agency" },
  { name: "Charity Commission", email: "foi@charitycommission.gov.uk", category: "Regulator" },
  { name: "Financial Conduct Authority", email: "foi@fca.org.uk", category: "Regulator" },
  { name: "Bank of England", email: "enquiries@bankofengland.co.uk", category: "Central Bank" },
  { name: "Office for National Statistics", email: "info@ons.gov.uk", category: "Agency" },
  { name: "Electoral Commission", email: "info@electoralcommission.org.uk", category: "Regulator" },
  { name: "Local Government Association", email: "info@local.gov.uk", category: "Association" },
  { name: "NHS Trust (example – search for specific)", email: "", category: "NHS" },
  { name: "School or Academy (example – search for specific)", email: "", category: "Education" },
  { name: "University (example – search for specific)", email: "", category: "Education" }
];

// State
let currentStep = 1;
let selectedAuthority = null;

// Theme
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// Wizard navigation
function showStep(step) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.step-content').forEach(s => s.classList.remove('active'));
  document.querySelector(`.step[data-step="${step}"]`).classList.add('active');
  document.querySelector(`.step-content[data-step="${step}"]`).classList.add('active');
  currentStep = step;
  if (step === 4) generatePreview();
  window.scrollTo({ top: document.getElementById('wizard').offsetTop - 80, behavior: 'smooth' });
}

document.querySelectorAll('.next').forEach(btn => {
  btn.addEventListener('click', () => {
    if (validateStep(currentStep)) showStep(currentStep + 1);
  });
});

document.querySelectorAll('.prev').forEach(btn => {
  btn.addEventListener('click', () => showStep(currentStep - 1));
});

document.getElementById('restart').addEventListener('click', () => {
  document.getElementById('info-request').value = '';
  document.getElementById('user-name').value = '';
  document.getElementById('user-email').value = '';
  document.getElementById('user-phone').value = '';
  selectedAuthority = null;
  document.getElementById('selected-authority').hidden = true;
  document.getElementById('authority-search').value = '';
  document.getElementById('authority-results').innerHTML = '';
  document.getElementById('other-auth').checked = false;
  document.getElementById('custom-authority').hidden = true;
  document.getElementById('custom-email').hidden = true;
  showStep(1);
});

function validateStep(step) {
  if (step === 1) {
    const text = document.getElementById('info-request').value.trim();
    if (text.length < 20) {
      alert('Please describe the information you want in a bit more detail (at least a couple of sentences).');
      return false;
    }
  }
  if (step === 2) {
    const other = document.getElementById('other-auth').checked;
    if (!selectedAuthority && !other) {
      alert('Please select an authority or tick the “other” box and enter a name.');
      return false;
    }
    if (other && !document.getElementById('custom-authority').value.trim()) {
      alert('Please enter the name of the authority.');
      return false;
    }
  }
  if (step === 3) {
    const name = document.getElementById('user-name').value.trim();
    const email = document.getElementById('user-email').value.trim();
    if (!name || !email || !email.includes('@')) {
      alert('Please enter your full name and a valid email address.');
      return false;
    }
  }
  return true;
}

// Examples
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.getElementById('info-request').value = chip.dataset.example;
  });
});

// Authority search
const searchInput = document.getElementById('authority-search');
const resultsDiv = document.getElementById('authority-results');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (q.length < 2) {
    resultsDiv.innerHTML = '';
    return;
  }
  const matches = authorities.filter(a => a.name.toLowerCase().includes(q)).slice(0, 12);
  resultsDiv.innerHTML = matches.map(a => `
    <div class="result-item" data-name="${a.name}" data-email="${a.email || ''}">
      <strong>${a.name}</strong>
      <div class="cat">${a.category}${a.email ? ' · ' + a.email : ''}</div>
    </div>
  `).join('') || '<div class="result-item">No matches. Try WhatDoTheyKnow for the full list, or use “other” below.</div>';

  resultsDiv.querySelectorAll('.result-item[data-name]').forEach(item => {
    item.addEventListener('click', () => {
      selectedAuthority = {
        name: item.dataset.name,
        email: item.dataset.email
      };
      document.getElementById('selected-name').textContent = selectedAuthority.name;
      document.getElementById('selected-authority').hidden = false;
      resultsDiv.innerHTML = '';
      searchInput.value = '';
      document.getElementById('other-auth').checked = false;
      document.getElementById('custom-authority').hidden = true;
      document.getElementById('custom-email').hidden = true;
    });
  });
});

document.getElementById('clear-authority').addEventListener('click', () => {
  selectedAuthority = null;
  document.getElementById('selected-authority').hidden = true;
});

document.getElementById('other-auth').addEventListener('change', (e) => {
  const show = e.target.checked;
  document.getElementById('custom-authority').hidden = !show;
  document.getElementById('custom-email').hidden = !show;
  if (show) selectedAuthority = null;
  document.getElementById('selected-authority').hidden = true;
});

// Generate request
function generatePreview() {
  const info = document.getElementById('info-request').value.trim();
  const name = document.getElementById('user-name').value.trim();
  const email = document.getElementById('user-email').value.trim();
  const phone = document.getElementById('user-phone').value.trim();
  const format = document.getElementById('preferred-format').value;

  let authorityName, authorityEmail;
  if (document.getElementById('other-auth').checked) {
    authorityName = document.getElementById('custom-authority').value.trim();
    authorityEmail = document.getElementById('custom-email').value.trim();
  } else if (selectedAuthority) {
    authorityName = selectedAuthority.name;
    authorityEmail = selectedAuthority.email;
  } else {
    authorityName = 'the relevant public authority';
    authorityEmail = '';
  }

  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const subject = `Freedom of Information request – ${info.substring(0, 60).replace(/\n/g, ' ')}${info.length > 60 ? '…' : ''}`;

  let body = `${today}\n\nDear Freedom of Information Team,\n\n`;
  body += `I am writing to make a request for information under the Freedom of Information Act 2000.\n\n`;
  body += `Please provide the following recorded information:\n\n${info}\n\n`;
  body += `I would prefer to receive the information ${format}.\n\n`;
  body += `If any part of this request is unclear, or if you need me to refine it so that it can be answered within the cost limit, please contact me so that I can clarify or narrow the request.\n\n`;
  if (phone) body += `You can contact me by phone on ${phone} or by email.\n\n`;
  body += `Thank you for your assistance.\n\nYours faithfully,\n\n${name}\n${email}`;

  document.getElementById('preview-subject').textContent = subject;
  document.getElementById('preview-body').textContent = body;

  // Mailto
  const mailto = document.getElementById('mailto-link');
  if (authorityEmail) {
    const mailtoUrl = `mailto:${authorityEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    mailto.href = mailtoUrl;
    mailto.style.display = 'inline-block';
  } else {
    mailto.style.display = 'none';
  }

  // Store for later actions
  window.currentRequest = { subject, body, authorityName, authorityEmail, name, email, info };
}

// Actions
document.getElementById('copy-request').addEventListener('click', () => {
  const text = `Subject: ${window.currentRequest.subject}\n\n${window.currentRequest.body}`;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-request');
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = orig, 2000);
  });
});

document.getElementById('download-request').addEventListener('click', () => {
  const text = `Subject: ${window.currentRequest.subject}\n\n${window.currentRequest.body}`;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'foi-request.txt';
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('save-request').addEventListener('click', () => {
  const req = window.currentRequest;
  const requests = JSON.parse(localStorage.getItem('foi-requests') || '[]');
  const sentDate = new Date().toISOString();
  const dueDate = addWorkingDays(new Date(), 20);
  requests.push({
    id: Date.now(),
    authority: req.authorityName,
    subject: req.subject,
    info: req.info,
    sent: sentDate,
    due: dueDate.toISOString(),
    status: 'Sent'
  });
  localStorage.setItem('foi-requests', JSON.stringify(requests));
  renderTracker();
  alert('Request saved to your tracker.');
  document.getElementById('tracker').scrollIntoView({ behavior: 'smooth' });
});

function addWorkingDays(start, days) {
  let count = 0;
  const date = new Date(start);
  while (count < days) {
    date.setDate(date.getDate() + 1);
    const day = date.getDay();
    if (day !== 0 && day !== 6) count++; // skip weekends
  }
  return date;
}

function renderTracker() {
  const list = document.getElementById('requests-list');
  const noReq = document.getElementById('no-requests');
  const requests = JSON.parse(localStorage.getItem('foi-requests') || '[]');
  if (requests.length === 0) {
    list.innerHTML = '';
    noReq.style.display = 'block';
    return;
  }
  noReq.style.display = 'none';
  list.innerHTML = requests.slice().reverse().map(r => {
    const due = new Date(r.due);
    const now = new Date();
    const isOverdue = now > due && r.status === 'Sent';
    const dueStr = due.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const sentStr = new Date(r.sent).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    return `
      <div class="request-card">
        <h4>${r.authority}</h4>
        <p>${r.info.substring(0, 140)}${r.info.length > 140 ? '…' : ''}</p>
        <div class="request-meta">
          Sent: ${sentStr} · 
          Due: <span class="${isOverdue ? 'overdue' : 'due'}">${dueStr}${isOverdue ? ' (overdue)' : ''}</span> · 
          Status: ${r.status}
        </div>
        <button class="btn small" onclick="deleteRequest(${r.id})">Remove</button>
      </div>
    `;
  }).join('');
}

window.deleteRequest = function(id) {
  let requests = JSON.parse(localStorage.getItem('foi-requests') || '[]');
  requests = requests.filter(r => r.id !== id);
  localStorage.setItem('foi-requests', JSON.stringify(requests));
  renderTracker();
};

// WhatDoTheyKnow search helpers
function openWdtkSearch(query) {
  const q = (query || '').trim();
  if (!q) return;
  const url = `https://www.whatdotheyknow.com/search?query=${encodeURIComponent(q)}`;
  window.open(url, '_blank', 'noopener');
}

document.getElementById('search-wdtk')?.addEventListener('click', () => {
  openWdtkSearch(document.getElementById('wdtk-search').value);
});

document.getElementById('wdtk-search')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') openWdtkSearch(e.target.value);
});

document.getElementById('search-from-request')?.addEventListener('click', () => {
  const text = document.getElementById('info-request').value.trim();
  if (!text) {
    alert('Describe the information you want first, then search for similar existing requests.');
    return;
  }
  // Use first ~100 chars as a sensible search query
  const query = text.replace(/\n/g, ' ').substring(0, 120);
  openWdtkSearch(query);
});

// Init
renderTracker();
showStep(1);
