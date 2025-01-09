// src/components/ToolCard.tsx
interface ToolCardProps {
    name: string;
    description: string;
    link: string;
    image: string;
  }
  
  export default function ToolCard({ name, description, link, image }: ToolCardProps) {
    return (
      <div style={cardStyle}>
        <img src={image} alt={name} style={imageStyle} />
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={link} style={buttonStyle} target="_blank" rel="noopener noreferrer">
          Go to Tool
        </a>
      </div>
    );
  }
  
  const cardStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    margin: '10px',
  };
  
  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  };
  
  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  };
  