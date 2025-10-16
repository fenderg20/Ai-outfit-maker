import { useState } from "react";
import { motion } from "framer-motion";

export default function OutfitMaker() {
  const [style, setStyle] = useState("");
  const [fabric, setFabric] = useState("");
  const [color, setColor] = useState("");
  const [neckline, setNeckline] = useState("");
  const [sleeves, setSleeves] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");

  const handleGenerate = () => {
    const prompt = `A ${color} ${fabric} ${style} dress with ${neckline} neckline and ${sleeves} sleeves, high fashion editorial lighting, full body.`;
    setGeneratedPrompt(prompt);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>AI Outfit Maker ✨</h1>

      <label>Style</label>
      <select value={style} onChange={(e) => setStyle(e.target.value)}>
        <option value="">Select style</option>
        <option value="mini dress">Mini Dress</option>
        <option value="ball gown">Ball Gown</option>
        <option value="cocktail dress">Cocktail Dress</option>
        <option value="slip dress">Slip Dress</option>
        <option value="haute couture gown">Haute Couture Gown</option>
      </select>

      <br />

      <label>Fabric</label>
      <select value={fabric} onChange={(e) => setFabric(e.target.value)}>
        <option value="">Select fabric</option>
        <option value="silk">Silk</option>
        <option value="velvet">Velvet</option>
        <option value="leather">Leather</option>
        <option value="cotton">Cotton</option>
        <option value="satin">Satin</option>
      </select>

      <br />

      <label>Color</label>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">Select color</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="gold">Gold</option>
      </select>

      <br />

      <label>Neckline</label>
      <select value={neckline} onChange={(e) => setNeckline(e.target.value)}>
        <option value="">Select neckline</option>
        <option value="V-neck">V-neck</option>
        <option value="plunging">Plunging</option>
        <option value="halter">Halter</option>
        <option value="scoop">Scoop</option>
        <option value="off-the-shoulder">Off the Shoulder</option>
      </select>

      <br />

      <label>Sleeves</label>
      <select value={sleeves} onChange={(e) => setSleeves(e.target.value)}>
        <option value="">Select sleeves</option>
        <option value="no">No sleeves</option>
        <option value="short">Short</option>
        <option value="long">Long</option>
        <option value="puff">Puff sleeves</option>
        <option value="bell">Bell sleeves</option>
      </select>

      <br /><br />
      <button onClick={handleGenerate}>Generate Outfit Prompt</button>

      {generatedPrompt && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Generated Prompt:</h2>
          <p>{generatedPrompt}</p>
          <p style={{ fontSize: "0.8rem", color: "#555" }}>
            (Copy this prompt into an AI image generator like DALL·E or Midjourney)
          </p>
        </motion.div>
      )}
    </div>
  );
}
