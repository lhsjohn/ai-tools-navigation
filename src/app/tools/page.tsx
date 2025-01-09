// src/app/tools/page.tsx

import React from "react";
import { Icon } from "@iconify/react"; // 使用 Iconify 图标库

// 工具数据
const tools = [
  // Text Generation
  {
    name: "ChatGPT",
    description: "AI-driven chatbot for generating human-like text responses.",
    url: "https://chat.openai.com",
    category: "Text Generation",
    icon: "mdi:chat",
  },
  {
    name: "Jasper AI",
    description: "AI writing assistant for content creation.",
    url: "https://www.jasper.ai",
    category: "Text Generation",
    icon: "mdi:pencil",
  },
  {
    name: "Copy.ai",
    description: "AI-powered copywriting tool for creating content.",
    url: "https://www.copy.ai",
    category: "Text Generation",
    icon: "mdi:comment-text",
  },

  // Image Generation
  {
    name: "DALL·E",
    description: "AI that generates images from textual descriptions.",
    url: "https://openai.com/dall-e",
    category: "Image Generation",
    icon: "mdi:image",
  },
  {
    name: "Stable Diffusion",
    description: "A latent diffusion model for generating images.",
    url: "https://stablediffusionweb.com",
    category: "Image Generation",
    icon: "mdi:image-multiple",
  },
  {
    name: "Artbreeder",
    description: "AI platform to create new images by blending existing ones.",
    url: "https://www.artbreeder.com",
    category: "Image Generation",
    icon: "mdi:image-plus",
  },

  // Video Generation
  {
    name: "Lumen5",
    description: "AI tool to convert text and articles into video content.",
    url: "https://www.lumen5.com",
    category: "Video Generation",
    icon: "mdi:video",
  },
  {
    name: "Runway ML",
    description: "AI tools for creatives, including video and image generation.",
    url: "https://runwayml.com",
    category: "Video Generation",
    icon: "mdi:movie",
  },

  // Audio Generation
  {
    name: "Aiva",
    description: "AI tool for composing emotional music.",
    url: "https://aiva.ai",
    category: "Audio Generation",
    icon: "mdi:music",
  },
  {
    name: "Amper Music",
    description: "AI-driven music composition platform.",
    url: "https://www.ampermusic.com",
    category: "Audio Generation",
    icon: "mdi:volume-high",
  },

  // Code Generation
  {
    name: "Tabnine",
    description: "AI-driven code completion tool.",
    url: "https://www.tabnine.com",
    category: "Code Generation",
    icon: "mdi:code-braces",
  },
  {
    name: "Codex",
    description: "OpenAI's model to generate code from natural language descriptions.",
    url: "https://openai.com/codex",
    category: "Code Generation",
    icon: "mdi:code-tags",
  },
];

// 页面渲染
export default function ToolsPage() {
  return (
    <main style={mainStyle}>
      <h1>AI Tools Directory</h1>
      {["Text Generation", "Image Generation", "Video Generation", "Audio Generation", "Code Generation"].map(
        (category) => (
          <section key={category}>
            <h2>{category}</h2>
            <ul>
              {tools
                .filter((tool) => tool.category === category)
                .map((tool) => (
                  <li key={tool.name}>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkStyle}
                    >
                      <Icon icon={tool.icon} style={iconStyle} />
                      <strong>{tool.name}</strong> - {tool.description}
                    </a>
                  </li>
                ))}
            </ul>
          </section>
        )
      )}
    </main>
  );
}

// 样式
const mainStyle: React.CSSProperties = {
  padding: "20px",
  maxWidth: "800px",
  margin: "0 auto",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#0070f3",
  fontSize: "1.1em",
  display: "flex",
  alignItems: "center",
};

const iconStyle: React.CSSProperties = {
  marginRight: "10px",
  fontSize: "1.5em", // 可以调整图标大小
};
