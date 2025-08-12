function createCustomPopup(content) {
  let oldPopup = document.querySelector('#custom-sprint-popup');
  if (oldPopup) oldPopup.remove();

  const popup = document.createElement('div');
  popup.id = 'custom-sprint-popup';
  popup.innerHTML = `
    <div class="popup-header">
      Sprint Goals
      <button class="popup-close-btn">✖</button>
    </div>
    <div class="popup-body">${content}</div>
  `;

  document.body.appendChild(popup);

  popup.querySelector('.popup-close-btn').addEventListener('click', () => {
    popup.remove();
  });
}

function extractSprintGoals(originalPopup) {
  const span = originalPopup.querySelector('span.css-19w20bv');
  if (!span) return '<div class="popup-notfound">Sprint goals not found.<span class="popup-notfound-text">Make sure you have filtered one sprint.</span></div>';

  const sprintGoalsElement = document.querySelector('div[role="presentation"] span.css-19w20bv');
  const content = sprintGoalsElement.textContent;
  const lines = content.split('\n').map(line => line.trim()).filter(line => line);
  return lines
    .map(line => {
      if (line.startsWith('||')) return `<div class="goal-section">${line.replaceAll('|', '').trim()}</div>`;
      if (line.startsWith('|')) return `<div class="goal-item">${line.replaceAll('|', '').trim()}</div>`;
      return `<div class="goal-plain">${line}</div>`;
    })
    .join('');
}

function initObserver() {
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1 && node.getAttribute('role') === 'dialog' && node.getAttribute('aria-label')?.toLowerCase().includes('sprint')) {
          // Found Jira's popup
          const goalsHTML = extractSprintGoals(node);

          // Hide Jira's popup
          node.style.display = 'none';

          // Show custom popup
          createCustomPopup(goalsHTML);
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

initObserver();
