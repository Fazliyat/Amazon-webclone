const video = document.getElementById('video');
const cameraIcon = document.getElementById('cameraIcon');
const captureButton = document.getElementById('captureButton');

cameraIcon.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      cameraIcon.style.display = 'none'; // Hide icon once camera is active
      captureButton.style.display = 'block'; // Show capture button
    })
    .catch(error => {
      console.error('Error accessing camera:', error);
    });
});

captureButton.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0);

  const imageData = canvas.toDataURL('image/jpeg'); // Change format if needed

  // Display captured image (optional)
  // const capturedImage = document.createElement('img');
  // capturedImage.src = imageData;
  // document.body.appendChild(capturedImage);

  // Download image (optional)
  const link = document.createElement('a');
  link.href = imageData;
  link.download = 'captured_image.jpg'; // Change filename if needed
  link.click();
});
