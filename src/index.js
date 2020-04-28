const asyncFilter = async (arr, f) =>
  (
    await Promise.all(
      e.map(async (e) => ({
        filter: await f(e),
        e,
      }))
    )
  )
    .filter(({ filter }) => Boolean(filter))
    .map(({ e }) => e);

export { asyncFilter };
export default asyncFilter;
