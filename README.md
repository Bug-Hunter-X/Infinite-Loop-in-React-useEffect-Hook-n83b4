# Infinite Loop in React useEffect Hook
This repository demonstrates a common React bug: an infinite loop caused by an incorrect dependency declaration in the `useEffect` hook.

## Bug Description
The `MyComponent` component uses `useEffect` to update the `count` state. However, the dependency array `[count]` causes the effect to run continuously, resulting in an infinite loop. This is because every change to `count` triggers a re-render, which in turn triggers the `useEffect` hook again.

## Bug Solution
The solution is to adjust the dependency array to remove the `count` variable.  This prevents the effect from running continuously and resolves the infinite loop.