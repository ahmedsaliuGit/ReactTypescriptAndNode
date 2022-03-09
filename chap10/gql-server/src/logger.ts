export const log = async (
  resolver: any,
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (!parent) console.log("Started logging");

  const result = await resolver(parent, args, context, info);
  console.log("Finished calling resolver");

  return result;
};
