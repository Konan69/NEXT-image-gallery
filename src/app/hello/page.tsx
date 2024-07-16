export default async function HelloPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div> Hello world</div>;
}
