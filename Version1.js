function addActivity() {
    const activityInput = document.getElementById('activity');
    const durationInput = document.getElementById('duration');
    const activityLog = document.getElementById('activityLog');
  
    const activity = activityInput.value;
    const duration = durationInput.value;
  
    if (activity && duration) {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `<strong>${activity}</strong> - ${duration} minutes`;
  
      activityLog.appendChild(listItem);
  
      activityInput.value = '';
      durationInput.value = '';
    } else {
      alert('Please enter both activity and duration.');
    }
  }
