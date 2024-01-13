export function Stats({ items }) {
  console.log(!items.length);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🐱‍🏍</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percantage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percantage === 100
          ? "You got everything! Ready to go ✈"
          : `🧳You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percantage} %)`}
      </em>
    </footer>
  );
}
