// Function to generate a random Reddit-like title
function getRandomTitle() {
    const titles = [
      'Amazing Cat Photo',
      'Funny Dog Pic',
      'Incredible Nature Shot',
      'Awesome Technology Image',
      'Bizarre Adventure Snapshot',
    ];
    return titles[Math.floor(Math.random() * titles.length)];
  }
  
  function getRandomImageUrl() {
    const width = 150; // Image width
    const height = 150; // Image height
    const imageId = Math.floor(Math.random() * 1000); // Random image ID
    return `https://picsum.photos/${width}/${height}?random=${imageId}`;
  }
  
  // Function to generate random text with varying lengths
  function getRandomText() {
    const textLength = Math.floor(Math.random() * 101); // Random text length between 0 and 100 characters
    let randomText = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  
    for (let i = 0; i < textLength; i++) {
      const randomCharIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomCharIndex);
    }
  
    return randomText;
  }
  
  // Function to generate an array of 12 objects with random data
  function generateRandomData() {
    const dataArray = [];
    for (let i = 1; i <= 12; i++) {
      const randomObject = {
        key: i.toString(),
        img: getRandomImageUrl(),
        title: getRandomTitle(),
        description: `Description for Image ${i}`,
        text: getRandomText(), // Random text with varying lengths
        subReddit: `SubReddit${i}`,
        comments: Math.floor(Math.random() * 8001), // Random number from 0 to 8000
        vote: Math.floor(Math.random() * 8001), // Random number from 0 to 8000
      };
      dataArray.push(randomObject);
    }
    return dataArray;
  }
  
  // Generate the array of 12 objects
  export const articles = generateRandomData();
  

  