#!/usr/bin/env python3
"""
Generate an image for Claus (Problem Solver & System Architect) using Gemini API
"""
import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Gemini API
api_key = os.getenv('GEMINI_API_KEY')
if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env file")

genai.configure(api_key=api_key)

# Image generation prompt for Claus
prompt = """Create a fun, contemporary Silicon Valley style illustration of a friendly AI agent named Claus who is a "Problem Solver & System Architect".

Character concept:
- Tech-savvy, approachable robot/AI character
- Surrounded by subtle visual elements suggesting: code, GitHub logos, system architecture diagrams, debugging symbols
- Modern, clean illustration style with a warm, friendly vibe
- Color palette: coral/orange accents (#D97757), cream backgrounds, modern tech aesthetic
- Should feel professional but approachable - not corporate or sterile
- Think: friendly tech startup mascot, not enterprise software

Style: Contemporary digital illustration, flat design with subtle depth, warm and inviting"""

try:
    # Use Nano Banana (Gemini's image generation model)
    # Using gemini-2.5-flash-image for fast generation
    print("Generating image for Claus using Nano Banana...")

    model = genai.GenerativeModel('gemini-2.5-flash-image')

    response = model.generate_content(prompt)

    # Save the generated image
    if response.parts:
        for i, part in enumerate(response.parts):
            if part.inline_data:
                # Save the image data
                output_path = f'public/claus-agent.png'
                with open(output_path, 'wb') as f:
                    f.write(part.inline_data.data)
                print(f"✓ Image saved to: {output_path}")
            elif part.text:
                print(f"Response text: {part.text}")
    else:
        print("No image generated. Response:", response)

except Exception as e:
    print(f"Error generating image: {e}")
    print(f"Error type: {type(e).__name__}")
    print("\nTrying with Nano Banana Pro instead...")

    try:
        # Try with the Pro version
        model = genai.GenerativeModel('gemini-3-pro-image-preview')
        response = model.generate_content(prompt)

        if response.parts:
            for i, part in enumerate(response.parts):
                if part.inline_data:
                    output_path = f'public/claus-agent.png'
                    with open(output_path, 'wb') as f:
                        f.write(part.inline_data.data)
                    print(f"✓ Image saved to: {output_path}")
                elif part.text:
                    print(f"Response text: {part.text}")
    except Exception as e2:
        print(f"Error with Pro version: {e2}")
