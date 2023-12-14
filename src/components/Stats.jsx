import React from "react";

export default function Stats({ items }) {
  const itemsNum = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedNum / itemsNum) * 100);

  if (itemsNum === 0) {
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀🚀🚀</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "you got everything! Ready to go ✈"
          : `You have ${itemsNum} items on your list, and you already packed
        ${packedNum} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
