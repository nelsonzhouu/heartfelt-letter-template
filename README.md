# Heartfelt Letter Website Template 💕

A beautiful, animated letter website template with a pink romantic background. Comes with cute Sanrio characters (Cinnamoroll & My Melody) as examples, but you can easily replace them with any images or GIFs you want!

**Note:** The pink background with hearts and flowers is specifically designed for love confessions and apologies. The characters are completely customizable - use any images that fit your message!

**Current Template Setup:** The example GIFs and character setup (Cinnamoroll + My Melody) are currently configured as an apology letter to a girlfriend. You should customize the characters, text, and GIFs to match your specific situation and message!

## ✨ Features

- 🎨 Pink romantic background (designed for love confessions/apologies)
- 🎵 Background music support (starts on user interaction)
- 💫 6 interactive scenes with smooth animations
- 💕 Floating hearts, flowers, and romantic decorative elements
- 📱 Fully responsive (mobile & desktop)
- 🔊 Custom audio player with mute control
- 🎁 Interactive gift box reveal
- ✍️ Typing text animation

## 🚀 Quick Start

### 1. Use This Template
Click "Use this template" on GitHub or clone this repo:
```bash
git clone https://github.com/yourusername/heartfelt-letter-template.git
cd heartfelt-letter-template
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Your Music
- Download your chosen song as MP3
- Rename it to `music.mp3`
- Place it in the `public` folder
- Choose a song that fits the emotion of your message

### 4. Customize the Messages
Edit these files to personalize your message:

**src/components/Scene1.jsx** (line 37)
```jsx
<p className="main-text">Hey [Name], </p>  // Replace [Name]
```

**src/components/Scene2.jsx** (line 6)
```jsx
const fullText = "Your opening message here..."
```

**src/components/Scene3.jsx** (line 26)
```jsx
<p className="main-text">Your message...</p>
```

**src/components/Scene4.jsx** (lines 16-23)
- Main message text - customize all paragraphs with your heartfelt message

**src/components/Scene5.jsx** (lines 25-27)
- Moving forward message

**src/components/Scene6.jsx** (lines 41-45)
- Final promise and signature
- Replace `[Your Name]` with your name

### 5. Run Development Server
```bash
npm run dev
```
Visit http://localhost:5200 to preview

### 6. Deploy to Vercel

**Install Vercel CLI:**
```bash
npm install -g vercel
```

**Deploy:**
```bash
vercel
```

Follow the prompts and you'll get a live URL!

## 🎨 Customization

### Change Characters/GIFs (Highly Recommended!)
The template comes with Sanrio characters as examples, but you should customize them!
- Edit the `src` URLs in scene component files (Scene1.jsx, Scene2.jsx, etc.)
- Use any Tenor GIFs, images, or custom photos you want
- The characters don't have to be Sanrio - use whatever fits your message!

### Modify Colors (Optional)
Edit `src/App.css` and `src/components/Scene.css` to change the pink color scheme if desired.

### Add/Remove Scenes (Advanced)
- Add new scene components in `src/components/`
- Import and add to `src/App.jsx`

## 📁 Project Structure

```
├── public/
│   └── music.mp3          # Your music file (not included)
├── src/
│   ├── components/
│   │   ├── Scene1.jsx     # Opening scene
│   │   ├── Scene2.jsx     # Letter introduction
│   │   ├── Scene3.jsx     # Emotional moment
│   │   ├── Scene4.jsx     # Main message
│   │   ├── Scene5.jsx     # Moving forward
│   │   ├── Scene6.jsx     # Final message reveal
│   │   ├── MusicPlayer.jsx
│   │   ├── FloatingElements.jsx
│   │   ├── StaticDecorations.jsx
│   │   └── Scene.css
│   ├── App.jsx            # Main app
│   ├── App.css            # Global styles
│   └── main.jsx
└── vercel.json            # Vercel config
```

## 🎭 Scene Overview

1. **Scene 1**: Opening with both characters - introduce your message
2. **Scene 2**: Letter card with typing animation - build anticipation
3. **Scene 3**: Both characters - create an emotional moment
4. **Scene 4**: Main message (white card with full message) - your heartfelt words
5. **Scene 5**: Hopeful message - share your wishes for the future
6. **Scene 6**: Interactive gift → final promise/message reveal

## 💡 Tips

- Keep messages genuine and personal
- Test on mobile before sharing
- Make sure music file is added (site won't work without it)
- Preview all scenes before deploying
- Consider adding your own photos/GIFs for more personal touch

## 🚀 Deployment

### Vercel (Recommended)
1. Run `vercel` in project directory
2. Follow prompts
3. Get instant live URL
4. Free tier includes everything you need!

### Other Options
- Netlify
- GitHub Pages (requires build setup)
- Any static host

## 🛠️ Built With

- React + Vite
- CSS3 Animations

## 📝 License

MIT License - Feel free to use this template for personal messages!

## 💝 Credits

Sanrio characters (Cinnamoroll & My Melody) © Sanrio Co., Ltd.

---

**Good luck with your message! 💕**

Remember: Actions speak louder than words, but sometimes a heartfelt website can help express what's in your heart! 🎀
