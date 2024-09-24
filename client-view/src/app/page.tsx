async function getDataFromStrapi(path: string) {
  const baseUrl = "http://localhost:1337";

  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const {data: {title, description}} = await getDataFromStrapi("/api/home-page");
  return (
      <>
        <h1>{title}</h1>
      </>
  );
}
