import React from "react";

// Interface for customization options
interface TitleProps {
  text: string;
  size: "100px"; // Optional: Title size (e.g., 'h1', 'h2', 'h3')
  // Add more customization options as needed
}

const customStyle = {
  color: "red",
  fontSize: "20px",
};

const Title: React.FC<TitleProps> = ({ text, size = "h1" }) => {
  const colorList = ["#f00", "#00f", "#ff0", "#0f0", "#f0f"]; // Array of vibrant colors
  const [currentColor, setCurrentColor] = React.useState(colorList[0]); // State for current color

  // Animate color change every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        (colorList.indexOf(currentColor) + 1) % colorList.length;
      setCurrentColor(colorList[nextIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [colorList, currentColor]);

  return <span style={{ color: currentColor, fontSize: size }}>{text}</span>;
};

export default Title;
