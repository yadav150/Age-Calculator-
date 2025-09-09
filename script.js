const btn = document.getElementById('calcBtn');
const dobInput = document.getElementById('dob');
const ageOnInput = document.getElementById('ageOn');
const resultDiv = document.getElementById('result');

btn.addEventListener('click', function() {
  // Reset mode
  if (btn.innerText === 'Reset') {
    dobInput.value = '';
    ageOnInput.value = '';
    resultDiv.innerHTML = '';
    btn.innerText = 'Calculate Age';
    return;
  }

  const dob = new Date(dobInput.value);
  const ageOnDate = ageOnInput.value ? new Date(ageOnInput.value) : new Date();

  if (!dob || dob > ageOnDate) {
    alert('Please enter a valid Date of Birth and Age On date.');
    return;
  }

  const diffMs = ageOnDate - dob;

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.4375);
  const years = Math.floor(days / 365.25);

  resultDiv.innerHTML = `
    <p><strong>Your age on ${ageOnDate.toDateString()}:</strong></p>
    <p>${years} years ${Math.floor(months%12)} months ${days%30} days</p>
    <p>${months} months ${days%30} days</p>
    <p>${days} days</p>
    <p>${weeks} weeks</p>
    <p>${hours} hours</p>
    <p>${minutes} minutes</p>
  `;

  btn.innerText = 'Reset';
});