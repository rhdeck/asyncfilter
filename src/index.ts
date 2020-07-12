const asyncFilter = async <T>(
  arr: T[],
  f: (item: T) => boolean
): Promise<T[]> =>
  (
    await Promise.all(
      arr.map(async (e) => ({
        filter: await f(e),
        e,
      }))
    )
  )
    .filter(({ filter }) => Boolean(filter))
    .map(({ e }) => e);

export default asyncFilter;
