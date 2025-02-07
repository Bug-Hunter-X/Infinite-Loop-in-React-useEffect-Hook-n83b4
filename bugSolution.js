```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This runs only on mount
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []); // Empty dependency array, effect runs only on mount

  return <div>Count: {count}</div>;
}
```