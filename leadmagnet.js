// Lead magnet form handler
const lmForm = document.getElementById('leadmagnetFormEl');
if (lmForm) {
  lmForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('leadmagnetEmail').value;
    if (!email) return;
    const leads = JSON.parse(localStorage.getItem('ib-leads') || '[]');
    leads.push({ email, ts: Date.now() });
    localStorage.setItem('ib-leads', JSON.stringify(leads));
    document.getElementById('leadmagnetForm').style.display = 'none';
    document.getElementById('leadmagnetSuccess').style.display = 'block';
    console.log('Lead captured:', email);
  });
}
