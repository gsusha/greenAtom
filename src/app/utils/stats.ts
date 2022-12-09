function getConversion(completionsCount: number, opensCount: number): string {
  return completionsCount && opensCount ? ((completionsCount / opensCount) * 100).toFixed(0) : '0';
}

export { getConversion };
