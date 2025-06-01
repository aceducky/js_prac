try {
  setTimeout(() => {
    throw new Error("This won't be handled by catch");
  }, 1000);
} catch (err) {
  console.log("won't work");
}