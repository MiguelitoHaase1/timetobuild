import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = 'AIzaSyDinzHPDCGqbpJEhvLY6RqyqqK8iRuGnYQ';
const client = new GoogleGenAI({ apiKey: API_KEY });

async function generateVideo() {
  try {
    console.log('Starting video generation with VEO 3.1...\n');

    // Read the reference image
    const referenceImagePath = path.join(__dirname, 'photos', 'before_reference_frame.jpg');

    console.log('Reference image path:', referenceImagePath);

    // Detailed prompt for the video generation
    const prompt = `A single continuous cinematic shot in a modern corporate office setting:

Superman in his full iconic red cape and blue suit walks confidently toward a minimalist white reception desk. A receptionist sits behind the desk. Superman reaches the desk and carefully removes his red cape, then his blue suit, handing both items to the receptionist. The receptionist accepts them.

Now wearing plain business casual clothes underneath, Superman walks around the side of the reception desk in one smooth motion. He continues walking straight ahead toward a glass office door at the end of a hallway.

He reaches the glass door and stops, standing still with his back completely facing the camera. Through the glass, we can see a typical fluorescent-lit office space beyond. Superman looks down at the floor. His shoulders visibly sink and drop. His head bends forward slightly.

The entire scene flows as one continuous shot - no cuts, no scene changes. Cinematic lighting. Smooth camera movement following Superman's journey. Realistic motion. Melancholic atmosphere. No text or titles. 8 seconds, 1080p, high quality.`;

    console.log('\nPrompt:', prompt);
    console.log('\nGenerating video with VEO 3.1...');
    console.log('This may take several minutes (typically 2-5 minutes)...\n');

    // Generate video (starting without reference image to test basic API)
    const operation = await client.models.generateVideos({
      model: 'veo-3.1-generate-preview',
      prompt: prompt,
      config: {
        aspectRatio: '16:9',
        resolution: '1080p',
        durationSeconds: 8
      }
    });

    const operationName = operation.name;
    console.log('Operation started:', operationName);
    console.log('Polling for completion using REST API...\n');

    // Poll for completion using direct REST API
    let isDone = false;
    let pollCount = 0;
    const maxPolls = 60; // 10 minutes max with 10-second intervals
    let completedOperation = null;

    while (!isDone && pollCount < maxPolls) {
      await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10 seconds
      pollCount++;

      try {
        // Use direct fetch to poll operation status
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/${operationName}?key=${API_KEY}`
        );
        const data = await response.json();

        if (data.done) {
          isDone = true;
          completedOperation = data;
          console.log('\nVideo generation completed!');
        } else if (pollCount % 3 === 0) { // Log every 30 seconds
          console.log(`Still generating... (${pollCount * 10}s elapsed)`);
        }
      } catch (pollError) {
        console.log('Poll error:', pollError.message);
      }
    }

    if (!isDone) {
      console.error('Video generation timed out after 10 minutes');
      process.exit(1);
    }

    // Get the generated video
    const videoUri = completedOperation?.response?.generateVideoResponse?.generatedSamples?.[0]?.video?.uri;

    if (videoUri) {
      console.log('Video URI:', videoUri);

      // Download the video with API key
      const downloadUrl = `${videoUri}`;
      const videoResponse = await fetch(downloadUrl, {
        headers: {
          'X-Goog-Api-Key': API_KEY
        }
      });

      if (!videoResponse.ok) {
        console.error('Download failed:', videoResponse.status, videoResponse.statusText);
        const errorText = await videoResponse.text();
        console.error('Error details:', errorText);
        process.exit(1);
      }

      const videoBuffer = await videoResponse.arrayBuffer();
      console.log('Downloaded video size:', (videoBuffer.byteLength / 1024 / 1024).toFixed(2), 'MB');

      const outputPath = path.join(__dirname, 'photos', 'superman_disempowered.mp4');
      fs.writeFileSync(outputPath, Buffer.from(videoBuffer));
      console.log('Video saved to:', outputPath);
      console.log('\n✅ Success! Your video is ready.');

      return outputPath;
    } else {
      console.error('No video URI in response');
      console.log('Full response:', JSON.stringify(completedOperation, null, 2));
      process.exit(1);
    }

  } catch (error) {
    console.error('Error generating video:', error);
    if (error.message) {
      console.error('Message:', error.message);
    }
    if (error.response) {
      console.error('Response:', JSON.stringify(error.response, null, 2));
    }
    process.exit(1);
  }
}

generateVideo();
